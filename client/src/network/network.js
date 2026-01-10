import { Client } from '@stomp/stompjs';
import { NetworkManager } from './networkManager';
import { getSceneManager } from '../main';
import { EventEmitter } from '../util/eventEmitter';

let client = null;
let clientManager = null;

export async function connect() {
    const sceneManager = getSceneManager();
    sceneManager.add({
        "sceneKey": "LoadingScene",
        "scene": null,
        "autoStart": false,
    });

    sceneManager.start("LoadingScene", {
        "start": async () => {
            // sceneManager.add({
            //     "sceneKey": "StartScene",
            //     "scene": null,
            //     "autoStart": false,
            // });

            // const scene = sceneManager.get("StartScene");
            // scene.load.on("complete", () => {
            //     console.log('com[plete')
            //     EventEmitter.emit("loading:complete")
            // });

            // sceneManager.start("StartScene", { "start": false });
        },

        "progress": () => {

        },

        "complete": () => {
            console.log("completed");
            sceneManager.stop("StartScene")
            setTimeout(() => {
                sceneManager.stop("LoadingScene");
                sceneManager.start("StartScene", { "start": true });
                console.log('loaded')
            }, 2000);
        },

        "text": "      Loading websocket"
    });

    client = new Client({
        brokerURL: 'ws://localhost:8080/ws',
        reconnectDelay: 5000,
    });

    clientManager = new NetworkManager(client);
    clientManager.activate();
}

export function getManager() {
    if(clientManager == null) {
        console.log('The client manager hasnt been setup yet.');
        return null;
    }

    return clientManager;
}