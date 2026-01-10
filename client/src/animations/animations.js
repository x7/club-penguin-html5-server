import { getSceneManager } from "../main";
import { getGameInstance } from "../main";

const animationKeys = {};

export function createAnimation({
    scene,
    logicalAnimationKey,
    phaserAnimationKey,
    textureKey,
    framePrefix,
    frames,
    frame_ranges,
    frame_ranges_start,
    frame_ranges_end,
    frameRate,
    repeat
}) {
    const sceneManager = getSceneManager();
    if(sceneManager.get(scene.sys.settings.key) == null) {
        return;
    }

    if(frame_ranges) {
        const frameNumber = frames[0];
        frames = [];

        for(let i = frame_ranges_start; i < frame_ranges_end + 1; i++) {
            frames.push(`${frameNumber};${i}`);
        }
    }

    frames = frames.map((number) => {
        return { "key": textureKey, frame: `${framePrefix}${number}` };
    });

    scene.anims.create({
        key: phaserAnimationKey,
        frames: frames,
        frameRate: frameRate,
        repeat: repeat
    });

    const doesExist = animationExist(phaserAnimationKey);
    if(!doesExist) {
        console.log('Failed to create animation with key ' + phaserAnimationKey);
        return;
    }

    if(animationKeys[logicalAnimationKey] == undefined) {
        animationKeys[logicalAnimationKey] = [phaserAnimationKey];
        return;
    }

    const newAnimationFrames = [...animationKeys[logicalAnimationKey], ...[phaserAnimationKey]];
    animationKeys[logicalAnimationKey] = newAnimationFrames;
    console.log('added')
}

export function animationExist(key) {
    const game = getGameInstance();
    return game.anims.get(key) == undefined ? false : true;
}

export function getAnimation(key) {
    return animationKeys[key];
}