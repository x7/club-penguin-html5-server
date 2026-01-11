import { getAnimation } from "../animations/animations";
import * as animationKeys from "../animations/animationKeys";

/*
    for left right we can just check the X matches or is greater
    for up and down we can just check the Y matches or is greater
    for sidewards we need to calculate what X and Y to use
*/

export default class MovementManager {
    constructor(penguin) {
        this.penguin = penguin;
        this.penguinContainer = this.penguin.penguinContainer;
        this.moving = false;
        this.animationPlaying = false;
        this.pose = null;
        this.x = null;
        this.y = null;
        this.speed = 1;
        this.threshold = 0.5;
        this.xSpeed = null;
        this.ySpeed = null;
    }

    moveTo(pose, x, y) {
        this.penguin.stopAnimation();
        this.pose = pose;
        this.x = x;
        this.y = y;
        this.moving = true;
        this.animationPlaying = false;
        this.calculateMovement(this.x, this.y)
    }

    update() {
        if(!this.moving) {
            return;
        }

        this.pose = this.pose.toLowerCase();

        if(Math.abs(this.penguinContainer.x - this.x) < this.threshold && Math.abs(this.penguinContainer.y - this.y) < this.threshold) {
            this.moving = false;
            this.animationPlaying = false;
            this.penguin.stopAnimation();
            return;
        }

        switch(this.pose) {
            case "left": {
                if(!this.animationPlaying) {
                    const animation = getAnimation(animationKeys.PENGUIN_WADDLE_LEFT);
                    this.penguin.playAnimation(animationKeys.PENGUIN_WADDLE_LEFT, animation[0], animation[1]);
                    this.animationPlaying = true;
                }

                this.calculateMovement(this.x, this.y);
                break;
            }

            case "right": {
                if(!this.animationPlaying) {
                    const animation = getAnimation(animationKeys.PENGUIN_WADDLE_RIGHT);
                    this.penguin.playAnimation(animationKeys.PENGUIN_WADDLE_RIGHT, animation[0], animation[1]);
                    this.animationPlaying = true;
                }

                this.calculateMovement(this.x, this.y);
                break;
            }

            case "up": {
                if(!this.animationPlaying) {
                    const animation = getAnimation(animationKeys.PENGUIN_WADDLE_UP);
                    this.penguin.playAnimation(animationKeys.PENGUIN_WADDLE_UP, animation[0], animation[1]);
                    this.animationPlaying = true;
                }


                this.calculateMovement(this.x, this.y);
                break;
            }

            case "down": {
                if(!this.animationPlaying) {
                    const animation = getAnimation(animationKeys.PENGUIN_WADDLE_DOWN);
                    this.penguin.playAnimation(animationKeys.PENGUIN_WADDLE_DOWN, animation[0], animation[1]);
                    this.animationPlaying = true;
                }

                this.calculateMovement(this.x, this.y);
                break;
            }

            case "top_left": {
                if(!this.animationPlaying) {
                    const animation = getAnimation(animationKeys.PENGUIN_WADDLE_UP_TOP_LEFT);
                    this.penguin.playAnimation(animationKeys.PENGUIN_WADDLE_UP_TOP_LEFT, animation[0], animation[1]);
                    this.animationPlaying = true;
                }

                this.calculateMovement(this.x, this.y);
                break;
            }

            case "top_right": {
                if(!this.animationPlaying) {
                    const animation = getAnimation(animationKeys.PENGUIN_WADDLE_UP_TOP_RIGHT);
                    this.penguin.playAnimation(animationKeys.PENGUIN_WADDLE_UP_TOP_RIGHT, animation[0], animation[1]);
                    this.animationPlaying = true;
                }

                this.calculateMovement(this.x, this.y);
                break;
            }

            case "bottom_left": {
                if(!this.animationPlaying) {
                    const animation = getAnimation(animationKeys.PENGUIN_WADDLE_DOWN_BOTTOM_LEFT);
                    this.penguin.playAnimation(animationKeys.PENGUIN_WADDLE_DOWN_BOTTOM_LEFT, animation[0], animation[1]);
                    this.animationPlaying = true;
                }

                this.calculateMovement(this.x, this.y);
                break;
            }

            case "bottom_right": {
                if(!this.animationPlaying) {
                    const animation = getAnimation(animationKeys.PENGUIN_WADDLE_DOWN_BOTTOM_RIGHT);
                    this.penguin.playAnimation(animationKeys.PENGUIN_WADDLE_DOWN_BOTTOM_RIGHT, animation[0], animation[1]);
                    this.animationPlaying = true;
                }

                this.calculateMovement(this.x, this.y);
                break;
            }
        }

        this.penguin.state = "animation";
    }

    calculateMovement(goX, goY) {
        const penguinX = this.penguin.getX();
        const penguinY = this.penguin.getY();

        const dx = goX - penguinX;
        const dy = goY - penguinY;

        const distance = Math.sqrt(dx * dx + dy * dy);
        const threshold = 0.5; // You can adjust this value for more precision
        if (distance < threshold) {
            console.log('Target reached');
            return; // Stop the movement when target is close enough
        }

        const normalizedDx = dx / distance;
        const normalizedDy = dy / distance;

        const xSpeed = normalizedDx * this.speed;
        const ySpeed = normalizedDy * this.speed;

        this.penguinContainer.x += xSpeed;
        this.penguinContainer.y += ySpeed;
    }
}