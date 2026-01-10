export class RoomKeyPressed {
    constructor(scene, penguin) {
        this.scene = scene;
        this.penguin = penguin;

        scene.input.keyboard.on('keydown-S', (event) => {
            const pointer = scene.input.activePointer;
            const penguinPose = penguin.getPose(pointer.worldX, pointer.worldY);
            penguin.setPose(penguinPose, true);
        });
    }
}