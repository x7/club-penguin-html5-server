import Phaser from 'phaser';
import { SceneManager } from './game/scenes/sceneManager.js';
import { onGameReady } from './events/gameReady.js';
import { AssetManager } from './game/assets/assetManager.js';
import { GameManager } from './game/gameManager.js';
import { LoginScene } from './game/scenes/login/login.js';
import { TownScene } from './game/scenes/world/rooms/town/town.js';
import { LoadingScene } from './game/scenes/loading/loading.js';
import { ErrorScene } from './game/scenes/error/error.js';
import { ServerSelectionScene } from './game/scenes/login/components/serverSelection.js';
import { RegisterScene } from './game/scenes/register/register.js';
import { StartScene } from './game/scenes/start/start.js';
import { AudioManager } from './game/audio/audioManager.js';
import { PreloadAssetsScene } from './game/scenes/preload/PreloadAssetsScene.js';

const config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 1280,
    height: 720,
    resolution: window.devicePixelRatio || 1,
    dom: { createContainer: true },
    backgroundColor: '#07c5ffff',
    scene: [LoadingScene],
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH
    }
};

const game = new Phaser.Game(config);
const gameManager = new GameManager(game);
const sceneManager = new SceneManager(game);
const assetManager = new AssetManager(game);
const audioManager = new AudioManager(game, sceneManager, assetManager);

// Use these for "in scenes"
game.registry.set("gameManager", gameManager);
game.registry.set("sceneManager", sceneManager);
game.registry.set("assetManager", assetManager);
game.registry.set("audioManager", audioManager);

// Use these outside scenes
export function getGameManager() {
    return gameManager;
}

export function getSceneManager() {
    return sceneManager;
}

export function getAssetManager() {
    return assetManager;
}

export function getAudioManager() {
    return audioManager;
}

// game.events.once('ready', () => {
//     onGameReady();
// });