import { createAnimation } from "../../../../../animations/animations";
import { ASSET_TYPES } from "../../../../assets/assetTypes";
import { PLAZA_ROOM_MUSIC } from "../../../../audio/audioConstants";
import { SCENE_ROOM_BERRY_MALL, SCENE_ROOM_CAVE, SCENE_ROOM_FOREST, SCENE_ROOM_PET_SHOP, SCENE_ROOM_PIZZA_PARLOR, SCENE_ROOM_PLAZA, SCENE_ROOM_PUFFLE_HOTEL_LOBBY, SCENE_ROOM_PUFFLE_PARK, SCENE_ROOM_SNOW_FORTS } from "../../../sceneNames";
import { onJoinRoomTrigger } from "../../triggers/joinRoomTrigger";
import { onWalkingTrigger } from "../../triggers/walkingTrigger";
import { RoomScene } from "../RoomScene";

export class PlazaScene extends RoomScene {
    constructor() {
        super(SCENE_ROOM_PLAZA);
    }

    init(data) {
        super.init(data);

        // globals
        this.canGoUnderground = false;
    }

    preloadContent() {
        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.PACK,
            "name": "plaza",
            "paths": ["assets/world/rooms/plaza/plaza-pack.json"]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.IMAGE,
            "name": "plaza_walking_trigger",
            "paths": ["assets/world/rooms/plaza/plaza_walking_trigger.png"]
        });

        this.assetManager.load({
            "scene": this,
            "type": ASSET_TYPES.AUDIO,
            "name": PLAZA_ROOM_MUSIC,
            "paths": ["assets/world/rooms/plaza/plaza_room_music.mp3"]
        });
    }

    createContent() {
		// plaza_sky_png
		const plaza_sky_png = this.add.image(716, 87, "plaza", "plaza_sky.png");
		plaza_sky_png.scaleX = 0.9982228920870307;
		plaza_sky_png.scaleY = 1.1666968570750087;

		// plaza_main_background_png
		const plaza_main_background_png = this.add.image(-130, 115, "plaza", "plaza_main_background.png");
		plaza_main_background_png.scaleX = 0.9923768666057723;
		plaza_main_background_png.scaleY = 1.1621760421090446;
		plaza_main_background_png.setOrigin(0, 0);

		// plaza_park_tower0001_png
		const plaza_park_tower0001_png = this.add.image(163, 361, "plaza", "plaza_park_tower0001.png");
		plaza_park_tower0001_png.scaleX = 0.9609596954890374;
		plaza_park_tower0001_png.scaleY = 0.7397304783197567;

		// plaza_shops_png
		const plaza_shops_png = this.add.image(782, 327, "plaza", "plaza_shops.png");
		plaza_shops_png.scaleX = 0.9675524343224674;
		plaza_shops_png.scaleY = 0.9602046578154335;

		// plaza_puffle_berry_mall_wall_png
		const plaza_puffle_berry_mall_wall_png = this.add.image(921, 299, "plaza", "plaza_puffle_berry_mall_wall.png");
		plaza_puffle_berry_mall_wall_png.scaleX = 0.9696429132114572;
		plaza_puffle_berry_mall_wall_png.scaleY = 0.9414280911169803;

		// plaza_mall_door0001_png
		const plaza_mall_door0001_png = this.add.image(928, 398, "plaza", "plaza_mall_door0001.png");
		plaza_mall_door0001_png.scaleX = 0.9613526645238123;
		plaza_mall_door0001_png.scaleY = 1.00317853852403;

		// plaza_flag_pole_png
		const plaza_flag_pole_png = this.add.image(762, 91, "plaza", "plaza_flag_pole.png");
		plaza_flag_pole_png.scaleX = 1.3577579000410323;
		plaza_flag_pole_png.scaleY = 0.9157917966406792;

		// plaza_flag_left0001_png
		const plaza_flag_left0001_png = this.add.sprite(787, 81, "plaza", "plaza_flag_left0001.png");
		plaza_flag_left0001_png.scaleX = 0.8442693028290237;
		plaza_flag_left0001_png.scaleY = 0.7630716486464258;

		// plaza_right_pole_png
		const plaza_right_pole_png = this.add.image(1061, 89, "plaza", "plaza_right_pole.png");
		plaza_right_pole_png.scaleX = 1.3782836157168727;
		plaza_right_pole_png.scaleY = 0.8461297124601583;

		// plaza_flag_right0001_png
		const plaza_flag_right0001_png = this.add.sprite(1085, 88, "plaza", "plaza_flag_right0001.png");
		plaza_flag_right0001_png.scaleX = 0.8442693028290237;
		plaza_flag_right0001_png.scaleY = 0.7630716486464258;

		// plaza_left_side_tree_png
		const plaza_left_side_tree_png = this.add.image(53, 842, "plaza", "plaza_left_side_tree.png");
		plaza_left_side_tree_png.scaleX = 0.938495891823824;
		plaza_left_side_tree_png.scaleY = 0.9320356401941057;

		// plaza_pizza_shop_door0001_png
		const plaza_pizza_shop_door0001_png = this.add.image(1221, 412, "plaza", "plaza_pizza_shop_door0001.png");
		plaza_pizza_shop_door0001_png.scaleX = 0.9449561112101815;
		plaza_pizza_shop_door0001_png.scaleY = 1.013302273693885;

		// plaza_pizza_text_png
		const plaza_pizza_text_png = this.add.image(1248, 292, "plaza", "plaza_pizza_text.png");
		plaza_pizza_text_png.scaleX = 0.9555118122845913;
		plaza_pizza_text_png.scaleY = 0.9764278983063226;

		// plaza_mall_text_png
		const plaza_mall_text_png = this.add.image(932, 93, "plaza", "plaza_mall_text.png");
		plaza_mall_text_png.scaleX = 0.950296390792287;
		plaza_mall_text_png.scaleY = 0.8961547482232987;

		// plaza_puffle_hotel_text_png
		const plaza_puffle_hotel_text_png = this.add.image(549, 154, "plaza", "plaza_puffle_hotel_text.png");
		plaza_puffle_hotel_text_png.scaleX = 0.9330859388354946;
		plaza_puffle_hotel_text_png.scaleY = 0.9148031041298177;

		// plaza_puffle_hotel_door0001_png
		const plaza_puffle_hotel_door0001_png = this.add.image(663, 403, "plaza", "plaza_puffle_hotel_door0001.png");
		plaza_puffle_hotel_door0001_png.scaleX = 0.87434473129851;
		plaza_puffle_hotel_door0001_png.scaleY = 1.006923573217672;
		plaza_puffle_hotel_door0001_png.angle = 2;

		// plaza_puffle_hotel_door0002_png
		const plaza_puffle_hotel_door0002_png = this.add.image(663, 403, "plaza", "plaza_puffle_hotel_door0002.png");
		plaza_puffle_hotel_door0002_png.scaleX = 0.87434473129851;
		plaza_puffle_hotel_door0002_png.scaleY = 1.006923573217672;
		plaza_puffle_hotel_door0002_png.angle = 2;
		plaza_puffle_hotel_door0002_png.visible = false;

		// plaza_pet_shop_door0001_png
		const plaza_pet_shop_door0001_png = this.add.image(410, 423, "plaza", "plaza_pet_shop_door0001.png");
		plaza_pet_shop_door0001_png.scaleX = 1.001132851130645;
		plaza_pet_shop_door0001_png.scaleY = 1.121252500105973;

		// plaza_pet_shop_door0002_png
		const plaza_pet_shop_door0002_png = this.add.image(410, 423, "plaza", "plaza_pet_shop_door0002.png");
		plaza_pet_shop_door0002_png.scaleX = 1.001132851130645;
		plaza_pet_shop_door0002_png.scaleY = 1.121252500105973;
		plaza_pet_shop_door0002_png.visible = false;

		// plaza_pet_shop_front_png
		const plaza_pet_shop_front_png = this.add.image(410, 288, "plaza", "plaza_pet_shop_front.png");
		plaza_pet_shop_front_png.scaleX = 0.9229875738389257;
		plaza_pet_shop_front_png.scaleY = 0.9063592705272285;

		// plaza_puffle_hotel_front_png
		const plaza_puffle_hotel_front_png = this.add.image(650, 372, "plaza", "plaza_puffle_hotel_front.png");
		plaza_puffle_hotel_front_png.scaleX = 0.874477116919654;
		plaza_puffle_hotel_front_png.scaleY = 0.9612319347642855;

		// plaza_pet_shop_text_png
		const plaza_pet_shop_text_png = this.add.image(394, 314, "plaza", "plaza_pet_shop_text.png");
		plaza_pet_shop_text_png.scaleX = 1.0241992135000602;
		plaza_pet_shop_text_png.scaleY = 0.9646549840649263;

		// plaza_mall_door0002_png
		const plaza_mall_door0002_png = this.add.image(928, 398, "plaza", "plaza_mall_door0002.png");
		plaza_mall_door0002_png.scaleX = 0.9613526645238123;
		plaza_mall_door0002_png.scaleY = 1.00317853852403;
		plaza_mall_door0002_png.visible = false;

		// plaza_pizza_shop_door0002_png
		const plaza_pizza_shop_door0002_png = this.add.image(1221, 412, "plaza", "plaza_pizza_shop_door0002.png");
		plaza_pizza_shop_door0002_png.scaleX = 0.9449561112101815;
		plaza_pizza_shop_door0002_png.scaleY = 1.013302273693885;
		plaza_pizza_shop_door0002_png.visible = false;

		// plaza_underground_door_png
		const plaza_underground_door_png = this.add.sprite(525, 493, "plaza", "plaza_underground_door0001.png");
		plaza_underground_door_png.scaleX = 1.062600097429365;
		plaza_underground_door_png.scaleY = 0.9322432415619236;

		// plaza_puffle_hotel_trigger
		const plaza_puffle_hotel_trigger = this.add.rectangle(661, 439, 128, 128);
		plaza_puffle_hotel_trigger.scaleX = 0.6418773503319696;
		plaza_puffle_hotel_trigger.scaleY = 0.4447027427521548;
		plaza_puffle_hotel_trigger.alpha = 0.001;
		plaza_puffle_hotel_trigger.isFilled = true;

		// plaza_berry_mall_trigger
		const plaza_berry_mall_trigger = this.add.rectangle(923, 440, 128, 128);
		plaza_berry_mall_trigger.scaleX = 0.7453273631214405;
		plaza_berry_mall_trigger.scaleY = 0.4447027427521548;
		plaza_berry_mall_trigger.alpha = 0.001;
		plaza_berry_mall_trigger.isFilled = true;

		// plaza_pizza_parlor_trigger
		const plaza_pizza_parlor_trigger = this.add.rectangle(1218, 451, 128, 128);
		plaza_pizza_parlor_trigger.scaleX = 0.7453273631214405;
		plaza_pizza_parlor_trigger.scaleY = 0.4447027427521548;
		plaza_pizza_parlor_trigger.alpha = 0.001;
		plaza_pizza_parlor_trigger.isFilled = true;

		// plaza_pet_shop_trigger
		const plaza_pet_shop_trigger = this.add.rectangle(419, 448, 128, 128);
		plaza_pet_shop_trigger.scaleX = 1.0261702330798397;
		plaza_pet_shop_trigger.scaleY = 0.4447027427521548;
		plaza_pet_shop_trigger.alpha = 0.001;
		plaza_pet_shop_trigger.isFilled = true;

		// plaza_puffle_park_trigger
		const plaza_puffle_park_trigger = this.add.rectangle(169, 466, 128, 128);
		plaza_puffle_park_trigger.scaleX = 0.7904877069093351;
		plaza_puffle_park_trigger.scaleY = 0.4447027427521548;
		plaza_puffle_park_trigger.alpha = 0.001;
		plaza_puffle_park_trigger.isFilled = true;

		// plaza_snow_forts_trigger
		const plaza_snow_forts_trigger = this.add.rectangle(19, 497, 128, 128);
		plaza_snow_forts_trigger.scaleX = 0.7032064376954231;
		plaza_snow_forts_trigger.scaleY = 0.4447027427521548;
		plaza_snow_forts_trigger.alpha = 0.001;
		plaza_snow_forts_trigger.isFilled = true;

		// plaza_cave_trigger
		const plaza_cave_trigger = this.add.ellipse(525, 539, 128, 128);
		plaza_cave_trigger.scaleX = 0.8472926321252788;
		plaza_cave_trigger.scaleY = 0.43272954499508154;
		plaza_cave_trigger.alpha = 0.001;
		plaza_cave_trigger.isFilled = true;

		// plaza_forest_trigger
		const plaza_forest_trigger = this.add.rectangle(1462, 488, 128, 128);
		plaza_forest_trigger.scaleX = 1.0433581787463355;
		plaza_forest_trigger.scaleY = 0.8212288028500787;
		plaza_forest_trigger.alpha = 0.001;
		plaza_forest_trigger.isFilled = true;

		// plaza_walking_trigger
		const plaza_walking_trigger = this.physics.add.sprite(761, 477, "plaza_walking_trigger");
		plaza_walking_trigger.alpha = 0.001;
		plaza_walking_trigger.alphaTopLeft = 0.001;
		plaza_walking_trigger.alphaTopRight = 0.001;
		plaza_walking_trigger.alphaBottomLeft = 0.001;
		plaza_walking_trigger.alphaBottomRight = 0.001;
		plaza_walking_trigger.body.setSize(1520, 960, false);
        this.collisionMap = this.createCollisionMap(this, 761, 477, "plaza_walking_trigger");

        // Setting global instances starts here
        this.plaza_cave_trigger = plaza_cave_trigger;
        // Setting global instances ends here

        // Setting arcade physics sprites starts here
		this.physics.add.existing(plaza_forest_trigger);
		this.physics.add.existing(plaza_cave_trigger);
        this.physics.add.existing(plaza_snow_forts_trigger);
        this.physics.add.existing(plaza_puffle_park_trigger);
        this.physics.add.existing(plaza_pet_shop_trigger);
        this.physics.add.existing(plaza_pizza_parlor_trigger);
        this.physics.add.existing(plaza_berry_mall_trigger);
        this.physics.add.existing(plaza_puffle_hotel_trigger);
		// Setting arcade physics sprites ends here

        // Setting triggers starts here
        this.triggers.push([plaza_walking_trigger, () => {
            onWalkingTrigger(this);
        }]);

        this.triggers.push([plaza_forest_trigger, () => {
            onJoinRoomTrigger(SCENE_ROOM_FOREST);
        }]);

        this.triggers.push([plaza_cave_trigger, () => {
            if(!this.canGoUnderground) {
                return;
            }

            onJoinRoomTrigger(SCENE_ROOM_CAVE);
        }]);

        this.triggers.push([plaza_snow_forts_trigger, () => {
            onJoinRoomTrigger(SCENE_ROOM_SNOW_FORTS);
        }]);

        this.triggers.push([plaza_puffle_park_trigger, () => {
            onJoinRoomTrigger(SCENE_ROOM_PUFFLE_PARK);
        }]);
        this.triggers.push([plaza_pet_shop_trigger, () => {
            onJoinRoomTrigger(SCENE_ROOM_PET_SHOP);
        }]);

        this.triggers.push([plaza_pizza_parlor_trigger, () => {
            onJoinRoomTrigger(SCENE_ROOM_PIZZA_PARLOR);
        }]);

        this.triggers.push([plaza_berry_mall_trigger, () => {
            onJoinRoomTrigger(SCENE_ROOM_BERRY_MALL);
        }]);

        this.triggers.push([plaza_puffle_hotel_trigger, () => {
            onJoinRoomTrigger(SCENE_ROOM_PUFFLE_HOTEL_LOBBY);
        }]);
        // Setting triggers ends here

        // Animations start here
        createAnimation({
            "scene": this,
            "logicalAnimationKey": "plaza_underground_well_open_animation",
            "phaserAnimationKey": "plaza_underground_well_open_animation_play",
            "textureKey": "plaza",
            "framePrefix": "plaza_underground_door",
            "frames": Array.from({ length: 12 }, (_, i) => String(i + 6).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": 0
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "plaza_underground_well_close_animation",
            "phaserAnimationKey": "plaza_underground_well_close_animation_play",
            "textureKey": "plaza",
            "framePrefix": "plaza_underground_door",
            "frames": Array.from({ length: 12 }, (_, i) => String(i + 18).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": 0
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "plaza_left_flag_animation",
            "phaserAnimationKey": "plaza_left_flag_animation_play",
            "textureKey": "plaza",
            "framePrefix": "plaza_flag_left",
            "frames": Array.from({ length: 15 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        createAnimation({
            "scene": this,
            "logicalAnimationKey": "plaza_right_flag_animation",
            "phaserAnimationKey": "plaza_right_flag_animation_play",
            "textureKey": "plaza",
            "framePrefix": "plaza_flag_right",
            "frames": Array.from({ length: 15 }, (_, i) => String(i + 1).padStart(4, "0")),
            "framesExtension": ".png",
            "frameRate": 24,
            "repeat": -1
        });

        plaza_flag_left0001_png.play("plaza_left_flag_animation_play");
        plaza_flag_right0001_png.play("plaza_right_flag_animation_play");
        // Animations end here

        // Setting all interactives sprites starts here
        plaza_pet_shop_door0001_png.setInteractive({ useHandCursor: true });
        plaza_pet_shop_door0002_png.setInteractive({ useHandCursor: true });
        plaza_puffle_hotel_door0001_png.setInteractive({ useHandCursor: true });
        plaza_puffle_hotel_door0002_png.setInteractive({ useHandCursor: true });
        plaza_pizza_shop_door0001_png.setInteractive({ useHandCursor: true });
        plaza_pizza_shop_door0002_png.setInteractive({ useHandCursor: true });
        plaza_mall_door0001_png.setInteractive({ useHandCursor: true });
        plaza_mall_door0002_png.setInteractive({ useHandCursor: true });
        plaza_underground_door_png.setInteractive({ useHandCursor: true });
        // Setting all interactives sprites ends here

        // All interactive events start here
        plaza_pet_shop_door0001_png.on("pointerover", () => {
            plaza_pet_shop_door0001_png.visible = false;
            plaza_pet_shop_door0002_png.visible = true;
        });

        plaza_pet_shop_door0002_png.on("pointerout", () => {
            plaza_pet_shop_door0001_png.visible = true;
            plaza_pet_shop_door0002_png.visible = false;
        });

        plaza_puffle_hotel_door0001_png.on("pointerover", () => {
            plaza_puffle_hotel_door0001_png.visible = false;
            plaza_puffle_hotel_door0002_png.visible = true;
        });

        plaza_puffle_hotel_door0002_png.on("pointerout", () => {
            plaza_puffle_hotel_door0001_png.visible = true;
            plaza_puffle_hotel_door0002_png.visible = false;
        });

        plaza_pizza_shop_door0001_png.on("pointerover", () => {
            plaza_pizza_shop_door0001_png.visible = false;
            plaza_pizza_shop_door0002_png.visible = true;
        });

        plaza_pizza_shop_door0002_png.on("pointerout", () => {
            plaza_pizza_shop_door0001_png.visible = true;
            plaza_pizza_shop_door0002_png.visible = false;
        });

        plaza_mall_door0001_png.on("pointerover", () => {
            plaza_mall_door0001_png.visible = false;
            plaza_mall_door0002_png.visible = true;
        });

        plaza_mall_door0002_png.on("pointerout", () => {
            plaza_mall_door0001_png.visible = true;
            plaza_mall_door0002_png.visible = false;
        });

        plaza_underground_door_png.on("pointerover", () => {
            plaza_underground_door_png.play("plaza_underground_well_open_animation_play");
        });

        plaza_underground_door_png.on("pointerout", () => {
            plaza_underground_door_png.play("plaza_underground_well_close_animation_play");
        });

        plaza_underground_door_png.on("pointerdown", () => {
            this.canGoUnderground = true;
        }); 
        // All interactive events end here

        this.audioManager.play(PLAZA_ROOM_MUSIC);
        super.createContent(this);
    }

    update() {
        super.update();
    }
}