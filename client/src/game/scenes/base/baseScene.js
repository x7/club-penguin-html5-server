import Phaser from "phaser";
import eventEmitter from "../../../util/eventEmitter";

export class BaseScene extends Phaser.Scene {
    constructor(key) {
        super(key)
    }

    init(data) {
        if(data.loading) {
            this.loading = true;
            this.newScene = data.newScene ?? null;
            this.cameras.main.setAlpha(0);
		    this.input.enabled = false;
        }

        this.getSceneManager().setCurrentScene(this);
    }

    createContent() {
        this.create();
    }

    create() {
        this.createContent();

        if(this.loading) {
            eventEmitter.emit("loading:completed", () => {
                this.sceneManager.stop("LoadingScene");
                this.cameras.main.setAlpha(1);
                this.input.enabled = true;
            });
        }
    }

    getGameManager() {
        return this.game.registry.get("gameManager");
    }

    getSceneManager() {
        return this.game.registry.get("sceneManager");
    }

    getAssetManager() {
        return this.game.registry.get("assetManager");
    }

    getAudioManager() {
        return this.game.registry.get("audioManager");
    }

    stopAllMusic() {
        this.getAudioManager().stopAllMusic();
    }
}