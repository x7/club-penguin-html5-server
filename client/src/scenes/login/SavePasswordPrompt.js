import Phaser from 'phaser';
import { getSceneManager } from '../../main.js';
import { getRandomWarning } from './SavePasswordPromptHelper.js';

export class LoginSavePasswordPrompt extends Phaser.Scene {

	constructor() {
		super("LoginSavePasswordPromptScene");
        this.sceneManager = getSceneManager();
        this.warningLoopInterval = 3000;
	}

	create() {
		// login_save_password_background_gui
		const login_save_password_background_gui = this.add.image(209, 86, "login_1", "login-screen/warn");
		login_save_password_background_gui.scaleX = 0.718656484232741;
		login_save_password_background_gui.scaleY = 0.6458724011667826;
		login_save_password_background_gui.setOrigin(0, 0);

		// login_save_password_exit_button
		const login_save_password_exit_button = this.add.image(1001, 101, "login_1", "login-screen/closeButton");
		login_save_password_exit_button.scaleX = 0.6465140210955824;
		login_save_password_exit_button.scaleY = 0.67916261000179;
		login_save_password_exit_button.setOrigin(0, 0);

		// login_save_password_warning_text
		const login_save_password_warning_text = this.add.bitmapText(287, 129, "BurbankSmallBold", "If you save your password here, anyone who uses this\ncomputer could access your account.");
		login_save_password_warning_text.text = "If you save your password here, anyone who uses this\ncomputer could access your account.";
		login_save_password_warning_text.fontSize = 26;

		// login_save_password_save_password_button
		const login_save_password_save_password_button = this.add.image(287, 532, "login_1", "login-screen/publicpromptbutton0001");
		login_save_password_save_password_button.scaleX = 0.7548025348131256;
		login_save_password_save_password_button.scaleY = 0.7441638975677048;
		login_save_password_save_password_button.setOrigin(0, 0);

		// login_save_password_dont_save_password_button
		const login_save_password_dont_save_password_button = this.add.image(547, 532, "login_1", "login-screen/publicpromptbutton0001");
		login_save_password_dont_save_password_button.scaleX = 0.7548025348131256;
		login_save_password_dont_save_password_button.scaleY = 0.7441638975677048;
		login_save_password_dont_save_password_button.setOrigin(0, 0);

		// login_save_password_learn_more_button
		const login_save_password_learn_more_button = this.add.image(846, 550, "login_1", "login-screen/publicpromptbutton0001");
		login_save_password_learn_more_button.scaleX = 0.5430784050813093;
		login_save_password_learn_more_button.scaleY = 0.45608937830351015;
		login_save_password_learn_more_button.setOrigin(0, 0);

		// login_save_password_save_password_button_hover
		const login_save_password_save_password_button_hover = this.add.image(288, 535, "login_1", "login-screen/learnButtonHover");
		login_save_password_save_password_button_hover.scaleX = 0.912589370217293;
		login_save_password_save_password_button_hover.scaleY = 1.1040157390874816;
		login_save_password_save_password_button_hover.setOrigin(0, 0);
		login_save_password_save_password_button_hover.visible = false;

		// login_save_password_dont_save_password_button_hover
		const login_save_password_dont_save_password_button_hover = this.add.image(549, 535, "login_1", "login-screen/learnButtonHover");
		login_save_password_dont_save_password_button_hover.scaleX = 0.912589370217293;
		login_save_password_dont_save_password_button_hover.scaleY = 1.1040157390874816;
		login_save_password_dont_save_password_button_hover.setOrigin(0, 0);
		login_save_password_dont_save_password_button_hover.visible = false;

		// login_save_password_learn_more_button_hover
		const login_save_password_learn_more_button_hover = this.add.image(847, 549, "login_1", "login-screen/learnButtonHover");
		login_save_password_learn_more_button_hover.scaleX = 0.653920704600741;
		login_save_password_learn_more_button_hover.scaleY = 0.7128298286441427;
		login_save_password_learn_more_button_hover.setOrigin(0, 0);
		login_save_password_learn_more_button_hover.visible = false;

		// login_save_password_save_password_text
		const login_save_password_save_password_text = this.add.bitmapText(311, 554, "BurbankSmallBold", "Save Password");
		login_save_password_save_password_text.scaleX = 1.061399344991334;
		login_save_password_save_password_text.scaleY = 1.4007474018721586;
		login_save_password_save_password_text.text = "Save Password";
		login_save_password_save_password_text.fontSize = 20;

		// login_save_password_dont_save_password_text
		const login_save_password_dont_save_password_text = this.add.bitmapText(598, 543, "BurbankSmallBold", "Don't Save\n Password");
		login_save_password_dont_save_password_text.scaleX = 1.051657796085224;
		login_save_password_dont_save_password_text.scaleY = 1.1689209937574048;
		login_save_password_dont_save_password_text.text = "Don't Save\n Password";
		login_save_password_dont_save_password_text.fontSize = 20;

		// login_save_password_learn_more_text
		const login_save_password_learn_more_text = this.add.bitmapText(866, 561, "BurbankSmallBold", "Learn More");
		login_save_password_learn_more_text.scaleX = 0.970795252463095;
		login_save_password_learn_more_text.scaleY = 1.0905565357352704;
		login_save_password_learn_more_text.text = "Learn More";
		login_save_password_learn_more_text.fontSize = 20;

		// login_save_password_exit_button_hover
		const login_save_password_exit_button_hover = this.add.image(1026, 127, "login_1", "login-screen/moreserversclose0002");
		login_save_password_exit_button_hover.scaleX = 0.7939596363645354;
		login_save_password_exit_button_hover.scaleY = 0.817451681584833;
		login_save_password_exit_button_hover.visible = false;

        // interactive
        login_save_password_save_password_button.setInteractive({ useHandCursor: true });
        login_save_password_save_password_button_hover.setInteractive({ useHandCursor: true });
        login_save_password_dont_save_password_button.setInteractive({ useHandCursor: true });
        login_save_password_dont_save_password_button_hover.setInteractive({ useHandCursor: true });
        login_save_password_learn_more_button.setInteractive({ useHandCursor: true });
        login_save_password_learn_more_button_hover.setInteractive({ useHandCursor: true });
        login_save_password_exit_button.setInteractive({ useHandCursor: true });
        login_save_password_exit_button_hover.setInteractive({ useHandCursor: true });

        // events
        login_save_password_save_password_button.on("pointerover", () => {
            login_save_password_save_password_button.visible = false;
            login_save_password_save_password_button_hover.visible = true;
        });

        login_save_password_save_password_button_hover.on("pointerout", () => {
            login_save_password_save_password_button.visible = true;
            login_save_password_save_password_button_hover.visible = false;
        });

        login_save_password_save_password_button_hover.on("pointerdown", () => {
            // save password logic
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
            // dont save password logic
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
            this.sceneManager.stop('LoginSavePasswordPrompt');
            this.sceneManager.resume('LoginScene');
        });

        let randomWarning = getRandomWarning();
        let randomWarningImage = this.add.image(randomWarning.image.x, randomWarning.image.y, randomWarning.image.image_parent, randomWarning.image.image_name);
        randomWarningImage.scaleX = randomWarning.image.scaleX;
        randomWarningImage.scaleY = randomWarning.image.scaleY;
        randomWarningImage.setDepth(-1);

        let randomWarningText = this.add.bitmapText(randomWarning.text.x, randomWarning.text.y, randomWarning.text.font, randomWarning.text.text);
        randomWarningText.scaleX = randomWarning.text.scaleX;
        randomWarningText.scaleY = randomWarning.text.scaleY;
        randomWarningText.text = randomWarning.text.text;
        randomWarningText.fontSize = randomWarning.text.fontSize;
        randomWarningText.setTint(randomWarning.text.color);

        this.warningInterval = setInterval(() => {
            randomWarningImage.destroy();
            randomWarningText.destroy();
            randomWarning = getRandomWarning();
            
            // Image
            randomWarningImage = this.add.image(randomWarning.image.x, randomWarning.image.y, randomWarning.image.image_parent, randomWarning.image.image_name);
            randomWarningImage.scaleX = randomWarning.image.scaleX;
            randomWarningImage.scaleY = randomWarning.image.scaleY;
            randomWarningImage.setDepth(-1);

            // Text
            randomWarningText = this.add.bitmapText(randomWarning.text.x, randomWarning.text.y, randomWarning.text.font, randomWarning.text.text);
            randomWarningText.scaleX = randomWarning.text.scaleX;
            randomWarningText.scaleY = randomWarning.text.scaleY;
            randomWarningText.text = randomWarning.text.text;
            randomWarningText.fontSize = randomWarning.text.fontSize;
            randomWarningText.setTint(randomWarning.text.color);
        }, this.warningLoopInterval);

		this.events.emit("scene-awake");
        this.events.once("shutdown", this.shutdown, this);
	}

    shutdown() {
        clearInterval(this.warningInterval);
        this.warningInterval = null;
    }
}
