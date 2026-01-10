export class RoomMouseMovemenet {
    constructor(scene, penguin) {
        this.scene = scene;
        this.penguin = penguin;

        // get pose and get the animation for walking
        // constantly repeat the animation
        // til the penguins x and y matches the pointer x and y
        // then stop the animation and stop the penguin
        this.scene.input.on("pointerdown", (pointer) => {
            const penguinPose = penguin.getPose(pointer.worldX, pointer.worldY);
            if(penguinPose == 'unknown_pose') {
                return; 
            }

            scene.movementManager.moveTo(penguinPose, pointer.worldX, pointer.worldY);
        });

        // Change the penguin pose based on the players mouse movement
        this.scene.input.on("pointermove", (pointer) => {
            const penguinPose = penguin.getPose(pointer.worldX, pointer.worldY);
            if(penguinPose == 'unknown_pose') {
                return; 
            }

            if(penguin.getCurrentPose().toLowerCase() == penguinPose.toLowerCase()) {
                return;
            }

            penguin.setPose(penguinPose, false);
        });
    }
}