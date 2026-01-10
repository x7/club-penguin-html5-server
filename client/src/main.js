import Phaser from 'phaser';
import { SceneManager } from './scenes/sceneManager.js';
import { connect } from './network/network.js';
import { GlobalAssetsScene } from './scenes/global/GlobalAssetsScene.js';
import { RegisterScene } from './scenes/register/register.js';
import { LoadingScene } from './scenes/loading/loading.js';
import { TownScene } from './scenes/world/rooms/town/town.js';

const config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 1280,
    height: 720,
    resolution: window.devicePixelRatio || 1,
    dom: { createContainer: true },
    backgroundColor: '#07c5ffff',
    scene: [GlobalAssetsScene],
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH
    }
};

const game = new Phaser.Game(config);
const sceneManager = new SceneManager(game);

// game.events.once('ready', () => {
//     connect();
// });

export function getGameInstance() {
    return game;
}

export function getSceneManager() {
    return sceneManager;
}