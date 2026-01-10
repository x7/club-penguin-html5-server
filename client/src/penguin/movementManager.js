import { getAnimation } from "../animations/animations";
import * as animationKeys from "../animations/animationKeys";

export default class MovementManager {
    constructor(penguin) {
        this.penguin = penguin;
        this.penguinContainer = this.penguin.penguinContainer;
        // this.body = this.penguin.body;
        // this.overlay = this.penguin.overlay;
        this.moving = false;
        this.animationPlaying = false;
        this.pose = null;
        this.x = null;
        this.y = null;
        this.speed = 1;
    }

    moveTo(pose, x, y) {
        this.pose = pose;
        this.x = x;
        this.y = y;
        this.moving = true;
    }

    update() {
        if(!this.moving) {
            return;
        }

        this.pose = this.pose.toLowerCase();

        if(this.penguinContainer.x == this.x || this.penguinContainer.y == this.y) {
            this.moving = false;
            this.animationPlaying = false;
            this.penguin.stopAnimation();
            return;
        }

        console.log(this.pose)
        switch(this.pose) {
            case "left": {
                if(!this.animationPlaying) {
                    const animation = getAnimation(animationKeys.PENGUIN_WADDLE_LEFT);
                    this.penguin.playAnimation(animationKeys.PENGUIN_WADDLE_LEFT, animation[0], animation[1]);
                    this.animationPlaying = true;
                }

                this.penguinContainer.x -= this.speed;
                break;
            }

            case "right": {
                if(!this.animationPlaying) {
                    const animation = getAnimation(animationKeys.PENGUIN_WADDLE_RIGHT);
                    this.penguin.playAnimation(animationKeys.PENGUIN_WADDLE_RIGHT, animation[0], animation[1]);
                    this.animationPlaying = true;
                }

                this.penguinContainer.x += this.speed;
                break;
            }

            case "up": {
                if(!this.animationPlaying) {
                    const animation = getAnimation(animationKeys.PENGUIN_WADDLE_UP);
                    this.penguin.playAnimation(animationKeys.PENGUIN_WADDLE_UP, animation[0], animation[1]);
                    this.animationPlaying = true;
                }


                this.penguinContainer.y -= this.speed;
                break;
            }

            case "down": {
                if(!this.animationPlaying) {
                    const animation = getAnimation(animationKeys.PENGUIN_WADDLE_DOWN);
                    this.penguin.playAnimation(animationKeys.PENGUIN_WADDLE_DOWN, animation[0], animation[1]);
                    this.animationPlaying = true;
                }

                this.penguinContainer.y += this.speed;
                break;
            }

            case "top_left": {
                if(!this.animationPlaying) {
                    const animation = getAnimation(animationKeys.PENGUIN_WADDLE_UP_TOP_LEFT);
                    this.penguin.playAnimation(animationKeys.PENGUIN_WADDLE_UP_TOP_LEFT, animation[0], animation[1]);
                    this.animationPlaying = true;
                }

                this.penguinContainer.x -= this.speed;
                this.penguinContainer.y -= this.speed;

                break;
            }

            case "top_right": {
                if(!this.animationPlaying) {
                    const animation = getAnimation(animationKeys.PENGUIN_WADDLE_UP_TOP_RIGHT);
                    this.penguin.playAnimation(animationKeys.PENGUIN_WADDLE_UP_TOP_RIGHT, animation[0], animation[1]);
                    this.animationPlaying = true;
                }

                this.penguinContainer.x += this.speed;
                this.penguinContainer.y -= this.speed;

                break;
            }

            case "bottom_left": {
                if(!this.animationPlaying) {
                    const animation = getAnimation(animationKeys.PENGUIN_WADDLE_DOWN_BOTTOM_LEFT);
                    this.penguin.playAnimation(animationKeys.PENGUIN_WADDLE_DOWN_BOTTOM_LEFT, animation[0], animation[1]);
                    this.animationPlaying = true;
                }

                this.penguinContainer.x -= this.speed;
                this.penguinContainer.y += this.speed;
                
                break;
            }

            case "bottom_right": {
                if(!this.animationPlaying) {
                    const animation = getAnimation(animationKeys.PENGUIN_WADDLE_DOWN_BOTTOM_RIGHT);
                    this.penguin.playAnimation(animationKeys.PENGUIN_WADDLE_DOWN_BOTTOM_RIGHT, animation[0], animation[1]);
                    this.animationPlaying = true;
                }

                this.penguinContainer.x += this.speed;
                this.penguinContainer.y += this.speed;

                break;
            }
        }
    }
}