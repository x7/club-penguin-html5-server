import Phaser from 'phaser';
import { LoadingScene } from '../loading/loading.js'
import { getSceneManager } from '../../main.js';

export class StartScene extends Phaser.Scene {
	constructor() {
		super("StartScene");
		this.sceneManager = getSceneManager();
	}

	init(data) {
		this.start = data.start ?? true
	}

	preload() {
	    this.load.image("brb-billboardShadow", "public/phaser/start/brb-billboardShadow.png");
	    this.load.image("main-background", "public/phaser/start/brb-billboard.png");
		this.load.pack("start-asset-pack", "public/phaser/start/start-pack.json");
		this.load.bitmapFont("BurbankSmallBold", "public/phaser/fonts/BurbankSmallBold.png", "public/phaser/fonts/BurbankSmallBold.xml");
	}

	create() {
		if(!this.start) {
			return;
		}

		// brb_billboardShadow
		this.add.image(645, 376, "brb-billboardShadow");

		// start_home_page_image
		const start_home_page_image = this.add.image(644, 250, "main-background");
		start_home_page_image.scaleX = 0.7834245115116306;
		start_home_page_image.scaleY = 0.5532347846363925;

		// start_screen_module
		const start_screen_module = this.add.image(645, 369, "start", "start-screen/module");
		start_screen_module.scaleX = 0.7826780719198335;
		start_screen_module.scaleY = 0.818191627073128;
		start_screen_module.setOrigin(0.5, 0);

		// start_screen_logo
		const start_screen_logo = this.add.image(650, 395, "start", "start-screen/logo");
		start_screen_logo.scaleX = 0.8265929050919512;
		start_screen_logo.scaleY = 0.8136526525568496;
		start_screen_logo.setOrigin(0.5, 0);

		// start_screen_createPenguinGraphic0001
		const start_screen_createPenguinGraphic0001 = this.add.image(123, 504, "start", "start-screen/createPenguinGraphic0001");
		start_screen_createPenguinGraphic0001.scaleX = 0.7684178210136344;
		start_screen_createPenguinGraphic0001.scaleY = 0.7842935465681308;
		start_screen_createPenguinGraphic0001.setOrigin(0, 0);

		// start_screen_createPenguinGraphic0002
		const start_screen_createPenguinGraphic0002 = this.add.image(123, 504, "start", "start-screen/createPenguinGraphic0002");
		start_screen_createPenguinGraphic0002.scaleX = 0.7684178210136344;
		start_screen_createPenguinGraphic0002.scaleY = 0.7842935465681308;
		start_screen_createPenguinGraphic0002.setOrigin(0, 0);
		start_screen_createPenguinGraphic0002.visible = false;

		// start_screen_mainButton
		const start_screen_mainButton = this.add.image(277, 564, "start", "start-screen/mainButton");
		start_screen_mainButton.scaleX = 0.7361182885859817;
		start_screen_mainButton.scaleY = 0.8117563611581747;
		start_screen_mainButton.setOrigin(0, 0);

		// start_screen_mainButton_1
		const start_screen_mainButton_1 = this.add.image(712, 564, "start", "start-screen/mainButton");
		start_screen_mainButton_1.scaleX = 0.7361182885859817;
		start_screen_mainButton_1.scaleY = 0.8117563611581747;
		start_screen_mainButton_1.setOrigin(0, 0);

		// start_screen_loginGraphic0001
		const start_screen_loginGraphic0001 = this.add.image(977, 504, "start", "start-screen/loginGraphic0001");
		start_screen_loginGraphic0001.scaleX = 0.7787852917119562;
		start_screen_loginGraphic0001.scaleY = 0.7594716800330545;
		start_screen_loginGraphic0001.setOrigin(0, 0);

		// start_screen_loginGraphic0002
		const start_screen_loginGraphic0002 = this.add.image(977, 504, "start", "start-screen/loginGraphic0002");
		start_screen_loginGraphic0002.scaleX = 0.7787852917119562;
		start_screen_loginGraphic0002.scaleY = 0.7594716800330545;
		start_screen_loginGraphic0002.setOrigin(0, 0);
		start_screen_loginGraphic0002.visible = false;

		// start_screen_mainButtonHover
		const start_screen_mainButtonHover = this.add.image(712, 564, "start", "start-screen/mainButtonHover");
		start_screen_mainButtonHover.scaleX = 0.7361182885859817;
		start_screen_mainButtonHover.scaleY = 0.8117563611581747;
		start_screen_mainButtonHover.setOrigin(0, 0);
		start_screen_mainButtonHover.visible = false;

		// start_screen_mainButton_2
		const start_screen_mainButton_2 = this.add.image(277, 564, "start", "start-screen/mainButtonHover");
		start_screen_mainButton_2.scaleX = 0.7361182885859817;
		start_screen_mainButton_2.scaleY = 0.8117563611581747;
		start_screen_mainButton_2.setOrigin(0, 0);
		start_screen_mainButton_2.visible = false;

		// create_a_penguin_text
		const create_a_penguin_text = this.add.bitmapText(300, 582, "BurbankSmallBold", "Create a Penguin", 16);
		create_a_penguin_text.setScale(1.88583360141565, 2.253056795753186);

		// login_text
		const login_text = this.add.bitmapText(817, 582, "BurbankSmallBold", "Login", 16);
		login_text.setScale(1.88583360141565, 2.253056795753186)

        // set interactables
        start_screen_mainButton_1.setInteractive({ useHandCursor: true });
        start_screen_mainButtonHover.setInteractive({ useHandCursor: true });
        start_screen_mainButton.setInteractive({ useHandCursor: true });
        start_screen_mainButton_2.setInteractive({ useHandCursor: true });

		// events
		start_screen_mainButton_1.on("pointerover", () => {
		    start_screen_loginGraphic0001.visible = false;
            start_screen_mainButton_1.visible = false;
		    start_screen_mainButtonHover.visible = true;
		    start_screen_loginGraphic0002.visible = true;
		});

		start_screen_mainButtonHover.on("pointerout", () => {
            start_screen_loginGraphic0001.visible = true;
            start_screen_mainButton_1.visible = true;
            start_screen_mainButtonHover.visible = false;
            start_screen_loginGraphic0002.visible = false;
		});

		start_screen_mainButton.on("pointerover", () => {
		    start_screen_mainButton.visible = false;
		    start_screen_createPenguinGraphic0001.visible = false;
		    start_screen_mainButton_2.visible = true;
		    start_screen_createPenguinGraphic0002.visible = true;
		});

		start_screen_mainButton_2.on("pointerout", () => {
		    start_screen_mainButton.visible = true;
		    start_screen_createPenguinGraphic0001.visible = true;
            start_screen_mainButton_2.visible = false;
            start_screen_createPenguinGraphic0002.visible = false;
		});

		start_screen_mainButtonHover.on("pointerdown", () => {
			this.sceneManager.start("LoadingScene", { currentScene: "StartScene", nextScene: "LoginScene" });
		});

		start_screen_mainButton_2.on("pointerdown", () => {
		    this.sceneManager.start("LoadingScene", { currentScene: "StartScene", nextScene: "RegisterScene" });
		});

		this.sceneManager.add({
			sceneKey: 'ErrorScene',
			scene: null,
			autoStart: false
		});

		this.sceneManager.launch('ErrorScene');

		this.events.emit("scene-awake");
	}
}