import { returnSceneClass } from "./sceneUtil.js";

/*
    add - call this before starting a scene incase the scene has not yet been added
    nothing will happen if its added as its returns

    get - gets the current scene object

    start - starts the current scene (will call create again so make sure you delete elements that are HTML/DOM on shutdown)
    will not start if its the current active scene prevents reloading the create and overlapping

    stop - stops the current scene (use this for reloading rooms) you will need to call start again

    sleep - doesnt stop the scene but puts it into sleep mode nothing will be received on the scene while its in sleep

    wake - if you sleep a room (using sleep()) then call this to resume it

    launch - this will be put ONTOP of the current scene use this for interfaces and stuff (call stop when u want to get rid of it)

    pause - pauses the scene nothing will be sent like events and stuff use this when u put a interface above current scene and
    dont want events being called on the original scene

    resume - unpauses a scene that was paused using pause() method

    remove - removes a scene from the cache

    isActive - returns true/false depending if the current scene is already active
*/

export class SceneManager {
    game = null;
    currentScene = null; // Current scene
    launchedScenes = new Set(); // List of active overlays that are called via launch (Contains a list of scenes)

    // Game = Phaser game object
    // Scene = the first scene when u register the phaser object
    constructor(game) {
        this.game = game;
    }

    getCurrentScene() {
        return this.currentScene;
    }

    // This only needs to be called ONCE in the inital scene to set the instance
    setCurrentScene(scene) {
        this.currentScene = scene;
    }

    getLaunchedScenes() {
        return this.launchedScenes;
    }

    clearLaunchedScenes() {
        this.launchedScenes.clear();
    }

    // Adds a new scene to the object (Has to be a scene key and scene class)
    // All scenes should have the key set in the constructor if it doesnt then GGVP then u can pass one through
    // PASS A KEY THROUGH IF U dont have the instance
    add({ sceneKey = null, scene, autoStart = false }) {
        if(this.get(sceneKey) != null) {
            console.log('Preventing duplication of scene key ' + sceneKey);
            return;
        }

        if(scene == null) {
            const sceneClass = returnSceneClass(sceneKey);
            if(sceneClass == null) {
                console.log("Cannot find scene " + sceneKey);
                return;
            }

            scene = sceneClass;
        }

        console.log(sceneKey)
        this.game.scene.add((sceneKey == null ? null : sceneKey), scene, autoStart)
        console.log('added key  +' + sceneKey)
    }

    get(sceneId) {
        console.log(sceneId)
        const scene = this.game.scene.getScene(sceneId);
        console.log(scene)
        if(scene == null) {
            console.log(`The scene with id ${sceneId} is null`);
            return;
        }

        console.log(scene)
        return scene;
    }   

    start(sceneId, data = {}) {
        console.log(`calling get scene with ${sceneId}`);
        const scene = this.get(sceneId);
        if(scene == null) {
            return;
        }

        const isActive = this.isActive(sceneId);
        if(isActive && this.currentScene.scene.id == sceneId) {
            return;
        }

        // We need to stop all the "launched" scenes that get added such as interfaces etc
        if(this.launchedScenes.size != 0) {
            for(const launchedScene of this.launchedScenes) {
                const sceneKey = launchedScene.scene.key;
                this.stop(sceneKey);
            }

            console.log('Finished removing all launched scenes');
        }

        this.game.scene.start(sceneId, data);
        this.currentScene = scene;
    }

    stop(sceneId) {
        const scene = this.get(sceneId);
        if(scene == null) {
            return;
        }

        this.game.scene.stop(sceneId);
    }

    sleep(sceneId) {
        const scene = this.get(sceneId);
        if(scene == null) {
            return;
        }

        this.game.scene.sleep(sceneId);
    }

    wake(sceneId) {
        const scene = this.get(sceneId);
        if(scene == null) {
            return;
        }

        this.game.scene.wake(sceneId);
    }

    launch(sceneId) {
        const scene = this.get(sceneId);
        if(scene == null) {
            return;
        }

        this.currentScene.scene.launch(sceneId);
        console.log(this.currentScene)
        console.log('launcching scene')
        this.launchedScenes.add(scene);   
    }

    pause(sceneId) {
        const scene = this.get(sceneId);
        if(scene == null) {
            return;
        }

        this.game.scene.pause(sceneId);
    }

    resume(sceneId) {
        const scene = this.get(sceneId);
        if(scene == null) {
            return;
        }

        this.game.scene.resume(sceneId);
    }

    remove(sceneId) {
        const scene = this.get(sceneId);
        if(scene == null) {
            return;
        }

        this.game.scene.remove(sceneId);
    }

    isActive(sceneId) {
        const scene = this.get(sceneId);
        if(scene == null) {
            return;
        }

        console.log(`sceneid: ${sceneId} - ${this.game.scene.isActive(sceneId)}`)
        return this.game.scene.isActive(sceneId);
    }
}