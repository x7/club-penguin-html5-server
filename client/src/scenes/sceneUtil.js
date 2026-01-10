import { LoadingScene } from "./loading/loading.js";
import { StartScene } from "./start/start.js";
import { RegisterScene } from './register/register.js';
import { LoginScene } from "./login/login.js";
import { SharedDevicePrompt } from "./login/sharedDevicePrompt.js";
import { LoginSavePasswordPrompt } from "./login/SavePasswordPrompt.js";
import { ErrorScene } from "./error/error.js";
import { TownScene } from "./world/rooms/town/town.js";

export function returnSceneClass(sceneId) {
    sceneId = sceneId.toLowerCase();

    const scenes = {
        "loadingscene": LoadingScene,
        "startscene": StartScene,
        "registerscene": RegisterScene,
        "loginscene": LoginScene,
        "loginshareddevicepromptscene": SharedDevicePrompt,
        "loginsavepasswordprompt": LoginSavePasswordPrompt,
        "errorscene": ErrorScene,
        "townscene": TownScene
    };

    const scene = scenes[sceneId];
    if(scene == null) {
        console.log('Invalid scene id ' + sceneId);
        return;
    }

    return scene;
}

export const SCENE_NAMES = {
    "LOADING": "LoadingScene",
    "START_SCREEN": "StartScene",
    "REGISTER": "RegisterScene",
    "LOGIN": "LoginScene",
    "LOGIN_SHARED_DEVICE": "LoginSharedDevicePromptScene",
    "LOGIN_SAVE_PASSWORD": "LoginSavePasswordPromptScene",
    "ERROR": "ErrorScene",
    "ROOM_TOWN": "TownScene"
}