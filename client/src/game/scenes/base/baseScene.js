import Phaser from "phaser";

// Basic scene setup which all the scenes will extend to prevent rewriting "get manager" every time

export class BaseScene extends Phaser.Scene {
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