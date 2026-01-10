export default class snowBallManager {
    constructor(scene, penguin) {
        this.scene = scene;
        this.penguin = penguin;
        this.body = this.penguin.body;
        this.overlay = this.penguin.overlay;
        this.pose = null;
        this.x = null;
        this.y = null;
        this.throwHeightY = 50; // how high it goes up before going back down
        this.throwing = false;
        this.maxSnowballs = 5;
        this.snowballs = [];
    }

    throwSnowball(pose, x, y) {
        this.pose = pose;
        this.x = x;
        this.y = y;
        this.throwing = true;
    }

    // creating a new snowball objective
    createSnowball() {
        const snowball = this.scene.add.sprite(500, 500, "engine", "engine/snowball0001");
        snowball.setScale(0.72)
    }

    clearSnowballs() {
        if(this.snowballs.length != this.maxSnowballs) {
            return;
        }

        for(const snowball of this.snowballs) {
            // delete all
        }

        this.snowballs = [];
    }

    update() {
        this.clearSnowballs();
    }
}