import { showWarningImage, getWarningImages } from './savePasswordPromptHelper.js';
import { enableRememberMeBoxes } from '../../loginHelper.js';
import { BaseScene } from '../../../baseScene.js';
import { ASSET_TYPES } from '../../../../assets/assetTypes.js';
import { SCENE_LOGIN, SCENE_LOGIN_SHARED_PASSWORD } from '../../../sceneNames.js';

export class LoginSavePasswordPromptScene extends BaseScene {
	constructor() {
		super(SCENE_LOGIN_SHARED_PASSWORD);
	}

    init(data = {}) {
        data["launchScene"] = true;
		super.init(data);
        this.warningLoopInterval = 5;
	}

    preload() {
        this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.BITMAP_FONT,
			name: "BurbankSmallBold",
			paths: ["assets/fonts/BurbankSmallBold.png", "assets/fonts/BurbankSmallBold.xml"]
		});
    }

	createContent() {
		// login_save_password_background_gui
		const login_save_password_background_gui = this.add.image(206, 127, "login", "login-screen/warn");
		login_save_password_background_gui.scaleX = 0.972656358219807;
		login_save_password_background_gui.scaleY = 0.842584334675681;
		login_save_password_background_gui.setOrigin(0, 0);

		// login_save_password_exit_button
		const login_save_password_exit_button = this.add.image(1255, 153, "login", "login-screen/closeButton");
		login_save_password_exit_button.scaleX = 0.9985073690921258;
		login_save_password_exit_button.scaleY = 1.0064519825596057;
		login_save_password_exit_button.setOrigin(0, 0);

		// login_save_password_warning_text
		const login_save_password_warning_text = this.add.bitmapText(322, 162, "BurbankSmallBold", "If you save your password here, anyone who uses this\ncomputer could access your account.");
		login_save_password_warning_text.scaleX = 1.3178779364290758;
		login_save_password_warning_text.scaleY = 1.4738023138103065;
		login_save_password_warning_text.text = "If you save your password here, anyone who uses this\ncomputer could access your account.";
		login_save_password_warning_text.fontSize = 26;

		// login_save_password_save_password_button
		const login_save_password_save_password_button = this.add.image(331, 694, "login", "login-screen/publicpromptbutton0001");
		login_save_password_save_password_button.scaleX = 1.0923562963385764;
		login_save_password_save_password_button.scaleY = 1.1410290142906796;
		login_save_password_save_password_button.setOrigin(0, 0);

		// login_save_password_dont_save_password_button
		const login_save_password_dont_save_password_button = this.add.image(704, 694, "login", "login-screen/publicpromptbutton0001");
		login_save_password_dont_save_password_button.scaleX = 1.0923562963385764;
		login_save_password_dont_save_password_button.scaleY = 1.1410290142906796;
		login_save_password_dont_save_password_button.setOrigin(0, 0);

		// login_save_password_learn_more_button
		const login_save_password_learn_more_button = this.add.image(1054, 711, "login", "login-screen/publicpromptbutton0001");
		login_save_password_learn_more_button.scaleX = 0.7780157557432849;
		login_save_password_learn_more_button.scaleY = 0.8350722534314228;
		login_save_password_learn_more_button.setOrigin(0, 0);

		// login_save_password_save_password_button_hover
		const login_save_password_save_password_button_hover = this.add.image(331, 694, "login", "login-screen/publicpromptbutton0002");
		login_save_password_save_password_button_hover.scaleX = 1.0923562963385764;
		login_save_password_save_password_button_hover.scaleY = 1.1410290142906796;
		login_save_password_save_password_button_hover.setOrigin(0, 0);
		login_save_password_save_password_button_hover.visible = false;

		// login_save_password_dont_save_password_button_hover
		const login_save_password_dont_save_password_button_hover = this.add.image(704, 694, "login", "login-screen/publicpromptbutton0002");
		login_save_password_dont_save_password_button_hover.scaleX = 1.0923562963385764;
		login_save_password_dont_save_password_button_hover.scaleY = 1.1410290142906796;
		login_save_password_dont_save_password_button_hover.setOrigin(0, 0);
		login_save_password_dont_save_password_button_hover.visible = false;

		// login_save_password_learn_more_button_hover
		const login_save_password_learn_more_button_hover = this.add.image(1054, 711, "login", "login-screen/publicpromptbutton0002");
		login_save_password_learn_more_button_hover.scaleX = 0.7780157557432849;
		login_save_password_learn_more_button_hover.scaleY = 0.8350722534314228;
		login_save_password_learn_more_button_hover.setOrigin(0, 0);
		login_save_password_learn_more_button_hover.visible = false;

		// login_save_password_save_password_text
		const login_save_password_save_password_text = this.add.bitmapText(357, 725, "BurbankSmallBold", "Save Password");
		login_save_password_save_password_text.scaleX = 1.6430386634219252;
		login_save_password_save_password_text.scaleY = 2.150240600629912;
		login_save_password_save_password_text.text = "Save Password";
		login_save_password_save_password_text.fontSize = 20;

		// login_save_password_dont_save_password_text
		const login_save_password_dont_save_password_text = this.add.bitmapText(760, 714, "BurbankSmallBold", "Don't Save\n Password");
		login_save_password_dont_save_password_text.scaleX = 1.731842936474108;
		login_save_password_dont_save_password_text.scaleY = 1.610576783957704;
		login_save_password_dont_save_password_text.text = "Don't Save\n Password";
		login_save_password_dont_save_password_text.fontSize = 20;

		// login_save_password_learn_more_text
		const login_save_password_learn_more_text = this.add.bitmapText(1095, 733, "BurbankSmallBold", "Learn More");
		login_save_password_learn_more_text.scaleX = 1.2076005281156443;
		login_save_password_learn_more_text.scaleY = 1.632911948932445;
		login_save_password_learn_more_text.text = "Learn More";
		login_save_password_learn_more_text.fontSize = 20;

		// login_save_password_exit_button_hover
		const login_save_password_exit_button_hover = this.add.image(1293, 192, "login", "login-screen/moreserversclose0002");
		login_save_password_exit_button_hover.scaleX = 1.1815823740163782;
		login_save_password_exit_button_hover.scaleY = 1.2071175311940898;
		login_save_password_exit_button_hover.visible = false;

        // Setting all interactives sprites starts here
        login_save_password_save_password_button.setInteractive({ useHandCursor: true });
        login_save_password_save_password_button_hover.setInteractive({ useHandCursor: true });
        login_save_password_dont_save_password_button.setInteractive({ useHandCursor: true });
        login_save_password_dont_save_password_button_hover.setInteractive({ useHandCursor: true });
        login_save_password_learn_more_button.setInteractive({ useHandCursor: true });
        login_save_password_learn_more_button_hover.setInteractive({ useHandCursor: true });
        login_save_password_exit_button.setInteractive({ useHandCursor: true });
        login_save_password_exit_button_hover.setInteractive({ useHandCursor: true });
        // Setting all interactives sprites ends here

        // All interactive events start here
        login_save_password_save_password_button.on("pointerover", () => {
            login_save_password_save_password_button.visible = false;
            login_save_password_save_password_button_hover.visible = true;
        });

        login_save_password_save_password_button_hover.on("pointerout", () => {
            login_save_password_save_password_button.visible = true;
            login_save_password_save_password_button_hover.visible = false;
        });

        login_save_password_save_password_button_hover.on("pointerdown", () => {
            enableRememberMeBoxes(this.sceneManager.get("LoginScene"));
            this.sceneManager.resume(SCENE_LOGIN);
            this.sceneManager.stop(SCENE_LOGIN_SHARED_PASSWORD);
        });

        login_save_password_dont_save_password_button.on("pointerover", () => {
            login_save_password_dont_save_password_button.visible = false;
            login_save_password_dont_save_password_button_hover.visible = true;
        });

        login_save_password_dont_save_password_button_hover.on("pointerout", () => {
            login_save_password_dont_save_password_button.visible = true;
            login_save_password_dont_save_password_button_hover.visible = false;
        });

        login_save_password_dont_save_password_button_hover.on("pointerdown", () => {
            this.sceneManager.resume(SCENE_LOGIN);
            this.sceneManager.stop(SCENE_LOGIN_SHARED_PASSWORD);
        });

        login_save_password_learn_more_button.on("pointerover", () => {
            login_save_password_learn_more_button.visible = false;
            login_save_password_learn_more_button_hover.visible = true;
        });

        login_save_password_learn_more_button_hover.on("pointerout", () => {
            login_save_password_learn_more_button.visible = true;
            login_save_password_learn_more_button_hover.visible = false;
        });

        login_save_password_learn_more_button_hover.on("pointerdown", () => {
            // learn more page redirect here + close scene
        });

        login_save_password_exit_button.on("pointerover", () => {
            login_save_password_exit_button.visible = false;
            login_save_password_exit_button_hover.visible = true;
        });

        login_save_password_exit_button_hover.on("pointerout", () => {
            login_save_password_exit_button.visible = true;
            login_save_password_exit_button_hover.visible = false;
        });

        login_save_password_exit_button_hover.on("pointerdown", () => {
            this.sceneManager.stop('LoginSavePasswordPromptScene');
            this.sceneManager.resume('LoginScene');
        });
        // All interactive events end here

        const totalWarningImages = Object.entries(getWarningImages()).length;
        let imageIndex = 0;
        let lastUsedImage = null;
        let lastUsedText = null;

        this.warningImageInterval = this.time.addEvent({
            delay: this.warningLoopInterval * 1000,
            callback: () => {
                if(lastUsedImage !== null) {
                    lastUsedImage.destroy();
                }

                if(lastUsedText !== null) {
                    lastUsedText.destroy();
                }

                const {image, text} = showWarningImage(this, imageIndex);
                lastUsedImage = image;
                lastUsedText = text;

                if(imageIndex === totalWarningImages - 1) {
                    imageIndex = 0;
                    return;
                }

                imageIndex = imageIndex + 1;
            },
            callbackScope: this,
            loop: true,
        });
        
        // Instantly start the loop
        this.warningImageInterval.callback(this.warningImageInterval.callbackScope);
        this.sceneManager.sendToTop(SCENE_LOGIN_SHARED_PASSWORD);

        this.events.once("shutdown", this.shutdown, this);
	}

    shutdown() {
        this.warningImageInterval.destroy();
    }
}
