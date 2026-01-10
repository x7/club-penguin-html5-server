import * as Phaser from 'https://cdn.jsdelivr.net/npm/phaser@3/dist/phaser.esm.js';
import Penguin from '../../../../penguin.js'
import * as Socket from '../../../../socket.js'
// You can write more code here

/* START OF COMPILED CODE */
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class TownScene extends Phaser.Scene {

	constructor() {
		super("TownScene");
	}

	preload() {
		this.load.pack("town2013-pack", "media/world/rooms/town/town2013-pack.json");
        this.load.pack("penguins", "media/penguin/penguin-pack.json");
	}

	create() {
        Socket.connectWebSocket()
		// town_sky
        const town_sky = this.add.image(-208, -81, "town", "town/sky");
        town_sky.setOrigin(0, 0);

        // town_clouds
        const town_clouds = this.add.image(-5, -53, "town", "town/clouds");
        town_clouds.scaleX = 1.1835512617867499;
        town_clouds.scaleY = 1.0465579105883338;
        town_clouds.setOrigin(0, 0);

        // town_danceinside
        const town_danceinside = this.add.image(656, 181, "town", "town/danceinside");
        town_danceinside.setOrigin(0, 0);

        // town_mountains
        const town_mountains = this.add.image(140, 11, "town", "town/mountains");
        town_mountains.scaleX = 0.6639114813062592;
        town_mountains.scaleY = 0.7141119939610138;
        town_mountains.setOrigin(0, 0);

        // town_base
        const town_base = this.add.image(-2, -11, "town", "town/base");
        town_base.scaleX = 0.6600899634787308;
        town_base.scaleY = 0.6800335919803799;
        town_base.setOrigin(0, 0);

        // town_newsboard
        const town_newsboard = this.add.image(171, 490, "town", "town/newsboard");
        town_newsboard.scaleX = 0.6326953677426618;
        town_newsboard.scaleY = 0.7509534451668876;
        town_newsboard.setOrigin(0.49369784172661874, 0.3285276073619632);

        // town_sidetrees
        const town_sidetrees = this.add.image(1271, 411, "town", "town/sidetrees");
        town_sidetrees.scaleX = 0.77284862078044;
        town_sidetrees.scaleY = 0.7694282215917598;
        town_sidetrees.setOrigin(0.49164983164983167, 0.4962162162162162);

        // town_leftchair
        const town_leftchair = this.add.image(479, 299, "town", "town/leftchair");
        town_leftchair.scaleX = 0.7125241347573734;
        town_leftchair.scaleY = 0.7342216991286798;
        town_leftchair.setOrigin(0.47593406593406595, 0.3510185185185185);

        // town_rightchair
        const town_rightchair = this.add.image(587, 285, "town", "town/rightchair");
        town_rightchair.scaleX = 0.7125241347573734;
        town_rightchair.scaleY = 0.7342216991286798;
        town_rightchair.setOrigin(0.46987341772151897, 0.3714150943396226);

        // town_table
        const town_table = this.add.image(537, 339, "town", "town/table");
        town_table.scaleX = 0.6745763944224064;
        town_table.scaleY = 0.7572768578827774;
        town_table.setOrigin(0.48025210084033615, 0.6818181818181818);

        // town_shopdoor0001
        const town_shopdoor0001 = this.add.image(865, 180, "town", "town/shopdoor0001");
        town_shopdoor0001.scaleX = 0.6663599701696622;
        town_shopdoor0001.scaleY = 0.6828009846181321;
        town_shopdoor0001.setOrigin(0, 0);

        // town_bottom
        const town_bottom = this.add.image(-8, 523, "town", "town/bottom");
        town_bottom.scaleX = 0.6972142120680789;
        town_bottom.scaleY = 0.7576839180120043;
        town_bottom.setOrigin(0, 0);

        // town_dancedoor
        const town_dancedoor = this.add.image(702, 227, "town", "town/dancedoor");
        town_dancedoor.scaleX = 0.6361813879869564;
        town_dancedoor.scaleY = 0.6900376223318818;

        // town_dancecover
        const town_dancecover = this.add.image(703, 294, "town", "town/dancecover");
        town_dancecover.scaleX = 0.6910111372027766;
        town_dancecover.scaleY = 0.6517561082624983;
        town_dancecover.setOrigin(0.48725714, 0.9);

        // town_dancestars
        const town_dancestars = this.add.image(655, 182, "town", "town/dancestars");
        town_dancestars.scaleX = 0.7273363551191345;
        town_dancestars.scaleY = 0.8063466532936137;
        town_dancestars.setOrigin(0, 0);

        // town_clothes
        const town_clothes = this.add.image(960, 309, "town", "town/clothes");
        town_clothes.scaleX = 0.7120191743203917;
        town_clothes.scaleY = 0.7755418707348252;
        town_clothes.setOrigin(0.4978527648740103, 0.4808168705077219);

        // town_speakers1
        const town_speakers1 = this.add.image(572, 181, "town", "town/speakers1");
        town_speakers1.scaleX = 0.6596067864007572;
        town_speakers1.scaleY = 0.6107297238006026;
        town_speakers1.setOrigin(0, 0);

        // town_coffeedoor0001
        const town_coffeedoor0001 = this.add.image(355, 230, "town", "town/coffeedoor0001");
        town_coffeedoor0001.scaleX = 0.6426637773244295;
        town_coffeedoor0001.scaleY = 0.6323735279238364;
        town_coffeedoor0001.setOrigin(0, 0);

        // town_shopdoor0002
        const town_shopdoor0002 = this.add.image(866, 190, "town", "town/shopdoor0002");
        town_shopdoor0002.scaleX = 0.684112969672042;
        town_shopdoor0002.scaleY = 0.6200653218383253;
        town_shopdoor0002.setOrigin(0, 0);
        town_shopdoor0002.visible = false;

        // town_coffeedoor0002
        const town_coffeedoor0002 = this.add.image(354, 235, "town", "town/coffeedoor0002");
        town_coffeedoor0002.scaleX = 0.671770468410661;
        town_coffeedoor0002.scaleY = 0.6035601014612642;
        town_coffeedoor0002.setOrigin(0, 0);
        town_coffeedoor0002.visible = false;

        // town_shopfronts
        const town_shopfronts = this.add.image(290, 117, "town", "town/shopfronts");
        town_shopfronts.scaleX = 0.6966129964557205;
        town_shopfronts.scaleY = 0.6380851615583507;
        town_shopfronts.setOrigin(0, 0);

        // town_storenames0001
        const town_storenames0001 = this.add.image(225, 75, "town", "town/storenames0001");
        town_storenames0001.scaleX = 0.6601646305585906;
        town_storenames0001.scaleY = 0.6825127291235203;
        town_storenames0001.setOrigin(0, 0);

		// interactives
		town_coffeedoor0001.setInteractive({ useHandCursor: true });
		town_coffeedoor0002.setInteractive({ useHandCursor: true });
		town_shopdoor0001.setInteractive({ useHandCursor: true });
		town_shopdoor0002.setInteractive({ useHandCursor: true });

        new Penguin(this, "username", 700, 500).sitDown();
        

		// animations

		// on click
		town_coffeedoor0001.on("pointerover", () => {
            town_coffeedoor0001.visible = false;
            town_coffeedoor0002.visible = true;
            this.sound.play("town2013-coffeeopen");
		});

		town_coffeedoor0002.on("pointerout", () => {
		    town_coffeedoor0001.visible = true;
            town_coffeedoor0002.visible = false;
            this.sound.play("town2013-coffeeclose");
		});

		town_shopdoor0001.on("pointerover", () => {
            town_shopdoor0001.visible = false;
            town_shopdoor0002.visible = true;
            this.sound.play("town2013-shopopen");
        });

        town_shopdoor0002.on("pointerout", () => {
            town_shopdoor0001.visible = true;
            town_shopdoor0002.visible = false;
            this.sound.play("town2013-shopclose");
        });

		this.events.emit("scene-awake");
	}
}
