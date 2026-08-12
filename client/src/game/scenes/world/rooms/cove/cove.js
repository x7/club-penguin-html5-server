import { createAnimation } from "../../../../../animations/animations";
import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { COVE_ROOM_MUSIC } from "../../../../audio/audioConstants";
import { SCENE_ROOM_COVE } from "../../../sceneNames";
import { RoomScene } from "../RoomScene";

export class CoveScene extends RoomScene {
    constructor() {
        super(SCENE_ROOM_COVE);
    }

    init(data) {
        super.init(data);
    }

    preloadContent() {
        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.PACK,
            "name": "cove",
            "paths": ["assets/world/rooms/cove/cove-pack.json"]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": COVE_ROOM_MUSIC,
            "paths": ["assets/world/rooms/cove/cove_music.mp3"]
        });
    }

    createContent() {
        // cove_mountains_background_png
		const cove_mountains_background_png = this.add.image(728, 120, "cove", "cove_mountains_background.png");

		// cove_a_png
		const cove_a_png = this.add.image(742, 447, "cove", "cove_a.png");

		// cove_tree_log_png
		const cove_tree_log_png = this.add.image(210, 483, "cove", "cove_tree_log.png");
		cove_tree_log_png.scaleY = 1.0225144852378918;

		// cove_fish_png
		const cove_fish_png = this.add.image(109, 529, "cove", "cove_fish.png");
		cove_fish_png.scaleX = 1.0423182541843912;
		cove_fish_png.scaleY = 1.063880898453483;

		// cove_glasses0001_png
		const cove_glasses0001_png = this.add.image(433, 234, "cove", "cove_glasses0001.png");

		// cove_red_circle_png
		const cove_red_circle_png = this.add.image(455, 341, "cove", "cove_red_circle.png");
		cove_red_circle_png.scaleX = 0.8763633051582433;
		cove_red_circle_png.scaleY = 0.9407921980196094;

		// cove_waves_blue_paper0001_png
		const cove_waves_blue_paper0001_png = this.add.image(1001, 277, "cove", "cove_waves_blue_paper0001.png");
		cove_waves_blue_paper0001_png.flipX = true;

		// cove_surf_shack_png
		const cove_surf_shack_png = this.add.image(1282, 209, "cove", "cove_surf_shack.png");
		cove_surf_shack_png.scaleX = 0.9556759661719731;
		cove_surf_shack_png.scaleY = 1.0625963041179816;

		// cove_table_chair_png
		const cove_table_chair_png = this.add.image(1113, 458, "cove", "cove_table_chair.png");

		// cove_table_png
		const cove_table_png = this.add.image(1212, 467, "cove", "cove_table.png");

		// cove_bottom_tree_png
		const cove_bottom_tree_png = this.add.image(724, 876, "cove", "cove_bottom_tree.png");
		cove_bottom_tree_png.scaleX = 0.9910791739854167;

		// cove_campfire_png
		const cove_campfire_png = this.add.image(364, 668, "cove", "cove_campfire.png");
		cove_campfire_png.scaleX = 1.0916317121767793;
		cove_campfire_png.scaleY = 1.0349465403089473;

		// cove_chair_seat_png
		const cove_chair_seat_png = this.add.image(1320, 539, "cove", "cove_chair_seat.png");
		cove_chair_seat_png.scaleX = 1.1079348082554092;

		// cove_chair_stand_png
		const cove_chair_stand_png = this.add.image(1357, 522, "cove", "cove_chair_stand.png");
		cove_chair_stand_png.scaleX = 1.2504270139765328;
		cove_chair_stand_png.scaleY = 1.0289013508676992;

		// cove_iron_stand_png
		const cove_iron_stand_png = this.add.image(1269, 560, "cove", "cove_iron_stand.png");
		cove_iron_stand_png.scaleX = 0.947085851438471;
		cove_iron_stand_png.scaleY = 1.105949905131534;

		// cove_bottom_right_rock_png
		const cove_bottom_right_rock_png = this.add.image(1483, 572, "cove", "cove_bottom_right_rock.png");

		// cove_surf0001_png
		const cove_surf0001_png = this.add.image(1193, 673, "cove", "cove_surf0001.png");
		cove_surf0001_png.scaleY = 1.084220495543721;

		// cove_first_aid_png
		const cove_first_aid_png = this.add.image(854, 196, "cove", "cove_first_aid.png");
		cove_first_aid_png.scaleX = 0.9390225943935135;
		cove_first_aid_png.scaleY = 1.0382865716815224;

		// cove_bottom_left_rock_png
		const cove_bottom_left_rock_png = this.add.image(516, 893, "cove", "cove_bottom_left_rock.png");
		cove_bottom_left_rock_png.scaleX = 1.0409240875801433;
		cove_bottom_left_rock_png.scaleY = 1.1307722338033317;

		// cove_fire0001_png
		const cove_fire0001_png = this.add.sprite(360, 877, "cove", "cove_fire0001.png");
		cove_fire0001_png.scaleX = 0.42972315821231033;
		cove_fire0001_png.scaleY = 0.35577936184690745;

		// cove_rope_png
		const cove_rope_png = this.add.image(1090, 531, "cove", "cove_rope.png");

		// cove_rope_stand_png
		const cove_rope_stand_png = this.add.image(1027, 494, "cove", "cove_rope_stand.png");

		// cove_glasses0002_png
		const cove_glasses0002_png = this.add.image(433, 234, "cove", "cove_glasses0002.png");
		cove_glasses0002_png.visible = false;

		// cove_surf0002_png
		const cove_surf0002_png = this.add.image(1193, 673, "cove", "cove_surf0002.png");
		cove_surf0002_png.scaleY = 1.084220495543721;
		cove_surf0002_png.visible = false;

        // Animations start here
        createAnimation({
            "scene": this,
            "logicalAnimationKey": "cove_room_fire_animation",
            "phaserAnimationKey": "cove_room_fire_animation_play",
            "textureKey": "cove",
            "framePrefix": "cove_fire",
            "frames": Array.from({ length: 20 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        cove_fire0001_png.play("cove_room_fire_animation_play");
        // Animations end here

        // Setting all interactives sprites starts here
        cove_glasses0001_png.setInteractive({ useHandCursor: true });
        cove_glasses0002_png.setInteractive({ useHandCursor: true });
        cove_surf0001_png.setInteractive({ useHandCursor: true });
        cove_surf0002_png.setInteractive({ useHandCursor: true });
        // Setting all interactives sprites ends here

        // All interactive events start here
        cove_glasses0001_png.on("pointerover", () => {
            cove_glasses0001_png.visible = false;
            cove_glasses0002_png.visible = true;
        });

        cove_glasses0002_png.on("pointerout", () => {
            cove_glasses0001_png.visible = true;
            cove_glasses0002_png.visible = false;
        });

        cove_glasses0002_png.on("pointerdown", () => {
            console.log("yesss glasses scene");
        });

        cove_surf0001_png.on("pointerover", () => {
            cove_surf0001_png.visible = false;
            cove_surf0002_png.visible = true;
        });

        cove_surf0002_png.on("pointerout", () => {
            cove_surf0001_png.visible = true;
            cove_surf0002_png.visible = false;
        });
        // All interactive events ends here

        this.audioManager.play(COVE_ROOM_MUSIC);
		super.createContent(this);
    }

	update() {
		this.update();
	}
}