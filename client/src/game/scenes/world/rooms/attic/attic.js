import { createAnimation } from "../../../../../animations/animations";
import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { ATTIC_PORTAL_CLOSE, ATTIC_PORTAL_OPEN, ATTIC_PORTAL_WHILE_OPEN, ATTIC_ROCKING_CHAIR, ATTIC_ROOM_MUSIC } from "../../../../audio/audioConstants";
import { SCENE_ROOM_ATTIC, SCENE_ROOM_SKI_LODGE } from "../../../sceneNames";
import { onJoinRoomTrigger } from "../../triggers/joinRoomTrigger";
import { onWalkingTrigger } from "../../triggers/walkingTrigger";
import { RoomScene } from "../RoomScene";

// TODO: Add portal animation (when this is added add the music for it being open)

export class AtticScene extends RoomScene {
    constructor() {
        super(SCENE_ROOM_ATTIC);
    }

    init(data) {
        super.init(data);
    }

    preloadContent() {
        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.PACK,
            "name": "attic",
            "paths": ["assets/world/rooms/attic/attic-pack.json"]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.IMAGE,
            "name": "attic_walking_trigger",
            "paths": ["assets/world/rooms/attic/attic_walking_trigger.png"]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": ATTIC_ROOM_MUSIC,
            "paths": [`assets/world/rooms/attic/${ATTIC_ROOM_MUSIC}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": ATTIC_PORTAL_OPEN,
            "paths": [`assets/world/rooms/attic/${ATTIC_PORTAL_OPEN}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": ATTIC_PORTAL_WHILE_OPEN,
            "paths": [`assets/world/rooms/attic/${ATTIC_PORTAL_WHILE_OPEN}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": ATTIC_PORTAL_CLOSE,
            "paths": [`assets/world/rooms/attic/${ATTIC_PORTAL_CLOSE}.mp3`]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": ATTIC_ROCKING_CHAIR,
            "paths": [`assets/world/rooms/attic/${ATTIC_ROCKING_CHAIR}.mp3`]
        });
    }

    createContent() {
        // attic_background_png
		const attic_background_png = this.add.image(-110, -15, "attic", "attic_background.png");
		attic_background_png.setOrigin(0, 0);

		// attic_wood_railing_left_png
		const attic_wood_railing_left_png = this.add.image(741, 507, "attic", "attic_wood_railing_left.png");

		// attic_wood_railing_right_png
		const attic_wood_railing_right_png = this.add.image(865, 590, "attic", "attic_wood_railing_right.png");

		// attic_purple_seat_png
		const attic_purple_seat_png = this.add.image(309, 463, "attic", "attic_purple_seat.png");
		attic_purple_seat_png.scaleX = 0.8493924183769546;
		attic_purple_seat_png.scaleY = 0.8574765476149974;

		// attic_pizza_box_png
		const attic_pizza_box_png = this.add.image(214, 541, "attic", "attic_pizza_box.png");

		// attic_left_side_green_chair_png
		const attic_left_side_green_chair_png = this.add.image(118, 530, "attic", "attic_left_side_green_chair.png");

		// attic_find_four_table_png
		const attic_find_four_table_png = this.add.image(247, 628, "attic", "attic_find_four_table.png");

		// attic_find_four_table_png_1
		const attic_find_four_table_png_1 = this.add.image(366, 713, "attic", "attic_find_four_table.png");

		// attic_find_four_table_png_2
		const attic_find_four_table_png_2 = this.add.image(553, 713, "attic", "attic_find_four_table.png");

		// attic_find_four_table_png_3
		const attic_find_four_table_png_3 = this.add.image(679, 650, "attic", "attic_find_four_table.png");

		// attic_find_four_gamme_four
		const attic_find_four_gamme_four = this.add.image(676, 607, "attic", "attic_find_four_gamme0001.png");

		// attic_find_four_gamme_three
		const attic_find_four_gamme_three = this.add.image(549, 669, "attic", "attic_find_four_gamme0001.png");

		// attic_find_four_gamme_two
		const attic_find_four_gamme_two = this.add.image(371, 670, "attic", "attic_find_four_gamme0001.png");
		attic_find_four_gamme_two.flipX = true;

		// attic_find_four_gamme_one
		const attic_find_four_gamme_one = this.add.image(253, 583, "attic", "attic_find_four_gamme0001.png");
		attic_find_four_gamme_one.flipX = true;

		// attic_find_four_gamme_four_hovered
		const attic_find_four_gamme_four_hovered = this.add.image(676, 607, "attic", "attic_find_four_gamme0002.png");
		attic_find_four_gamme_four_hovered.visible = false;

		// attic_find_four_gamme_three_hovered
		const attic_find_four_gamme_three_hovered = this.add.image(549, 669, "attic", "attic_find_four_gamme0002.png");
		attic_find_four_gamme_three_hovered.visible = false;

		// attic_find_four_gamme_two_hovered
		const attic_find_four_gamme_two_hovered = this.add.image(371, 670, "attic", "attic_find_four_gamme0002.png");
		attic_find_four_gamme_two_hovered.flipX = true;
		attic_find_four_gamme_two_hovered.visible = false;

		// attic_find_four_gamme_one_hovered
		const attic_find_four_gamme_one_hovered = this.add.image(253, 583, "attic", "attic_find_four_gamme0002.png");
		attic_find_four_gamme_one_hovered.flipX = true;
		attic_find_four_gamme_one_hovered.visible = false;

		// attic_left_side_green_chair_arm_png
		const attic_left_side_green_chair_arm_png = this.add.image(68, 584, "attic", "attic_left_side_green_chair_arm.png");

		// attic_left_side_small_green_table_png
		const attic_left_side_small_green_table_png = this.add.image(27, 614, "attic", "attic_left_side_small_green_table.png");

		// attic_left_side_lamp_png
		const attic_left_side_lamp_png = this.add.image(24, 538, "attic", "attic_left_side_lamp.png");

		// attic_red_carpet_top_png
		const attic_red_carpet_top_png = this.add.image(122, 721, "attic", "attic_red_carpet_top.png");

		// attic_red_carpet_bottom_png
		const attic_red_carpet_bottom_png = this.add.image(214, 799, "attic", "attic_red_carpet_bottom.png");

		// attic_bottom_left_rubbish_png
		const attic_bottom_left_rubbish_png = this.add.image(139, 772, "attic", "attic_bottom_left_rubbish.png");

		// attic_bottom_middle_couch_top_png
		const attic_bottom_middle_couch_top_png = this.add.image(716, 770, "attic", "attic_bottom_middle_couch_top.png");

		// attic_bottom_middle_couch_bottom_png
		const attic_bottom_middle_couch_bottom_png = this.add.image(726, 837, "attic", "attic_bottom_middle_couch_bottom.png");

		// attic_three_pizza_boxes_png
		const attic_three_pizza_boxes_png = this.add.image(509, 904, "attic", "attic_three_pizza_boxes.png");

		// attic_red_carpet_right_side_png
		const attic_red_carpet_right_side_png = this.add.image(1138, 654, "attic", "attic_red_carpet_right_side.png");

		// attic_small_puffle_stone_png
		const attic_small_puffle_stone_png = this.add.image(1294, 497, "attic", "attic_small_puffle_stone.png");

		// attic_small_golden_puffle_png
		const attic_small_golden_puffle_png = this.add.image(1356, 538, "attic", "attic_small_golden_puffle.png");

		// attic_purple_seat_png_1
		const attic_purple_seat_png_1 = this.add.image(1048, 744, "attic", "attic_purple_seat.png");

		// attic_rocking_unknown_animial_chair0001_png
		const attic_rocking_unknown_animial_chair0001_png = this.add.sprite(1425, 548, "attic", "attic_rocking_unknown_animial_chair0001.png");

		// attic_table_with_map_png
		const attic_table_with_map_png = this.add.image(1269, 683, "attic", "attic_table_with_map.png");

		// attic_small_chair_png
		const attic_small_chair_png = this.add.image(1168, 828, "attic", "attic_small_chair.png");

		// attic_purple_portal_box0001_png
		const attic_purple_portal_box0001_png = this.add.image(968, 816, "attic", "attic_purple_portal_box0001.png");

		// attic_purple_portal_box0002_png
		const attic_purple_portal_box0002_png = this.add.image(968, 816, "attic", "attic_purple_portal_box0002.png");
		attic_purple_portal_box0002_png.visible = false;

		// attic_green_number_ten_ocean_png
		const attic_green_number_ten_ocean_png = this.add.image(842, 829, "attic", "attic_green_number_ten_ocean.png");

		// attic_bottom_right_rubbish_png
		const attic_bottom_right_rubbish_png = this.add.image(1188, 859, "attic", "attic_bottom_right_rubbish.png");

        // attic_ski_lodge_trigger
		const attic_ski_lodge_trigger = this.physics.add.sprite(1220, 452, "attic", "attic_ski_lodge_trigger.png");
		attic_ski_lodge_trigger.alpha = 0.001;
		attic_ski_lodge_trigger.alphaTopLeft = 0.001;
		attic_ski_lodge_trigger.alphaTopRight = 0.001;
		attic_ski_lodge_trigger.alphaBottomLeft = 0.001;
		attic_ski_lodge_trigger.alphaBottomRight = 0.001;
		attic_ski_lodge_trigger.body.setSize(258, 100, false);

		// attic_walking_trigger
		const attic_walking_trigger = this.physics.add.sprite(759, 482, "attic_walking_trigger_png");
		attic_walking_trigger.alpha = 0.001;
		attic_walking_trigger.alphaTopLeft = 0.001;
		attic_walking_trigger.alphaTopRight = 0.001;
		attic_walking_trigger.alphaBottomLeft = 0.001;
		attic_walking_trigger.alphaBottomRight = 0.001;
		attic_walking_trigger.body.setSize(1520, 960, false);
        this.collisionMap = this.createCollisionMap(this, 759, 482, "attic_walking_trigger_png");

        // Setting triggers starts here
        this.triggers.push([attic_walking_trigger, () => {
            onWalkingTrigger(this);
        }]);

        this.triggers.push([attic_ski_lodge_trigger, () => {
            onJoinRoomTrigger(SCENE_ROOM_SKI_LODGE);
        }]);
        // Setting triggers ends here

        // Creating animations starts here
        createAnimation({
            "scene": this,
            "logicalAnimationKey": "attic_weird_animal_rocking_chair_animation",
            "phaserAnimationKey": "attic_weird_animal_rocking_chair_animation_play",
            "textureKey": "attic",
            "framePrefix": "attic_rocking_unknown_animial_chair",
            "frames": Array.from({ length: 55 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": 0
        });
        // Creating animations ends here

        // Setting all interactives sprites starts here
        attic_rocking_unknown_animial_chair0001_png.setInteractive({ useHandCursor: true });
        attic_purple_portal_box0001_png.setInteractive({ useHandCursor: true });
        attic_purple_portal_box0002_png.setInteractive({ useHandCursor: true });
        attic_find_four_gamme_four.setInteractive({ useHandCursor: true });
        attic_find_four_gamme_four_hovered.setInteractive({ useHandCursor: true });
        attic_find_four_gamme_three.setInteractive({ useHandCursor: true });
        attic_find_four_gamme_three_hovered.setInteractive({ useHandCursor: true });
        attic_find_four_gamme_two.setInteractive({ useHandCursor: true });
        attic_find_four_gamme_two_hovered.setInteractive({ useHandCursor: true });
        attic_find_four_gamme_one.setInteractive({ useHandCursor: true });
        attic_find_four_gamme_one_hovered.setInteractive({ useHandCursor: true });
        // Setting all interactives sprites ends here

        // All interactive events start here
        attic_rocking_unknown_animial_chair0001_png.on("pointerover", () => {
            attic_rocking_unknown_animial_chair0001_png.play("attic_weird_animal_rocking_chair_animation_play");
            this.audioManager.play(ATTIC_ROCKING_CHAIR);
        });

        attic_purple_portal_box0001_png.on("pointerover", () => {
            attic_purple_portal_box0001_png.visible = false;
            attic_purple_portal_box0002_png.visible = true;
            this.audioManager.play(ATTIC_PORTAL_OPEN);
        });

        attic_purple_portal_box0002_png.on("pointerout", () => {
            attic_purple_portal_box0001_png.visible = true;
            attic_purple_portal_box0002_png.visible = false;
            this.audioManager.play(ATTIC_PORTAL_CLOSE);
        });

        attic_find_four_gamme_four.on("pointerover", () => {
            attic_find_four_gamme_four.visible = false;
            attic_find_four_gamme_four_hovered.visible = true;
        });

        attic_find_four_gamme_four_hovered.on("pointerout", () => {
            attic_find_four_gamme_four.visible = true;
            attic_find_four_gamme_four_hovered.visible = false;
        });

        attic_find_four_gamme_three.on("pointerover", () => {
            attic_find_four_gamme_three.visible = false;
            attic_find_four_gamme_three_hovered.visible = true;
        });

        attic_find_four_gamme_three_hovered.on("pointerout", () => {
            attic_find_four_gamme_three.visible = true;
            attic_find_four_gamme_three_hovered.visible = false;
        });

        attic_find_four_gamme_two.on("pointerover", () => {
            attic_find_four_gamme_two.visible = false;
            attic_find_four_gamme_two_hovered.visible = true;
        });

        attic_find_four_gamme_two_hovered.on("pointerout", () => {
            attic_find_four_gamme_two.visible = true;
            attic_find_four_gamme_two_hovered.visible = false;
        });

        attic_find_four_gamme_one.on("pointerover", () => {
            attic_find_four_gamme_one.visible = false;
            attic_find_four_gamme_one_hovered.visible = true;
        });

        attic_find_four_gamme_one_hovered.on("pointerout", () => {
            attic_find_four_gamme_one.visible = true;
            attic_find_four_gamme_one_hovered.visible = false;
        });
        // All interactive events end here

        this.audioManager.play(ATTIC_ROOM_MUSIC);
        super.createContent(this);
    }

    update() {
        super.update();
    }
}