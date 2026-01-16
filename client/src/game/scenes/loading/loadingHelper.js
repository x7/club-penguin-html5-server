import { getSceneManager } from "../../../main";

// Todo add minecart animation
export function pickRandomCharacter(data) {
    const arrayData = Object.keys(data);
    const randomCharacter = arrayData[Math.floor(Math.random() * arrayData.length)];
    return data[randomCharacter];
}

export function updateProgress(scene) {
    scene.load_screen_mask.visible = true;
    scene.load_screen_mask.displayWidth = scene.login_screen_background.displayWidth * scene.progress;
}

export function startLoadingScene(currentScene, newScene, loadingText = "No text provided") {
    const sceneManager = getSceneManager();
    sceneManager.stop(currentScene);
    sceneManager.remove(newScene);
    sceneManager.start("LoadingScene", { "text": loadingText, "newScene": newScene, "loading": true });
}