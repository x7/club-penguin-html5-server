import Phaser from 'phaser';
import * as LoginHelper from './loginHelper.js'
import { getSceneManager } from '../../main.js';
import { SharedDevicePrompt } from './sharedDevicePrompt.js';

// TODO: Fix menu close button not disappearing after exiting
// TODO: Make cleaner and nicer visuals
// TODO: Make the "warning images" loop every 5 seconds and update the text
// TODO: Make input boxes disappear after opening a popup

export class LoginScene extends Phaser.Scene {
	constructor() {
		super("LoginScene");
		this.getSceneManager = getSceneManager();
		this.username = null;
		this.password = null;
		this.rememberMeComputer = false;
		this.rememberMyPassword = false;
	}

	preload() {
		this.load.pack("login-pack", "public/phaser/login/login-pack.json");
		this.load.bitmapFont("ArialNarrow", "public/phaser/fonts/ArialNarrow.png", "public/phaser/fonts/ArialNarrow.xml")
	}

	async create() {
		// login_forgot_password_hover
		const login_forgot_password_hover = this.add.image(470, 445, "login_1", "login-screen/background");
		login_forgot_password_hover.scaleX = 0.17738575664140924;
		login_forgot_password_hover.scaleY = 0.04113613489932113;
		login_forgot_password_hover.setOrigin(0, 0);

		// login_create_penguin_hover
		const login_create_penguin_hover = this.add.image(419, 518, "login_1", "login-screen/background");
		login_create_penguin_hover.scaleX = 0.23561130373350495;
		login_create_penguin_hover.scaleY = 0.07885322743807904;
		login_create_penguin_hover.setOrigin(0, 0);

		// login_back_button_hover
		const login_back_button_hover = this.add.image(485, 627, "login_1", "login-screen/background");
		login_back_button_hover.scaleX = 0.16036775873844764;
		login_back_button_hover.scaleY = 0.04534935108295973;
		login_back_button_hover.setOrigin(0, 0);

		// login_screen_background
		const login_screen_background = this.add.image(-118, -59, "login_1", "login-screen/background");
		login_screen_background.scaleX = 0.8929518243047326;
		login_screen_background.scaleY = 0.7920449541509529;
		login_screen_background.setOrigin(0, 0);

		// login_back_button_hover_display
		const login_back_button_hover_display = this.add.image(485, 627, "login_1", "login-screen/rules0002");
		login_back_button_hover_display.scaleX = 0.39042922994539053;
		login_back_button_hover_display.scaleY = 0.42829536537721885;
		login_back_button_hover_display.setOrigin(0, 0);
		login_back_button_hover_display.visible = false;

		// login_keep_password_safe_note
		const login_keep_password_safe_note = this.add.image(975, 467, "login_1", "login-screen/secret0001");
		login_keep_password_safe_note.scaleX = 0.7350136112818051;
		login_keep_password_safe_note.scaleY = 0.783837155552982;
		login_keep_password_safe_note.setOrigin(0.492188, 0.490588);

		// login_create_penguin_hover_display
		const login_create_penguin_hover_display = this.add.image(419, 518, "login_1", "login-screen/account0003");
		login_create_penguin_hover_display.scaleX = 0.3974249394820731;
		login_create_penguin_hover_display.scaleY = 0.4804830558182249;
		login_create_penguin_hover_display.setOrigin(0, 0);
		login_create_penguin_hover_display.visible = false;

		// login_forgot_password_hover_display
		const login_forgot_password_hover_display = this.add.image(451, 441, "login_1", "login-screen/rules0002");
		login_forgot_password_hover_display.scaleX = 0.46435806426292336;
		login_forgot_password_hover_display.scaleY = 0.5114869893554509;
		login_forgot_password_hover_display.setOrigin(0, 0);
		login_forgot_password_hover_display.visible = false;

		// login_login_button
		const login_login_button = this.add.image(478, 349, "login_1", "login-screen/button");
		login_login_button.scaleX = 0.7355284492801976;
		login_login_button.scaleY = 0.6981858137293024;
		login_login_button.setOrigin(0, 0);

		// login_login_button_hover
		const login_login_button_hover = this.add.image(478, 349, "login_1", "login-screen/learnButtonHover");
		login_login_button_hover.scaleX = 1.224837163626711;
		login_login_button_hover.scaleY = 1.202658483393554;
		login_login_button_hover.setOrigin(0, 0);
		login_login_button_hover.visible = false;

		// login_remember_password_checkbox
		const login_remember_password_checkbox = this.add.image(429, 285, "login_1", "login-screen/checkbox");
		login_remember_password_checkbox.scaleX = 0.8;
		login_remember_password_checkbox.scaleY = 0.8;
		login_remember_password_checkbox.setOrigin(0, 0);

		// login_remember_me_computer_checkbox
		const login_remember_me_computer_checkbox = this.add.image(429, 232, "login_1", "login-screen/checkbox");
		login_remember_me_computer_checkbox.scaleX = 0.8;
		login_remember_me_computer_checkbox.scaleY = 0.8;
		login_remember_me_computer_checkbox.setOrigin(0, 0);

		// login_remember_me_computer_checkbox_ticked
		const login_remember_me_computer_checkbox_ticked = this.add.image(429, 232, "login_1", "login-screen/checkboxChecked");
		login_remember_me_computer_checkbox_ticked.scaleX = 0.8;
		login_remember_me_computer_checkbox_ticked.scaleY = 0.8;
		login_remember_me_computer_checkbox_ticked.setOrigin(0, 0);
		login_remember_me_computer_checkbox_ticked.visible = false;

		// login_remember_password_checkbox_ticked
		const login_remember_password_checkbox_ticked = this.add.image(429, 285, "login_1", "login-screen/checkboxChecked");
		login_remember_password_checkbox_ticked.scaleX = 0.8;
		login_remember_password_checkbox_ticked.scaleY = 0.8;
		login_remember_password_checkbox_ticked.setOrigin(0, 0);
		login_remember_password_checkbox_ticked.visible = false;

		// login_penguin_name_text
		const login_penguin_name_text = this.add.bitmapText(352, 133, "ArialNarrow", "Penguin Name:");
		login_penguin_name_text.tintFill = true;
		login_penguin_name_text.tintTopLeft = 0;
		login_penguin_name_text.tintTopRight = 0;
		login_penguin_name_text.tintBottomLeft = 65536;
		login_penguin_name_text.tintBottomRight = 0;
		login_penguin_name_text.text = "Penguin Name:";
		login_penguin_name_text.fontSize = 28;

		// login_password_text
		const login_password_text = this.add.bitmapText(399, 177, "ArialNarrow", "Password:");
		login_password_text.tintFill = true;
		login_password_text.tintTopLeft = 0;
		login_password_text.tintTopRight = 0;
		login_password_text.tintBottomLeft = 65536;
		login_password_text.tintBottomRight = 0;
		login_password_text.text = "Password:";
		login_password_text.fontSize = 28;

		// login_remember_me_computer_text
		const login_remember_me_computer_text = this.add.bitmapText(478, 247, "ArialNarrow", "Remember me on this computer");
		login_remember_me_computer_text.tintFill = true;
		login_remember_me_computer_text.tintTopLeft = 0;
		login_remember_me_computer_text.tintTopRight = 0;
		login_remember_me_computer_text.tintBottomLeft = 65536;
		login_remember_me_computer_text.tintBottomRight = 0;
		login_remember_me_computer_text.text = "Remember me on this computer";
		login_remember_me_computer_text.fontSize = 24;

		// login_remember_my_password_text
		const login_remember_my_password_text = this.add.bitmapText(478, 299, "ArialNarrow", "Remember my password");
		login_remember_my_password_text.tintFill = true;
		login_remember_my_password_text.tintTopLeft = 0;
		login_remember_my_password_text.tintTopRight = 0;
		login_remember_my_password_text.tintBottomLeft = 65536;
		login_remember_my_password_text.tintBottomRight = 0;
		login_remember_my_password_text.text = "Remember my password";
		login_remember_my_password_text.fontSize = 24;

		// login_forgot_your_password_text
		const login_forgot_your_password_text = this.add.bitmapText(509, 449, "ArialNarrow", "Forgot your password?");
		login_forgot_your_password_text.tintFill = true;
		login_forgot_your_password_text.tintTopLeft = 16777215;
		login_forgot_your_password_text.tintTopRight = 16777215;
		login_forgot_your_password_text.tintBottomLeft = 16777215;
		login_forgot_your_password_text.tintBottomRight = 16777215;
		login_forgot_your_password_text.text = "Forgot your password?";
		login_forgot_your_password_text.fontSize = 24;

		// login_dont_have_a_penguin_text
		const login_dont_have_a_penguin_text = this.add.bitmapText(513, 528, "ArialNarrow", "Don't have a penguin?");
		login_dont_have_a_penguin_text.scaleX = 1.0225142005547325;
		login_dont_have_a_penguin_text.tintTopLeft = 0;
		login_dont_have_a_penguin_text.tintTopRight = 0;
		login_dont_have_a_penguin_text.tintBottomLeft = 0;
		login_dont_have_a_penguin_text.tintBottomRight = 0;
		login_dont_have_a_penguin_text.text = "Don't have a penguin?";
		login_dont_have_a_penguin_text.fontSize = 23;

		// login_create_free_account_text
		const login_create_free_account_text = this.add.bitmapText(487, 557, "ArialNarrow", "Create a free account now");
		login_create_free_account_text.scaleX = 1.1277772898018497;
		login_create_free_account_text.scaleY = 0.9710239041489755;
		login_create_free_account_text.text = "Create a free account now";
		login_create_free_account_text.fontSize = 23;

		// login_back_text
		const login_back_text = this.add.bitmapText(581, 637, "ArialNarrow", "Back");
		login_back_text.scaleX = 1.1277772898018497;
		login_back_text.scaleY = 0.9710239041489755;
		login_back_text.text = "Back";
		login_back_text.fontSize = 23;

		// login_login_text
		const login_login_text = this.add.bitmapText(579, 372, "ArialNarrow", "Login");
		login_login_text.tintFill = true;
		login_login_text.tintTopLeft = 16777215;
		login_login_text.tintTopRight = 16777215;
		login_login_text.tintBottomLeft = 16777215;
		login_login_text.tintBottomRight = 16777215;
		login_login_text.text = "Login";
		login_login_text.fontSize = 33;
		
		// input elements
		const inputStyle = `
			width: 300px;
			height: 42px;
			padding: 0 5px;
			font-size: 22px;
			border-radius: 0px;
			border: 2px solid rgba(0,0,0,0.45);
			font-family: 'Helvetica Neue', Roboto, Arial, sans-serif;
			background: #ffffff;
			color: #000000;
			outline: none;
			box-shadow: none;
        `;

		this.penguinInput = this.add.dom(360 + 610/2, 150, 'input', inputStyle);
		this.penguinInput.id = 'loginPenguinUsernameInput'
		this.penguinInput.node.type = 'text';
		this.penguinInput.node.autocomplete = 'off';
		this.penguinInput.node.spellcheck = 'false';

		this.passwordInput = this.add.dom(360 + 610/2, 200, 'input', inputStyle);
		this.passwordInput.id = 'loginPasswordInput'
		this.passwordInput.node.type = 'password';
		this.passwordInput.node.autocomplete = 'off';
		this.passwordInput.node.style.webkitTextSecurity = 'disc';
		this.passwordInput.node.style.setProperty('-webkit-textfield-decoration-container', 'none');
		this.passwordInput.node.style.setProperty('::-ms-reveal', 'display:none');
		this.passwordInput.node.style.setProperty('::-ms-clear', 'display:none');

		// interactables
		login_forgot_password_hover.setInteractive({ useHandCursor: true });
		login_create_penguin_hover.setInteractive({ useHandCursor: true });
		login_back_button_hover.setInteractive({ useHandCursor: true });
		login_back_button_hover_display.setInteractive({ useHandCursor: true });
		login_create_penguin_hover_display.setInteractive({ useHandCursor: true });
		login_forgot_password_hover_display.setInteractive({ useHandCursor: true });
		login_login_button.setInteractive({ useHandCursor: true });
		login_login_button_hover.setInteractive({ useHandCursor: true });
		login_remember_password_checkbox.setInteractive({ useHandCursor: true });
		login_remember_me_computer_checkbox.setInteractive({ useHandCursor: true });
		login_remember_me_computer_checkbox_ticked.setInteractive({ useHandCursor: true });
		login_remember_password_checkbox_ticked.setInteractive({ useHandCursor: true });

		// events
		login_forgot_password_hover.on("pointerover", () => {
			login_forgot_password_hover.visible = false;
			login_forgot_password_hover_display.visible = true;
		});

		login_forgot_password_hover_display.on("pointerout", () => {
			login_forgot_password_hover.visible = true;
			login_forgot_password_hover_display.visible = false;
		});

		login_create_penguin_hover.on("pointerover", () => {
			login_create_penguin_hover.visible = false;
			login_create_penguin_hover_display.visible = true;
		});

		login_create_penguin_hover_display.on("pointerout", () => {
			login_create_penguin_hover.visible = true;
			login_create_penguin_hover_display.visible = false;
		});

		login_create_penguin_hover_display.on("pointerdown", () => {
			this.getSceneManager.start('LoadingScene', { 'nextScene': 'RegisterScene', 'currentScene': 'LoginScene' });
			return;
		});

		login_back_button_hover.on("pointerover", () => {
			login_back_button_hover.visible = false;
			login_back_button_hover_display.visible = true;
		});

		login_back_button_hover_display.on("pointerout", () => {
			login_back_button_hover.visible = true;
			login_back_button_hover_display.visible = false;
		});

		login_login_button.on("pointerover", () => {
			login_login_button.visible = false;
			login_login_button_hover.visible = true;
		});

		login_login_button_hover.on("pointerout", () => {
			login_login_button.visible = true;
			login_login_button_hover.visible = false;
		});

		login_remember_me_computer_checkbox.on("pointerdown", () => {
			login_remember_me_computer_checkbox.visible = false;
			login_remember_me_computer_checkbox_ticked.visible = true;
		});

		login_remember_me_computer_checkbox_ticked.on("pointerdown", () => {
			login_remember_me_computer_checkbox.visible = true;
			login_remember_me_computer_checkbox_ticked.visible = false;
		});

		login_remember_password_checkbox.on("pointerdown", () => {
			// Start "other scene"
			this.getSceneManager.add({
				sceneKey: 'LoginSharedDevicePromptScene',
				scene: null,
				autoStart: false
			});

			this.game.domContainer.style.display = 'none';
			this.getSceneManager.pause('LoginScene');
			this.getSceneManager.launch('LoginSharedDevicePromptScene');
		});

		login_remember_password_checkbox_ticked.on("pointerdown", () => {
			login_remember_password_checkbox.visible = true;
			login_remember_password_checkbox_ticked.visible = false;
		});

		login_login_button_hover.on("pointerdown", () => {
			// login
		});

		this.events.emit("scene-awake");
		this.events.on('resume', this.resume, this);
		this.events.once('shutdown', this.shutdown, this);
	}

	resume() {
		this.game.domContainer.style.display = 'block';
	}

	shutdown() {
		this.penguinInput.destroy();
		this.passwordInput.destroy();
	}
}