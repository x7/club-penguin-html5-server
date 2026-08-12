import { hideDomElements } from '../loginHelper.js';
import { ASSET_TYPES } from '../../../assets/assetTypes.js';
import { BaseScene } from '../../baseScene.js';
import { SCENE_LOGIN_SHARED_DEVICE } from '../../sceneNames.js';

export class SharedDevicePromptScene extends BaseScene {
	constructor() {
		super(SCENE_LOGIN_SHARED_DEVICE);
	}

	init(data = {}) {
		data["launchScene"] = true;
		super.init(data);
	}

	preload() {
		this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.BITMAP_FONT,
			name: "BurbankSmallBold",
			paths: ["assets/fonts/BurbankSmallBold.png", "assets/fonts/BurbankSmallBold.xml"]
		});
	}

	create() {
		// login_shared_device_background
		const login_shared_device_background = this.add.image(-37, 87, "login", "login-screen/itembg4");
		login_shared_device_background.scaleX = 1.0529225673113631;
		login_shared_device_background.scaleY = 1.2645247416470615;
		login_shared_device_background.setOrigin(-0.5, -0.5);

		// login_shared_device_no_button
		const login_shared_device_no_button = this.add.image(840, 555, "login", "login-screen/learnButton");
		login_shared_device_no_button.scaleX = 0.9009751228615204;
		login_shared_device_no_button.scaleY = 1.275523782595144;
		login_shared_device_no_button.setOrigin(0, 0);

		// login_shared_device_yes_button
		const login_shared_device_yes_button = this.add.image(529, 555, "login", "login-screen/learnButton");
		login_shared_device_yes_button.scaleX = 0.9009751228615204;
		login_shared_device_yes_button.scaleY = 1.275523782595144;
		login_shared_device_yes_button.setOrigin(0, 0);

		// login_shared_device_no_button_hover
		const login_shared_device_no_button_hover = this.add.image(841, 556, "login", "login-screen/learnButtonHover");
		login_shared_device_no_button_hover.scaleX = 0.9009751228615204;
		login_shared_device_no_button_hover.scaleY = 1.275523782595144;
		login_shared_device_no_button_hover.setOrigin(0, 0);
		login_shared_device_no_button_hover.visible = false;

		// login_shared_device_wait_people_text
		const login_shared_device_wait_people_text = this.add.bitmapText(573, 348, "BurbankSmallBold", "                WAIT!\nDo other people use this\n            computer?");
		login_shared_device_wait_people_text.scaleX = 1.074251717005933;
		login_shared_device_wait_people_text.scaleY = 1.1516731758506966;
		login_shared_device_wait_people_text.text = "                WAIT!\nDo other people use this\n            computer?";
		login_shared_device_wait_people_text.fontSize = 32;
		login_shared_device_wait_people_text.letterSpacing = 1;

		// login_shared_device_yes_button_hover
		const login_shared_device_yes_button_hover = this.add.image(530, 555, "login", "login-screen/learnButtonHover");
		login_shared_device_yes_button_hover.scaleX = 0.9009751228615204;
		login_shared_device_yes_button_hover.scaleY = 1.275523782595144;
		login_shared_device_yes_button_hover.setOrigin(0, 0);
		login_shared_device_yes_button_hover.visible = false;

		// login_shared_device_yes_button_text
		const login_shared_device_yes_button_text = this.add.bitmapText(597, 577, "BurbankSmallBold", "Yes");
		login_shared_device_yes_button_text.text = "Yes";
		login_shared_device_yes_button_text.fontSize = 36;

		// login_shared_device_no_button_text
		const login_shared_device_no_button_text = this.add.bitmapText(921, 576, "BurbankSmallBold", "No");
		login_shared_device_no_button_text.text = "No";
		login_shared_device_no_button_text.fontSize = 36;

		// Setting all interactives sprites starts here
		login_shared_device_no_button.setInteractive({ useHandCursor: true });
		login_shared_device_yes_button.setInteractive({ useHandCursor: true });
		login_shared_device_no_button_hover.setInteractive({ useHandCursor: true });
		login_shared_device_yes_button_hover.setInteractive({ useHandCursor: true });
		// Setting all interactives sprites ends here

		// All interactive events start here
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
				sceneKey: 'LoginSavePasswordPromptScene',
				scene: null,
				autoStart: false
			});

			hideDomElements(this.sceneManager.get("LoginScene"));
			this.sceneManager.stop('LoginSharedDevicePromptScene');
			this.sceneManager.launch('LoginSavePasswordPromptScene');
		});

		login_shared_device_yes_button_hover.on("pointerdown", () => {
			this.sceneManager.add({
				sceneKey: 'LoginSavePasswordPromptScene',
				scene: null,
				autoStart: false
			});

			hideDomElements(this.sceneManager.get("LoginScene"));
			this.sceneManager.stop('LoginSharedDevicePromptScene');
			this.sceneManager.launch('LoginSavePasswordPromptScene');
		});
		// All interactive events end here

		this.sceneManager.sendToTop(SCENE_LOGIN_SHARED_DEVICE);
	}
}