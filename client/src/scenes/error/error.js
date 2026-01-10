import Phaser from "phaser";

export class ErrorScene extends Phaser.Scene {

	constructor() {
		super("ErrorScene");
	}

	preload() {
		this.load.pack("app-pack", "public/phaser/error/app-pack.json");
		this.load.bitmapFont("ArialNarrow", "public/phaser/fonts/ArialNarrow.png", "public/phaser/fonts/ArialNarrow.xml");
	}

    init(data) {
        this.errorMessage = (data.message == null ? "    Incorrect username or password.\nNOTE: Passwords are CaSe Sensitive" : data.message);
    }

	create() {
		// error_gui
		const error_gui = this.add.image(385, 218, "app_1", "app/error");
		error_gui.scaleX = 0.6973949856334567;
		error_gui.scaleY = 0.8485991286121775;
		error_gui.setOrigin(0, 0);

		// error_okay_button
		const error_okay_button = this.add.image(549, 399, "app_1", "app/button");
		error_okay_button.scaleX = 0.6615413590165267;
		error_okay_button.scaleY = 0.6954831986522744;
		error_okay_button.setOrigin(0, 0);

		// error_okay_button_hover
		const error_okay_button_hover = this.add.image(549, 399, "app_1", "app/buttonHover");
		error_okay_button_hover.scaleX = 0.6615413590165267;
		error_okay_button_hover.scaleY = 0.6954831986522744;
		error_okay_button_hover.setOrigin(0, 0);
		error_okay_button_hover.visible = false;

		// error_okay_button_clicked
		const error_okay_button_clicked = this.add.image(549, 401, "app_1", "app/buttonDown");
		error_okay_button_clicked.scaleX = 0.6615413590165267;
		error_okay_button_clicked.scaleY = 0.6954831986522744;
		error_okay_button_clicked.setOrigin(0, 0);
		error_okay_button_clicked.visible = false;

		// error_okay_button_text
		const error_okay_button_text = this.add.bitmapText(635, 420, "ArialNarrow", "Okay");
		error_okay_button_text.scaleX = 1.0957633309862733;
		error_okay_button_text.scaleY = 1.0564417388819753;
		error_okay_button_text.text = "Okay";
		error_okay_button_text.fontSize = 32;

		// create button text
		const buttonText = this.add.bitmapText(0, 0, "ArialNarrow", this.errorMessage);
		buttonText.fontSize = 30;
		buttonText.setOrigin(0.5, 0.5);
		buttonText.setPosition(error_gui.x + error_gui.displayWidth / 2, error_gui.y + error_gui.displayHeight / 2 - 55);
		buttonText.setTint("000000");


		// interactives
		error_okay_button.setInteractive({ useHandCursor: true });
		error_okay_button_hover.setInteractive({ useHandCursor: true });
		error_okay_button_clicked.setInteractive({ useHandCursor: true });

		error_okay_button.on("pointerover", () => {
			error_okay_button.visible = false;
			error_okay_button_hover.visible = true;
		});

		error_okay_button_hover.on("pointerout", () => {
			error_okay_button.visible = true;
			error_okay_button_hover.visible = false;
		});

		error_okay_button_hover.on("pointerdown", () => {
			error_okay_button_hover.visible = false;
			error_okay_button_clicked.visible = true;

			// close scene
		});

		this.events.emit("scene-awake");
	}
}