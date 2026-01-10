import Phaser from 'phaser';
import { getSceneManager } from '../../main.js';

export class SharedDevicePrompt extends Phaser.Scene {
	constructor() {
		super("LoginSharedDevicePromptScene");
		this.sceneManager = getSceneManager();
	}

	create() {
		// login_shared_device_background
		const login_shared_device_background = this.add.image(-7, 49, "login_1", "login-screen/itembg4");
		login_shared_device_background.scaleX = 0.8150498575626238;
		login_shared_device_background.scaleY = 1.024858964161464;
		login_shared_device_background.setOrigin(-0.5, -0.5);

		// login_shared_device_no_button
		const login_shared_device_no_button = this.add.image(713, 399, "login_1", "login-screen/publicpromptbutton0001");
		login_shared_device_no_button.scaleX = 0.6936608167846001;
		login_shared_device_no_button.scaleY = 0.7247912756884711;
		login_shared_device_no_button.setOrigin(0, 0);

		// login_shared_device_yes_button
		const login_shared_device_yes_button = this.add.image(369, 399, "login_1", "login-screen/publicpromptbutton0001");
		login_shared_device_yes_button.scaleX = 0.6936608167846001;
		login_shared_device_yes_button.scaleY = 0.7247912756884711;
		login_shared_device_yes_button.setOrigin(0, 0);

		// login_shared_device_yes_button_hover
		const login_shared_device_yes_button_hover = this.add.image(369, 399, "login_1", "login-screen/publicpromptbutton0002");
		login_shared_device_yes_button_hover.scaleX = 0.6936608167846001;
		login_shared_device_yes_button_hover.scaleY = 0.7247912756884711;
		login_shared_device_yes_button_hover.setOrigin(0, 0);
		login_shared_device_yes_button_hover.visible = false;

		// login_shared_device_no_button_hover
		const login_shared_device_no_button_hover = this.add.image(714, 397, "login_1", "login-screen/saveButtonHover");
		login_shared_device_no_button_hover.scaleX = 0.5617677178981361;
		login_shared_device_no_button_hover.scaleY = 0.6651533044977801;
		login_shared_device_no_button_hover.setOrigin(0, 0);
		login_shared_device_no_button_hover.visible = false;

		// login_shared_device_wait_people_text
		const login_shared_device_wait_people_text = this.add.bitmapText(465, 267, "BurbankSmallBold", "             WAIT!\nDo other people use\n     this computer?");
		login_shared_device_wait_people_text.scaleX = 0.9254240814270847;
		login_shared_device_wait_people_text.scaleY = 0.9066980328033849;
		login_shared_device_wait_people_text.text = "             WAIT!\nDo other people use\n     this computer?";
		login_shared_device_wait_people_text.fontSize = 36;

		// login_shared_device_yes_button_text
		const login_shared_device_yes_button_text = this.add.bitmapText(431, 414, "BurbankSmallBold", "Yes");
		login_shared_device_yes_button_text.text = "Yes";
		login_shared_device_yes_button_text.fontSize = 36;

		// login_shared_device_no_button_text
		const login_shared_device_no_button_text = this.add.bitmapText(786, 414, "BurbankSmallBold", "No");
		login_shared_device_no_button_text.text = "No";
		login_shared_device_no_button_text.fontSize = 36;

		// set interactables
		login_shared_device_no_button.setInteractive({ useHandCursor: true });
		login_shared_device_yes_button.setInteractive({ useHandCursor: true });
		login_shared_device_no_button_hover.setInteractive({ useHandCursor: true });
		login_shared_device_yes_button_hover.setInteractive({ useHandCursor: true });

		// interaction events
		login_shared_device_no_button.on("pointerover", () => {
			login_shared_device_no_button.visible = false;
			login_shared_device_no_button_hover.visible = true;
		});

		login_shared_device_yes_button.on("pointerover", () => {
			login_shared_device_yes_button.visible = false;
			login_shared_device_yes_button_hover.visible = true;
		});

		login_shared_device_no_button_hover.on("pointerout", () => {
			login_shared_device_no_button.visible = true;
			login_shared_device_no_button_hover.visible = false;
		});

		login_shared_device_yes_button_hover.on("pointerout", () => {
			login_shared_device_yes_button.visible = true;
			login_shared_device_yes_button_hover.visible = false;
		});

		login_shared_device_no_button_hover.on("pointerdown", () => {
			this.sceneManager.add({
				sceneKey: 'LoginSavePasswordPrompt',
				scene: null,
				autoStart: false
			});

			this.sceneManager.stop('LoginSharedDevicePromptScene');
			this.sceneManager.launch('LoginSavePasswordPrompt');
		});

		login_shared_device_yes_button_hover.on("pointerdown", () => {
			this.sceneManager.add({
				sceneKey: 'LoginSavePasswordPrompt',
				scene: null,
				autoStart: false
			});

			this.sceneManager.stop('LoginSharedDevicePromptScene');
			this.sceneManager.launch('LoginSavePasswordPrompt');
		});

		this.events.emit("scene-awake");
	}
}