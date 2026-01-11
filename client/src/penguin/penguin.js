import { getAnimation } from "../animations/animations";
import { animationExist } from "../animations/animations";
import * as animationKeys from "../animations/animationKeys";

/*
    this is the local client class
*/
export default class Penguin {
    constructor(scene, username, x, y) {
        this.scene = scene;
        this.penguinContainer = this.scene.add.container(x, y);
        this.body = this.scene.add.sprite(0, 0, "penguin", "penguin/body/0"); // color
        this.overlay = this.scene.add.sprite(0, 0, "penguin", "penguin/overlay/0"); // actual sprite
        this.username = username;
        this.pose = "down";
        this.state = "idle";
        this.animation = null;

        // Edit the penguin body
        this.body.setTint(0xff0000);
        this.body.setScale(0.72);
        this.overlay.setScale(0.72);

        // Add the players username
        this.playersUsername = scene.add.text(0, 20, this.username);
        this.playersUsername.setFontFamily("Arial");
        this.playersUsername.setFontSize(18);
        this.playersUsername.setFontStyle("bold");
        this.playersUsername.setColor("#000000");
        this.playersUsername.setOrigin(0.5, 0);

        this.penguinContainer.add([this.body, this.overlay, this.playersUsername]);
    }

    playAnimation(phaserAnimationKey, bodyAnimationKey, overlayAnimationKey, penguinState) {
        if(!animationExist(bodyAnimationKey)) {
            console.log("Cannot play animation " + bodyAnimationKey + " it does not exist");
            return;
        }

        if(!animationExist(overlayAnimationKey)) {
            console.log("Cannot play animation " + overlayAnimationKey + " it does not exist");
            return;
        }

        this.body.play(bodyAnimationKey);
        this.overlay.play(overlayAnimationKey);
        this.setCurrentAnimation(phaserAnimationKey);
        this.state = penguinState;
    }

    stopAnimation() {
        const currentAnimation = this.getCurrentAnimation();
        if(currentAnimation == null) {
            return;
        }

        this.body.stop(currentAnimation);
        this.overlay.stop(currentAnimation);
        this.setCurrentAnimation(null);
        this.state = "idle";
    }

    getPose(mouseX, mouseY) {
        const sideLookThresholdX = 50;
        const sideLookThresholdY = 50;

        if(mouseY > (this.getY() + sideLookThresholdY)) {
            if(mouseX > (this.getX() + sideLookThresholdX)) {
                return "bottom_right";
            }

            if(mouseX < (this.getX() - sideLookThresholdX)) {
                return "bottom_left";
            }

            return "down";
        }

        if(mouseY < (this.getY() - sideLookThresholdY)) {
            if(mouseX > (this.getX() + sideLookThresholdX)) {
                return "top_right";
            }

            if(mouseX < (this.getX() - sideLookThresholdX)) {
                return "top_left";
            }

            return "up";
        }

        if(mouseX < (this.getX() - sideLookThresholdX) && mouseY < (this.getY() + sideLookThresholdY) && mouseY > (this.getY() - sideLookThresholdY)) {
            return "left";
        }

        if(mouseX > (this.getX() + sideLookThresholdX) && mouseY < (this.getY() + sideLookThresholdY) && mouseY > (this.getY() - sideLookThresholdY)) {
            return "right";
        }

        return "unknown_pose";
    }

    setPose(pose, sitting) {       
        if(this.state == 'animation') {
            return;
        }

        const penguinState = sitting ? "sitting" : "idle";
        pose = pose.toLowerCase();

        switch(pose) {
            case "left": {
                const animationKey = sitting ? animationKeys.PENGUIN_SITTING_LOOK_LEFT : animationKeys.PENGUIN_IDLE_LOOK_LEFT;
                const animation = getAnimation(animationKey);

                this.playAnimation(animationKey, animation[0], animation[1], penguinState);
                this.setCurrentPose(pose);

                break;
            }

            case "right": {
                const animationKey = sitting ? animationKeys.PENGUIN_SITTING_LOOK_RIGHT : animationKeys.PENGUIN_IDLE_LOOK_RIGHT;
                const animation = getAnimation(animationKey);

                this.playAnimation(animationKey, animation[0], animation[1], penguinState);
                this.setCurrentPose(pose);

                break;
            }

            case "down": {
                const animationKey = sitting ? animationKeys.PENGUIN_SITTING_LOOK_DOWN : animationKeys.PENGUIN_IDLE_LOOK_DOWN;
                const animation = getAnimation(animationKey);

                this.playAnimation(animationKey, animation[0], animation[1], penguinState);
                this.setCurrentPose(pose);

                break;
            }

            case "up": {
                const animationKey = sitting ? animationKeys.PENGUIN_SITTING_LOOK_UP : animationKeys.PENGUIN_IDLE_LOOK_UP;
                const animation = getAnimation(animationKey);

                this.playAnimation(animationKey, animation[0], animation[1], penguinState);
                this.setCurrentPose(pose);

                break;
            }

            case "bottom_right": {
                const animationKey = sitting ? animationKeys.PENGUIN_SITTING_LOOK_BOTTOM_RIGHT : animationKeys.PENGUIN_IDLE_LOOK_BOTTOM_RIGHT;
                const animation = getAnimation(animationKey);

                this.playAnimation(animationKey, animation[0], animation[1], penguinState);
                this.setCurrentPose(pose);

                break;
            }

            case "bottom_left": {
                const animationKey = sitting ? animationKeys.PENGUIN_SITTING_LOOK_BOTTOM_LEFT : animationKeys.PENGUIN_IDLE_LOOK_BOTTOM_LEFT;
                const animation = getAnimation(animationKey);

                this.playAnimation(animationKey, animation[0], animation[1], penguinState);
                this.setCurrentPose(pose);

                break;
            }

            case "top_right": {
                const animationKey = sitting ? animationKeys.PENGUIN_SITTING_LOOK_TOP_RIGHT : animationKeys.PENGUIN_IDLE_LOOK_TOP_RIGHT;
                const animation = getAnimation(animationKey);

                this.playAnimation(animationKey, animation[0], animation[1], penguinState);
                this.setCurrentPose(pose);

                break;
            }

            case "top_left": {
                const animationKey = sitting ? animationKeys.PENGUIN_SITTING_LOOK_TOP_LEFT : animationKeys.PENGUIN_IDLE_LOOK_TOP_LEFT;
                const animation = getAnimation(animationKey);

                this.playAnimation(animationKey, animation[0], animation[1], penguinState);
                this.setCurrentPose(pose);

                break;
            }
        }
    }

    setX(x) {
        this.penguinContainer.x = x;
    }

    setY(y) {
        this.penguinContainer.y = y;
    }

    getName() {
        return this.username;
    }

    getX() {
        return this.penguinContainer.x;
    }

    getY() {
        return this.penguinContainer.y;
    }

    getCurrentPose() {
        return this.pose;
    }

    setCurrentPose(pose) {
        this.pose = pose;
    }

    getCurrentAnimation() {
        return this.animation;
    }

    setCurrentAnimation(animation) {
        this.animation = animation;
    }
}