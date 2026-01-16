import { getSceneManager } from "../../../main";
import eventEmitter from "../../../util/eventEmitter";

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

export function startLoadingScene(currentScene, loadingText = "No text provided") {
    const sceneManager = getSceneManager();

     if(newScene == "LoadingScene") {
        const scene = sceneManager.getCurrentScene();
        scene.text = loadingText;
        return;
    }
    
    sceneManager.stop(currentScene);
    sceneManager.start("LoadingScene", { "text": loadingText });
}

export function switchFromLoadingScene(newScene, delay = 1) {
    const sceneManager = getSceneManager();
    
    setTimeout(() => {
        eventEmitter.emit("loading:completed", () => {
            sceneManager.stop("LoadingScene");
            sceneManager.start(newScene);
        });
    }, delay * 1000);
}