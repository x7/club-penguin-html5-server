import Penguin from "../../../../penguin/penguin";
import { RoomMouseMovemenet } from "../../../../inputs/roomMouseMovement";
import { RoomKeyPressed } from "../../../../inputs/roomKeyPressed";
import MovementManager from "../../../../penguin/movementManager";
import snowBallManager from "../../../../penguin/snowBallManager";
import { BaseScene } from "../../../base/baseScene";
import { ASSET_TYPES } from "../../../../assets/assetTypes";

// Todo: Make the dance club opening more smooth
// Todo: Make sound manager
// Todo: Handle animations better after restructing animation system
// Todo: Add town theme song
// Todo: Fix night club star animation
// Todo: Add night club lights + speaker animations

export class TownScene extends BaseScene {

	constructor() {
		super("TownScene");
	}

	init() {
		this.sceneManager = this.getSceneManager();
		this.assetManager = this.getAssetManager();
		this.audioManager = this.getAudioManager();
		this.sceneManager.setCurrentScene("TownScene");
	}

	preload() {
		this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.PACK,
			name: "town",
			paths: ["assets/world/rooms/town/town2013-pack.json"]
		});

		this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.AUDIO,
			name: "town_coffee_door_open",
			paths: ["assets/world/rooms/town/town2013-coffeeopen.mp3"]
		});

		this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.AUDIO,
			name: "town_coffee_door_close",
			paths: ["assets/world/rooms/town/town2013-coffeeclose.mp3"]
		});

		this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.AUDIO,
			name: "town_dance_club_open",
			paths: ["assets/world/rooms/town/town2013-discoopen.mp3"]
		});

		this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.AUDIO,
			name: "town_dance_club_close",
			paths: ["assets/world/rooms/town/town2013-discoclose.mp3"]
		});

		this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.AUDIO,
			name: "town_gift_shop_open",
			paths: ["assets/world/rooms/town/town2013-shopopen.mp3"]
		});

		this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.AUDIO,
			name: "town_gift_shop_close",
			paths: ["assets/world/rooms/town/town2013-shopclose.mp3"]
		});
	}

	create() {
		// town_blue_sky
		const town_blue_sky = this.add.image(-208, -81, "town", "town/sky");
		town_blue_sky.setOrigin(0, 0);

		// town_background_clouds
		const town_background_clouds = this.add.image(-5, -53, "town", "town/clouds");
		town_background_clouds.scaleX = 1.1835512617867499;
		town_background_clouds.scaleY = 1.0465579105883338;
		town_background_clouds.setOrigin(0, 0);

		// town_dance_club_inside
		const town_dance_club_inside = this.add.image(656, 181, "town", "town/danceinside");
		town_dance_club_inside.setOrigin(0, 0);

		// town_background_mountains
		const town_background_mountains = this.add.image(140, 11, "town", "town/mountains");
		town_background_mountains.scaleX = 0.6639114813062592;
		town_background_mountains.scaleY = 0.7141119939610138;
		town_background_mountains.setOrigin(0, 0);

		// town_dance_club_door_closed_trigger
		const town_dance_club_door_closed_trigger = this.add.image(702, 227, "town", "town/dancedoor");
		town_dance_club_door_closed_trigger.scaleX = 0.6361813879869564;
		town_dance_club_door_closed_trigger.scaleY = 0.6900376223318818;
		town_dance_club_door_closed_trigger.setDepth(-9999);

		// town_dance_club_door_closed
		const town_dance_club_door_closed = this.add.image(702, 227, "town", "town/dancedoor");
		town_dance_club_door_closed.scaleX = 0.6361813879869564;
		town_dance_club_door_closed.scaleY = 0.6900376223318818;

		// town_entire_base
		const town_entire_base = this.add.image(-2, -11, "town", "town/base");
		town_entire_base.scaleX = 0.6600899634787308;
		town_entire_base.scaleY = 0.6800335919803799;
		town_entire_base.setOrigin(0, 0);

		// town_left_side_news_board
		const town_left_side_news_board = this.add.image(171, 490, "town", "town/newsboard");
		town_left_side_news_board.scaleX = 0.6326953677426618;
		town_left_side_news_board.scaleY = 0.7509534451668876;
		town_left_side_news_board.setOrigin(0.49369784172661874, 0.3285276073619632);

		// town_right_side_trees
		const town_right_side_trees = this.add.image(1271, 411, "town", "town/sidetrees");
		town_right_side_trees.scaleX = 0.77284862078044;
		town_right_side_trees.scaleY = 0.7694282215917598;
		town_right_side_trees.setOrigin(0.49164983164983167, 0.4962162162162162);

		// town_coffee_table_left_chair
		const town_coffee_table_left_chair = this.add.image(479, 299, "town", "town/leftchair");
		town_coffee_table_left_chair.scaleX = 0.7125241347573734;
		town_coffee_table_left_chair.scaleY = 0.7342216991286798;
		town_coffee_table_left_chair.setOrigin(0.47593406593406595, 0.3510185185185185);

		// town_coffee_table_right_chair
		const town_coffee_table_right_chair = this.add.image(587, 285, "town", "town/rightchair");
		town_coffee_table_right_chair.scaleX = 0.7125241347573734;
		town_coffee_table_right_chair.scaleY = 0.7342216991286798;
		town_coffee_table_right_chair.setOrigin(0.46987341772151897, 0.3714150943396226);

		// town_coffee_table
		const town_coffee_table = this.add.image(537, 339, "town", "town/table");
		town_coffee_table.scaleX = 0.6745763944224064;
		town_coffee_table.scaleY = 0.7572768578827774;
		town_coffee_table.setOrigin(0.48025210084033615, 0.6818181818181818);

		// town_gift_shop_door_closed
		const town_gift_shop_door_closed = this.add.image(865, 180, "town", "town/shopdoor0001");
		town_gift_shop_door_closed.scaleX = 0.6663599701696622;
		town_gift_shop_door_closed.scaleY = 0.6828009846181321;
		town_gift_shop_door_closed.setOrigin(0, 0);

		// town_bottom_trees
		const town_bottom_trees = this.add.image(-8, 523, "town", "town/bottom");
		town_bottom_trees.scaleX = 0.6972142120680789;
		town_bottom_trees.scaleY = 0.7576839180120043;
		town_bottom_trees.setOrigin(0, 0);

		// town_dance_club_cover_entrance
		const town_dance_club_cover_entrance = this.add.image(703, 294, "town", "town/dancecover");
		town_dance_club_cover_entrance.scaleX = 0.6910111372027766;
		town_dance_club_cover_entrance.scaleY = 0.6837015263041849;
		town_dance_club_cover_entrance.setOrigin(0.48725714, 0.9);

		// town_dance_club_front_stars
		const town_dance_club_front_stars = this.add.sprite(655, 181, "town", "town/dancestars");
		town_dance_club_front_stars.scaleX = 0.6910695061947216;
		town_dance_club_front_stars.scaleY = 0.7443419787512866;
		town_dance_club_front_stars.setOrigin(0, 0);

		// town_dance_club_spotlight_left
		const town_dance_club_spotlight_left = this.add.image(631, 125, "town", "town/spotlightleft");
		town_dance_club_spotlight_left.scaleX = 0.6654835096779513;
		town_dance_club_spotlight_left.scaleY = 0.7154203518108428;
		town_dance_club_spotlight_left.angle = -30;
		town_dance_club_spotlight_left.setOrigin(0.5, 1);

		// town_gift_shop_clothes
		const town_gift_shop_clothes = this.add.image(960, 309, "town", "town/clothes");
		town_gift_shop_clothes.scaleX = 0.7120191743203917;
		town_gift_shop_clothes.scaleY = 0.7755418707348252;
		town_gift_shop_clothes.setOrigin(0.4978527648740103, 0.4808168705077219);

		// town_dance_club_speaks
		const town_dance_club_speaks = this.add.image(572, 181, "town", "town/speakers1");
		town_dance_club_speaks.scaleX = 0.6596067864007572;
		town_dance_club_speaks.scaleY = 0.6107297238006026;
		town_dance_club_speaks.setOrigin(0, 0);

		// town_coffee_shop_door_closed
		const town_coffee_shop_door_closed = this.add.image(355, 230, "town", "town/coffeedoor0001");
		town_coffee_shop_door_closed.scaleX = 0.6426637773244295;
		town_coffee_shop_door_closed.scaleY = 0.6323735279238364;
		town_coffee_shop_door_closed.setOrigin(0, 0);

		// town_gift_shop_door_open
		const town_gift_shop_door_open = this.add.image(866, 190, "town", "town/shopdoor0002");
		town_gift_shop_door_open.scaleX = 0.684112969672042;
		town_gift_shop_door_open.scaleY = 0.6200653218383253;
		town_gift_shop_door_open.setOrigin(0, 0);
		town_gift_shop_door_open.visible = false;

		// town_coffee_shop_door_open
		const town_coffee_shop_door_open = this.add.image(354, 235, "town", "town/coffeedoor0002");
		town_coffee_shop_door_open.scaleX = 0.671770468410661;
		town_coffee_shop_door_open.scaleY = 0.6035601014612642;
		town_coffee_shop_door_open.setOrigin(0, 0);
		town_coffee_shop_door_open.visible = false;

		// town_shop_top_parts
		const town_shop_top_parts = this.add.image(290, 117, "town", "town/shopfronts");
		town_shop_top_parts.scaleX = 0.6966129964557205;
		town_shop_top_parts.scaleY = 0.6380851615583507;
		town_shop_top_parts.setOrigin(0, 0);

		// town_dance_club_spotlight_right
		const town_dance_club_spotlight_right = this.add.image(774, 125, "town", "town/spotlightleft");
		town_dance_club_spotlight_right.scaleX = 0.6654835096779512;
		town_dance_club_spotlight_right.scaleY = 0.7154203518108428;
		town_dance_club_spotlight_right.angle = 30;
		town_dance_club_spotlight_right.setOrigin(0.5, 1);

		// town_shop_big_names
		const town_shop_big_names = this.add.image(225, 75, "town", "town/storenames0001");
		town_shop_big_names.scaleX = 0.6601646305585906;
		town_shop_big_names.scaleY = 0.6825127291235203;
		town_shop_big_names.setOrigin(0, 0);

		// town_dance_club_handle_rope
		const town_dance_club_handle_rope = this.add.image(786, 296, "town", "town/cord");
		town_dance_club_handle_rope.scaleX = 0.7653678959534306;
		town_dance_club_handle_rope.scaleY = 0.6790571396222513;
		town_dance_club_handle_rope.setOrigin(0.4715384615384616, 0.5485714285714286);

		// Setting all interactives sprites starts here
		town_gift_shop_door_closed.setInteractive({ useHandCursor: true });
		town_gift_shop_door_open.setInteractive({ useHandCursor: true });
		town_coffee_shop_door_open.setInteractive({ useHandCursor: true });
		town_coffee_shop_door_closed.setInteractive({ useHandCursor: true });
		// town_dance_club_door_closed.setInteractive({ useHandCursor: true });
		town_dance_club_door_closed_trigger.setInteractive({ useHandCursor: true });
		// Setting all interactives sprites ends here

		// Animations will make better when system is rewrote
		// FIX THIS ITS BROKEN ASF
		// this.anims.create({
		// 	key: "night_club_stars_animation",
		// 	frames: [
		// 		{ key: 'town', frame: 'town/discolights0001', duration: 0 },
		// 		{ key: 'town', frame: 'town/discolights0002', duration: 0 },
		// 		{ key: 'town', frame: 'town/discolights0003', duration: 0 },
		// 		{ key: 'town', frame: 'town/discolights0004', duration: 0 },
		// 		// { key: 'town', frame: 'town/discolights0005', duration: 150 },
		// 		// { key: 'town', frame: 'town/discolights0006', duration: 150 },
		// 		// { key: 'town', frame: 'town/discolights0007', duration: 100 },
		// 		// { key: 'town', frame: 'town/discolights0008', duration: 100 },
		// 		// { key: "town", frame: "town/discolights0007", duration: 100 },
		// 		// { key: "town", frame: "town/discolights0006", duration: 100 },
		// 		// { key: "town", frame: "town/discolights0007", duration: 100 },
		// 		// { key: "town", frame: "town/discolights0008", duration: 100 },
		// 		// { key: "town", frame: "town/discolights0009", duration: 0 },
		// 		// { key: "town", frame: "town/discolights0010", duration: 0 },
		// 		// { key: "town", frame: "town/discolights0011", duration: 0 },
		// 		// { key: "town", frame: "town/discolights0012", duration: 0 },
		// 		// { key: "town", frame: "town/discolights0006", duration: 0 },
		// 		// { key: "town", frame: "town/discolights0007", duration: 0 },
		// 		// { key: "town", frame: "town/discolights0008", duration: 0 },
    	// 	],
		// 	frameRate: 24,
		// 	repeat: 1,
		// 	skipMissedFrames: true
		// });
		// Animations ends here

		// All interactive events start here
		town_gift_shop_door_closed.on("pointerover", () => {
			town_gift_shop_door_closed.visible = false;
			town_gift_shop_door_open.visible = true;
			this.audioManager.play("town_gift_shop_open");
			// this.sound.play("town_gift_shop_open");
		});

		town_gift_shop_door_open.on("pointerout", () => {
			town_gift_shop_door_closed.visible = true;
			town_gift_shop_door_open.visible = false;
			this.audioManager.play("town_gift_shop_close");
			// this.sound.play("town_gift_shop_close");
		});

		town_coffee_shop_door_closed.on("pointerover", () => {
			town_coffee_shop_door_closed.visible = false;
			town_coffee_shop_door_open.visible = true;
			this.audioManager.play("town_coffee_door_open");
		});

		town_coffee_shop_door_open.on("pointerout", () => {
			town_coffee_shop_door_closed.visible = true;
			town_coffee_shop_door_open.visible = false;
			this.audioManager.play("town_coffee_door_close");
		});

		town_dance_club_door_closed_trigger.on("pointerover", () => {
			// retard didnt give me the animation for opening this door we will make it ourself
			const doorOpeningSpeed = 2;
			const stopY = 180;
			this.audioManager.play("town_dance_club_open");

			this.open_dance_club_door_timer = this.time.addEvent({
				delay: 10,
				callback: () => {
					if(this.open_dance_club_door_timer == null) {
						return;
					}

					if(town_dance_club_door_closed.y <= stopY) {
						this.open_dance_club_door_timer.remove();
						this.open_dance_club_door_timer = null;
						return;
					}

					town_dance_club_door_closed.setY(town_dance_club_door_closed.y - doorOpeningSpeed);
				},
				callbackScope: this,
				loop: true
			});
		});

		town_dance_club_door_closed_trigger.on("pointerout", () => {
			town_dance_club_door_closed.setY(227);
			this.audioManager.play("town_dance_club_close");
		});
		// All interactive events ends here

		// Testing stuff ignore will be moved eventually
		// this.a = new Penguin(this, "test", 600, 500);
		// this.movementManager = new MovementManager(this.a);
		// this.snowballManager = new snowBallManager(this, this.a);
		// this.snowballManager.createSnowball()
		// new RoomMouseMovemenet(this, this.a);
		// new RoomKeyPressed(this, this.a)

		this.events.once("shutdown", this.shutdown, this);
		this.events.emit("scene-awake");
	}

	// update() {
	// 	this.movementManager.update();
	// 	this.snowballManager.update();
	// }

	shutdown() {
		super.stopAllMusic();
	}
}