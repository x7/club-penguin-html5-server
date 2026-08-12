import { createAnimation } from "../../../../../animations/animations";
import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { DOCKS_ROOM_BOUNCY_CIRCLES, DOCKS_ROOM_MUSIC } from "../../../../audio/audioConstants";
import { SCENE_ROOM_BEACH, SCENE_ROOM_DOCKS, SCENE_ROOM_SKI_VILLAGE, SCENE_ROOM_TOWN } from "../../../sceneNames";
import { onJoinRoomTrigger } from "../../triggers/joinRoomTrigger";
import { onWalkingTrigger } from "../../triggers/walkingTrigger";
import { RoomScene } from "../RoomScene";

export class DocksScene extends RoomScene {
    constructor() {
        super(SCENE_ROOM_DOCKS);
    }

    init(data) {
        super.init(data);
    }

    preloadContent() {
        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.PACK,
            "name": "docks",
            "paths": ["assets/world/rooms/docks/docks-pack.json"]
        });

		this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.IMAGE,
            "name": "docks_walking_trigger",
            "paths": ["assets/world/rooms/docks/docks_walking_trigger.png"]
        });


		this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": DOCKS_ROOM_MUSIC,
            "paths": ["assets/world/rooms/docks/docks_music.mp3"]
        });

		this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": DOCKS_ROOM_BOUNCY_CIRCLES,
            "paths": ["assets/world/rooms/docks/dock2013-tubes.mp3"]
        });
    }

    createContent() {
		// docks_main_background_png
		const docks_main_background_png = this.add.image(741, 117, "docks", "docks_main_background.png");
		docks_main_background_png.scaleX = 1.0124038953450232;
		docks_main_background_png.scaleY = 1.1699199091683639;

		// docks_main_png
		const docks_main_png = this.add.image(-25, 30, "docks", "docks_main.png");
		docks_main_png.scaleX = 0.9737051414804503;
		docks_main_png.scaleY = 0.9884389522891749;
		docks_main_png.setOrigin(0, 0);

		// docks_bench_png
		const docks_bench_png = this.add.image(940, 330, "docks", "docks_bench.png");
		docks_bench_png.scaleX = 0.7225244291851599;
		docks_bench_png.scaleY = 0.963019855890167;

		// docks_frozen_right_side_png
		const docks_frozen_right_side_png = this.add.image(1481, 512, "docks", "docks_frozen_right_side.png");
		docks_frozen_right_side_png.scaleX = 1.0987685856923155;
		docks_frozen_right_side_png.scaleY = 1.0340967529708107;

		// docks_pink_surfboard_png
		const docks_pink_surfboard_png = this.add.image(1223, 665, "docks", "docks_pink_surfboard.png");
		docks_pink_surfboard_png.scaleX = 0.959256029284872;
		docks_pink_surfboard_png.scaleY = 0.9261652676946989;

		// docks_surf_board_sale_png
		const docks_surf_board_sale_png = this.add.image(806, 633, "docks", "docks_surf_board_sale.png");

		// docks_buy_surf_board_png
		const docks_buy_surf_board_png = this.add.sprite(777, 631, "docks", "docks_buy_surf_board.png");
		docks_buy_surf_board_png.scaleX = 0.6920965595273212;
		docks_buy_surf_board_png.scaleY = 0.8338788371388933;

		// docks_stairs_png
		const docks_stairs_png = this.add.image(423, 478, "docks", "docks_stairs.png");
		docks_stairs_png.scaleX = 1.1873409581787242;
		docks_stairs_png.scaleY = 1.1482171785705582;

		// docks_lampost_png
		const docks_lampost_png = this.add.image(558, 464, "docks", "docks_lampost.png");
		docks_lampost_png.scaleX = 1.2824485690103873;
		docks_lampost_png.scaleY = 1.305629426638525;

		// docks_hydro_hopper0001_png
		const docks_hydro_hopper0001_png = this.add.sprite(194, 645, "docks", "docks_hydro_hopper0001.png");
		docks_hydro_hopper0001_png.scaleX = 1.1530051512062083;
		docks_hydro_hopper0001_png.scaleY = 1.092112535850837;

		// docks_deck_board_png
		const docks_deck_board_png = this.add.image(275, 617, "docks", "docks_deck_board.png");
		docks_deck_board_png.scaleX = 0.9906023400653966;
		docks_deck_board_png.scaleY = 1.0394387001499181;

		// docks_bouncy_circles0001_png
		const docks_bouncy_circles0001_png = this.add.sprite(572, 678, "docks", "docks_bouncy_circles0001.png");
		docks_bouncy_circles0001_png.scaleX = 0.9893160264392027;
		docks_bouncy_circles0001_png.scaleY = 0.9667309758275568;

		// docks_random_stick_png
		const docks_random_stick_png = this.add.image(343, 823, "docks", "docks_random_stick.png");
		docks_random_stick_png.scaleX = 1.2022791734090184;
		docks_random_stick_png.scaleY = 1.0052508727404124;

		// docks_right_side_chair_png
		const docks_right_side_chair_png = this.add.image(221, 330, "docks", "docks_right_side_chair.png");
		docks_right_side_chair_png.scaleX = 0.9059397327441412;
		docks_right_side_chair_png.scaleY = 0.7585583243832948;

		// docks_left_side_chair_png
		const docks_left_side_chair_png = this.add.image(166, 359, "docks", "docks_left_side_chair.png");
		docks_left_side_chair_png.scaleX = 0.8823557579528026;
		docks_left_side_chair_png.scaleY = 0.652412431045195;

		// docks_ski_village_trigger
		const docks_ski_village_trigger = this.add.ellipse(714, 253, 128, 128);
		docks_ski_village_trigger.scaleX = 1.2679146399238799;
		docks_ski_village_trigger.scaleY = 0.7493950913979157;
		docks_ski_village_trigger.alpha = 0.001;
		docks_ski_village_trigger.isFilled = true;

		// docks_beach_trigger
		const docks_beach_trigger = this.add.ellipse(394, 247, 128, 128);
		docks_beach_trigger.scaleX = 1.2679146399238799;
		docks_beach_trigger.scaleY = 0.7493950913979157;
		docks_beach_trigger.alpha = 0.001;
		docks_beach_trigger.isFilled = true;

		// docks_town_trigger
		const docks_town_trigger = this.add.ellipse(1439, 240, 128, 128);
		docks_town_trigger.scaleX = 1.2679146399238799;
		docks_town_trigger.scaleY = 2.0280017444606337;
		docks_town_trigger.alpha = 0.001;
		docks_town_trigger.isFilled = true;

		// docks_walking_trigger
		const docks_walking_trigger = this.physics.add.sprite(767, 422, "docks_walking_trigger");
		docks_walking_trigger.alpha = 0.001;
		docks_walking_trigger.alphaTopLeft = 0.001;
		docks_walking_trigger.alphaTopRight = 0.001;
		docks_walking_trigger.alphaBottomLeft = 0.001;
		docks_walking_trigger.alphaBottomRight = 0.001;
		this.collisionMap = this.createCollisionMap(this, 767, 422, "docks_walking_trigger");

		// Setting arcade physics sprites starts here
		this.physics.add.existing(docks_ski_village_trigger);
		this.physics.add.existing(docks_beach_trigger);
		this.physics.add.existing(docks_town_trigger);
		// Setting arcade physics sprites ends here

		// Setting triggers starts here
		this.triggers.push([docks_walking_trigger, () => {
			onWalkingTrigger(this);
		}]);
		
		this.triggers.push([docks_beach_trigger, () => {
			onJoinRoomTrigger(SCENE_ROOM_BEACH);
		}]);

		this.triggers.push([docks_ski_village_trigger, () => {
			onJoinRoomTrigger(SCENE_ROOM_SKI_VILLAGE);
		}]);

		this.triggers.push([docks_town_trigger, () => {
			onJoinRoomTrigger(SCENE_ROOM_TOWN);
		}]);
		// Setting triggers ends here

        // Animations start here
        createAnimation({
            scene: this,
            logicalAnimationKey: "docks_bouncy_things",
			phaserAnimationKey: "docks_bouncy_things_play",
			textureKey: "docks",
            framePrefix: "docks_bouncy_circles",
			frames: ["0001","0002","0003","0004","0005","0006","0007","0008","0009","0010","0011","0012","0013","0014","0015","0016","0017","0018","0019","0020","0021","0022","0023","0024","0025","0026","0027","0028","0029","0030","0031","0032","0033","0034"], 
			framesExtension: ".png",
			frameRate: 24,
			repeat: 0
        });

        createAnimation({
            scene: this,
            logicalAnimationKey: "docks_hydro_hopper_move",
			phaserAnimationKey: "docks_hydro_hopper_move_play",
			textureKey: "docks",
            framePrefix: "docks_hydro_hopper",
			frames: [
				"0001","0002","0003","0004","0005","0006","0007","0008","0009","0010",
  				"0011","0012","0013","0014","0015","0016","0017","0018","0019","0020",
  				"0021","0022","0023","0024","0025","0026","0027","0028","0029","0030",
  				"0031","0032","0033","0034","0035","0036","0037","0038","0039","0040",
  				"0041","0042","0043","0044","0045","0046","0047","0048","0049","0050",
  				"0051","0052","0053","0054","0055","0056","0057","0058","0059","0060",
  				"0061","0062","0063","0064","0065","0066","0067","0068","0069","0070",
  				"0071","0072","0073","0074","0075","0076","0077","0078","0079","0080"
			], 
			framesExtension: ".png",
			frameRate: 24,
			repeat: -1
        });

        createAnimation({
            scene: this,
            logicalAnimationKey: "docks_buy_hoppers_note",
			phaserAnimationKey: "docks_buy_hoppers_note_play",
			textureKey: "docks",
            framePrefix: "docks_buy_surf_board",
			frames: ["0001","0002","0003","0004"], 
			framesExtension: ".png",
			frameRate: 16,
			repeat: 0
        });

        docks_hydro_hopper0001_png.play("docks_hydro_hopper_move_play");
        // Animations end here

        // Setting all interactives sprites starts here
        docks_bouncy_circles0001_png.setInteractive({ useHandCursor: true });
        docks_buy_surf_board_png.setInteractive({ useHandCursor: true });
        // Setting all interactives sprites ends here

        // All interactive events start here
        docks_bouncy_circles0001_png.on("pointerover", () => {
            docks_bouncy_circles0001_png.play("docks_bouncy_things_play");
			this.audioManager.play(DOCKS_ROOM_BOUNCY_CIRCLES);
        });

        docks_buy_surf_board_png.on("pointerover", () => {
            docks_buy_surf_board_png.play("docks_buy_hoppers_note_play");
        });

        docks_buy_surf_board_png.on("pointerout", () => {
            docks_buy_surf_board_png.setFrame("docks_buy_surf_board0001.png");
        });

        docks_buy_surf_board_png.on("pointerdown", () => {
            console.log("Buy!!!!!!!!!!")
        });
        // All interactive events ends here

		this.audioManager.play(DOCKS_ROOM_MUSIC);
		super.createContent(this);
    }

	update() {
		super.update();
	}
}