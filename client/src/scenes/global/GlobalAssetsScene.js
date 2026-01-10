import Phaser from "phaser";
import { getSceneManager } from "../../main";
import { createAnimation } from "../../animations/animations";

export class GlobalAssetsScene extends Phaser.Scene {
    constructor() {
        super("GlobalAssetsScene");
    }

    preload() {
        this.load.pack("penguin-pack", "public/phaser/penguin/penguin-pack.json");
        this.load.pack("snowball-pack", "public/phaser/world/snowball/engine-pack.json")
        this.load.json("penguin-animations", "src/animations/penguin.json");
    }

    create() {
        const penguinAnimations = this.cache.json.get("penguin-animations");

        for(const animation of Object.entries(penguinAnimations)) {
            const mainKey = animation[0];

            if(animation[1] == null) {
                return;
            }

            for(const animationInner of animation[1]) {
                createAnimation({
                    scene: this,
                    logicalAnimationKey: mainKey,
                    phaserAnimationKey: animationInner.animation_key,
                    textureKey: animationInner.parent_key,
                    framePrefix: animationInner.frame_parent,
                    frames: animationInner.frames,
                    frame_ranges: animationInner.frame_ranges,
                    frame_ranges_start: animationInner.frame_ranges_start,
                    frame_ranges_end: animationInner.frame_ranges_end,
                    frameRate: animationInner.frame_rate,
                    repeat: animationInner.repeat
                });
            }
        }

        getSceneManager().add({ sceneKey: "TownScene", scene: null, autoStart: true });
    }
}