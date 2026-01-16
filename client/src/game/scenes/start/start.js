// import { LoadingScene } from '../loading/loading.js'
import { BaseScene } from '../base/baseScene.js';
import { ASSET_TYPES } from '../../assets/assetTypes.js';
// import eventEmitter from '../../util/eventEmitter.js';
import { startLoadingScene } from '../loading/loadingHelper.js';

export class StartScene extends BaseScene {
	constructor() {
		super("StartScene");
	}

	init(data) {
		super.init(data);
		this.sceneManager = this.getSceneManager();
		this.assetManager = this.getAssetManager();
	}

	preload() {
		this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.IMAGE,
			name: "brb-billboardShadow",
			paths: ["assets/start/brb-billboardShadow.png"]
		});

		this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.PACK,
			name: "login",
			paths: ["assets/login/login-pack.json"]
		});

		this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.IMAGE,
			name: "main-background",
			paths: ["assets/start/brb-billboard.png"]
		});

		this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.PACK,
			name: "start",
			paths: ["assets/start/start-pack.json"]
		});

		this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.BITMAP_FONT,
			name: "BurbankSmallBold",
			paths: ["assets/fonts/BurbankSmallBold.png", "assets/fonts/BurbankSmallBold.xml"]
		});

		this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.BITMAP_FONT,
			name: "CCComicCrazyBoldItalicShadow",
			paths: ["assets/fonts/CCComicCrazyBoldItalicShadow.png", "assets/fonts/CCComicCrazyBoldItalicShadow.xml"]
		});
	}

	createContent() {
		// start_main_blue_background
		this.add.image(645, 376, "brb-billboardShadow");

		// start_home_screen_page
		const start_home_screen_page = this.add.image(647, 271, "main-background");
		start_home_screen_page.scaleX = 0.7103831664956932;
		start_home_screen_page.scaleY = 0.5532347846363925;


		// start_blue_border
		const start_blue_border = this.add.image(644, 412, "start", "start-screen/module");
		start_blue_border.scaleX = 0.7114916168810541;
		start_blue_border.scaleY = 0.7214354520934542;
		start_blue_border.setOrigin(0.5, 0);

		// start_create_penguin_underlay_not_hovered
		const start_create_penguin_underlay_not_hovered = this.add.image(194, 529, "start", "start-screen/createPenguinGraphic0001");
		start_create_penguin_underlay_not_hovered.scaleX = 0.7219764473955269;
		start_create_penguin_underlay_not_hovered.scaleY = 0.711026752669545;
		start_create_penguin_underlay_not_hovered.setOrigin(0, 0);

		// start_create_penguin_underlay_hovered
		const start_create_penguin_underlay_hovered = this.add.image(194, 529, "start", "start-screen/createPenguinGraphic0002");
		start_create_penguin_underlay_hovered.scaleX = 0.7219764473955269;
		start_create_penguin_underlay_hovered.scaleY = 0.711026752669545;
		start_create_penguin_underlay_hovered.setOrigin(0, 0);
		start_create_penguin_underlay_hovered.visible = false;

		// start_login_button
		const start_login_button = this.add.image(725, 579, "login", "login-screen/button");
		start_login_button.scaleX = 0.7828134930151831;
		start_login_button.scaleY = 0.76522699025202;
		start_login_button.setOrigin(0, 0);

		// start_login_button_hover
		const start_login_button_hover = this.add.image(725, 579, "login", "login-screen/buttonHover");
		start_login_button_hover.scaleX = 0.7828134930151831;
		start_login_button_hover.scaleY = 0.76522699025202;
		start_login_button_hover.setOrigin(0, 0);
		start_login_button_hover.visible = false;

		// start_login_button_clicked
		const start_login_button_clicked = this.add.image(723, 577, "login", "login-screen/publicpromptbutton0002");
		start_login_button_clicked.scaleX = 1.071550239307725;
		start_login_button_clicked.scaleY = 0.8928326840383549;
		start_login_button_clicked.setOrigin(0, 0);
		start_login_button_clicked.visible = false;

		// start_login_button_text
		const start_login_button_text = this.add.bitmapText(820, 601, "CCComicCrazyBoldItalicShadow", "Login");
		start_login_button_text.scaleX = 0.465155007065247;
		start_login_button_text.scaleY = 0.4598527246831939;
		start_login_button_text.text = "Login";
		start_login_button_text.fontSize = 65;
		start_login_button_text.letterSpacing = 3;

		// start_login_button_yellow_penguin
		const start_login_button_yellow_penguin = this.add.image(970, 529, "start", "start-screen/loginGraphic0001");
		start_login_button_yellow_penguin.scaleX = 0.7219764473955269;
		start_login_button_yellow_penguin.scaleY = 0.7099239295509305;
		start_login_button_yellow_penguin.setOrigin(0, 0);

		// start_login_button_yellow_penguin_hover
		const start_login_button_yellow_penguin_hover = this.add.image(970, 529, "start", "start-screen/loginGraphic0002");
		start_login_button_yellow_penguin_hover.scaleX = 0.7219764473955269;
		start_login_button_yellow_penguin_hover.scaleY = 0.7099239295509305;
		start_login_button_yellow_penguin_hover.setOrigin(0, 0);
		start_login_button_yellow_penguin_hover.visible = false;

		// start_register_button
		const start_register_button = this.add.image(327, 579, "login", "login-screen/button");
		start_register_button.scaleX = 0.7828134930151831;
		start_register_button.scaleY = 0.76522699025202;
		start_register_button.setOrigin(0, 0);

		// start_register_button_hover
		const start_register_button_hover = this.add.image(327, 579, "login", "login-screen/buttonHover");
		start_register_button_hover.scaleX = 0.7828134930151831;
		start_register_button_hover.scaleY = 0.76522699025202;
		start_register_button_hover.setOrigin(0, 0);
		start_register_button_hover.visible = false;

		// start_register_button_clicked
		const start_register_button_clicked = this.add.image(325, 577, "login", "login-screen/publicpromptbutton0002");
		start_register_button_clicked.scaleX = 1.071550239307725;
		start_register_button_clicked.scaleY = 0.8928326840383549;
		start_register_button_clicked.setOrigin(0, 0);
		start_register_button_clicked.visible = false;

		// start_create_penguin_button_text
		const start_create_penguin_button_text = this.add.bitmapText(353, 605, "CCComicCrazyBoldItalicShadow", "Create a Penguin");
		start_create_penguin_button_text.scaleX = 0.3449112490584968;
		start_create_penguin_button_text.scaleY = 0.4143235996320015;
		start_create_penguin_button_text.text = "Create a Penguin";
		start_create_penguin_button_text.fontSize = 60;

		// start_club_penguin_logo
		const start_club_penguin_logo = this.add.image(646, 433, "start", "start-screen/logo");
		start_club_penguin_logo.scaleX = 0.7161329585970753;
		start_club_penguin_logo.scaleY = 0.6865697420511727;
		start_club_penguin_logo.setOrigin(0.5, 0);

        // Setting all interactives sprites starts here
        start_register_button.setInteractive({ useHandCursor: true });
        start_register_button_hover.setInteractive({ useHandCursor: true });
		start_register_button_clicked.setInteractive({ useHandCursor: true });
        start_login_button.setInteractive({ useHandCursor: true });
        start_login_button_hover.setInteractive({ useHandCursor: true });
		start_login_button_clicked.setInteractive({ useHandCursor: true });
		// Setting all interactives sprites ends here

		// All interactive events start here
		// Create a penguin button events start here
		start_register_button.on("pointerover", () => {
			start_register_button.visible = false;
			start_register_button_hover.visible = true;
			start_create_penguin_underlay_not_hovered.visible = false;
			start_create_penguin_underlay_hovered.visible = true;
		});

		start_register_button_hover.on("pointerout", () => {
			start_register_button.visible = true;
			start_register_button_hover.visible = false;
			start_create_penguin_underlay_not_hovered.visible = true;
			start_create_penguin_underlay_hovered.visible = false;
		});

		start_register_button_hover.on("pointerdown", () => {
			start_register_button_hover.visible = false;
			start_register_button_clicked.visible = true;
		});

		// Create a penguin button events end here

		// Login button events start here
		start_login_button.on("pointerover", () => {
			start_login_button.visible = false;
			start_login_button_hover.visible = true;
			start_login_button_yellow_penguin.visible = false;
			start_login_button_yellow_penguin_hover.visible = true;
		});

		start_login_button_hover.on("pointerout", () => {
			start_login_button.visible = true;
			start_login_button_hover.visible = false;
			start_login_button_yellow_penguin.visible = true;
			start_login_button_yellow_penguin_hover.visible = false;
		});

		start_login_button_hover.on("pointerdown", () => {
			start_login_button_hover.visible = false;
			start_login_button_clicked.visible = true;
		});

		start_login_button_hover.on("pointerout", () => {
			start_login_button.visible = true;
			start_login_button_clicked.visible = false;
		});
		// Login button events end here
		// All interactive events end here

		// events
		start_register_button.on("pointerover", () => {
			start_register_button.visible = false;
			start_register_button_hover.visible = true;
			start_create_penguin_underlay_not_hovered.visible = false;
		    start_create_penguin_underlay_hovered.visible = true;
		});

		start_register_button_hover.on("pointerout", () => {
			start_register_button.visible = true;
			start_register_button_hover.visible = false;
			start_create_penguin_underlay_not_hovered.visible = true;
		    start_create_penguin_underlay_hovered.visible = false;
		});

		start_login_button.on("pointerover", () => {
		    start_login_button.visible = false;
		    start_login_button_hover.visible = true;
		});

		start_login_button_hover.on("pointerout", () => {
		    start_login_button.visible = true;
		    start_login_button_hover.visible = false;
		});

		start_login_button_hover.on("pointerdown", () => {
			start_login_button_hover.visible = false;
			start_login_button_clicked.visible = true;
			startLoadingScene("StartScene", "LoginScene", "Loading Login");
		});

		start_register_button_hover.on("pointerdown", () => {
			start_register_button_hover.visible = false;
			start_register_button_clicked.visible = true;
			startLoadingScene("RegisterScene", "Loading Register");
		});

		this.events.emit("scene-awake");
		this.events.emit("sceneReady");
	}
}