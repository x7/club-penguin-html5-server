import { createAnimation } from "../../animations/animations";
import { BaseScene } from "../base/baseScene";
import { ASSET_TYPES } from "../../assets/assetTypes";

export class GlobalAssetsScene extends BaseScene {
    constructor() {
        super("GlobalAssetsScene");
    }

    init() {
        this.sceneManager = this.getSceneManager();
		this.assetManager = this.getAssetManager();
    }

    preload() {
        this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.PACK,
			name: "penguin-pack",
			paths: ["assets/penguin/penguin-pack.json"]
		});

        this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.PACK,
			name: "snowball-pack",
			paths: ["assets/world/snowball/snowball.json"]
		});

        this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.JSON,
			name: "penguin-animations",
			paths: ["src/animations/penguin.json"]
		});
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