import Phaser from "phaser";
import { returnSceneClass } from "./sceneUtil.js";

export class SceneManager {
    game = null;
    currentScene = null;
    launchedScenes = new Set();

    constructor(game) {
        this.game = game;
    }

    add({ sceneKey = null, scene, autoStart = false }) {
        if(this.get(sceneKey) != null) {
            return;
        }

        if(scene == null) {
            const sceneClass = returnSceneClass(sceneKey);
            if(sceneClass == null) {
                return;
            }

            scene = sceneClass;
        }

        this.game.scene.add((sceneKey == null ? null : sceneKey), scene, autoStart)
    }

    get(sceneId) {
        const scene = this.game.scene.getScene(sceneId);
        if(scene == null) {
            return;
        }

        return scene;
    }   

    start(sceneId, data = {}) {
        let scene = this.get(sceneId);
        if(scene == null) {
            this.add({
                sceneKey: sceneId,
                scene: null,
                autoStart: false
            });

            scene = this.get(sceneId);
            if(scene == null) {
                return;
            }
        }

        const isActive = this.isActive(sceneId);
        if(isActive && this.currentScene.scene.key == sceneId) {
            return;
        }

        if(this.launchedScenes.size != 0) {
            for(const launchedScene of this.launchedScenes) {
                const sceneKey = launchedScene.scene.key;
                this.stop(sceneKey);
            }
        }

        this.stop(this.currentScene.scene.key);
        this.game.scene.start(sceneId, data);
        this.currentScene = scene;
    }

    switch(sceneId, data = {}) {
        this.stop(this.currentScene.scene.key);
        this.start(sceneId, data);
    }

    stop(sceneId) {
        const scene = this.get(sceneId);
        if(scene == null) {
            return;
        }

        if(this.launchedScenes.has(sceneId)) {
            this.launchedScenes.delete(sceneId);
        }

        this.game.scene.stop(sceneId);
    }

    run(sceneId) {
        const scene = this.get(sceneId);
        if(scene == null) {
            return;
        }

        this.game.scene.run(sceneId);
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

    launch(sceneId, data = {}) {
        const scene = this.get(sceneId);
        if(scene == null) {
            return;
        }

        this.currentScene.scene.launch(sceneId, data);
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

    restart(sceneId, data) {
        const scene = this.get(sceneId);
        if(scene == null) {
            return;
        }

        scene.scene.restart(data);
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

        return this.game.scene.isActive(sceneId);
    }

    sendToBack(sceneId) {
        const scene = this.get(sceneId);
        if(scene == null) {
            return;
        }

        this.game.scene.sendToBack(sceneId);
    }

    getCurrentScene() {
        return this.currentScene;
    }

    setCurrentScene(scene) {
        if(!(scene instanceof Phaser.Scene)) {
            scene = this.get(scene);
            if(scene == null) {
                return;
            }
        }

        this.currentScene = scene;
    }

    getLaunchedScenes() {
        return this.launchedScenes;
    }

    clearLaunchedScenes() {
        this.launchedScenes.clear();
    }
}