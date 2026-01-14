import Phaser from 'phaser';

// TODO: Add more servers scene
// TODO: Add redemption

export class ServerSelectionScene extends Phaser.Scene {
	constructor() {
		super("ServerSelectionScene");
	}

	preload() {
	    this.load.pack("login-pack", "public/phaser/login/login-pack.json");
		this.load.bitmapFont("CCComicCrazyBoldItalicShadow", "public/phaser/fonts/CCComicCrazyBoldItalicShadow.png", "public/phaser/fonts/CCComicCrazyBoldItalicShadow.xml");
	}

	create() {
		// server_selection_background
		const server_selection_background = this.add.image(-11, -18, "login_1", "login-screen/background");
		server_selection_background.scaleX = 0.7585468997218747;
		server_selection_background.scaleY = 0.7048577006218386;
		server_selection_background.setOrigin(0, 0);

		// server_selection_unlock_items_button
		const server_selection_unlock_items_button = this.add.image(1104, 13, "login_1", "login-screen/items0001");
		server_selection_unlock_items_button.scaleX = 0.674904561750434;
		server_selection_unlock_items_button.scaleY = 0.6733426260234598;
		server_selection_unlock_items_button.setOrigin(0, 0);

		// server_selection_more_servers_button
		const server_selection_more_servers_button = this.add.image(980, 445, "login_1", "login-screen/more0001");
		server_selection_more_servers_button.scaleX = 0.7202304140282709;
		server_selection_more_servers_button.scaleY = 0.7910271882893434;
		server_selection_more_servers_button.setOrigin(0.0379109, 0.243031);

		// server_selection_chat_bubble
		const server_selection_chat_bubble = this.add.image(849, 682, "login_1", "login-screen/chat");
		server_selection_chat_bubble.scaleX = 0.8840483584521954;
		server_selection_chat_bubble.scaleY = 0.7750811606823352;
		server_selection_chat_bubble.setOrigin(0, 0);

		// ultimate_safe_chat
		const ultimate_safe_chat = this.add.text(889, 682, "", {});
		ultimate_safe_chat.scaleX = 1.4235709218767911;
		ultimate_safe_chat.scaleY = 1.8944303282961694;
		ultimate_safe_chat.text = "Ultimate safe chat";
		ultimate_safe_chat.setStyle({ "fontFamily": "Helvetica Neue, Arial, sans-serif", "fontSize": "12px", "resolution": 4 });

		// login_screen_population
		const login_screen_population = this.add.image(446, 682, "login_1", "login-screen/population");
		login_screen_population.scaleX = 0.8840483584521954;
		login_screen_population.scaleY = 0.7750811606823352;
		login_screen_population.setOrigin(0, 0);

		// among_of_penguins_online
		const among_of_penguins_online = this.add.text(473, 682, "", {});
		among_of_penguins_online.scaleX = 1.4235709218767911;
		among_of_penguins_online.scaleY = 1.8944303282961694;
		among_of_penguins_online.text = "Amount of penguins online";
		among_of_penguins_online.setStyle({ "fontFamily": "Helvetica Neue, Arial, sans-serif", "fontSize": "12px", "resolution": 4 });

		// login_screen_buddies
		const login_screen_buddies = this.add.image(165, 682, "login_1", "login-screen/buddies");
		login_screen_buddies.scaleX = 0.8840483584521954;
		login_screen_buddies.scaleY = 0.7750811606823352;
		login_screen_buddies.setOrigin(0, 0);

		// buddies_online
		const buddies_online = this.add.text(199, 682, "", {});
		buddies_online.scaleX = 1.3205303264583996;
		buddies_online.scaleY = 1.6494480466983135;
		buddies_online.text = "Buddies online";
		buddies_online.setStyle({ "fontFamily": "Helvetica Neue, Arial, sans-serif", "fontSize": "12px", "resolution": 4 });

		// server_selection_server_one_button
		const server_selection_server_one_button = this.add.image(303, 116, "login_1", "login-screen/worldTile");
		server_selection_server_one_button.scaleX = 0.7123591024225758;
		server_selection_server_one_button.scaleY = 0.7611037088297073;
		server_selection_server_one_button.setOrigin(0, 0);

		// server_selection_server_one_hover
		const server_selection_server_one_hover = this.add.image(304, 116, "login_1", "login-screen/worldTileSelect");
		server_selection_server_one_hover.scaleX = 0.7123591024225758;
		server_selection_server_one_hover.scaleY = 0.7611037088297073;
		server_selection_server_one_hover.setOrigin(0, 0);
		server_selection_server_one_hover.visible = false;

		// server_selection_server_one_name
		const server_selection_server_one_name = this.add.text(375, 129, "", {});
		server_selection_server_one_name.scaleX = 3.241869312851827;
		server_selection_server_one_name.scaleY = 3.6316980964167342;
		server_selection_server_one_name.text = "Blizzard";
		server_selection_server_one_name.setStyle({ "fontFamily": "Helvetica Neue, Arial, sans-serif", "fontSize": "12px", "resolution": 4 });

		// server_selection_server_one_bar_2
		const server_selection_server_one_bar_2 = this.add.image(715, 125, "login_1", "login-screen/populationOff");
		server_selection_server_one_bar_2.scaleY = 0.935185118305838;
		server_selection_server_one_bar_2.setOrigin(-0.176571, -0.122281);

		// server_selection_server_one_bar_1
		const server_selection_server_one_bar_1 = this.add.image(670, 123, "login_1", "login-screen/population");
		server_selection_server_one_bar_1.scaleX = 1.5699855458654939;
		server_selection_server_one_bar_1.scaleY = 1.5315060459229999;
		server_selection_server_one_bar_1.setOrigin(-0.176571, -0.122281);

		// server_selection_suggested_servers_text
		const server_selection_suggested_servers_text = this.add.bitmapText(343, 41, "CCComicCrazyBoldItalicShadow", "YOUR SUGGESTED SERVERS");
		server_selection_suggested_servers_text.scaleX = 0.3992622953281901;
		server_selection_suggested_servers_text.scaleY = 0.40992953690711265;
		server_selection_suggested_servers_text.text = "YOUR SUGGESTED SERVERS";
		server_selection_suggested_servers_text.fontSize = 72;

		// server_selection_server_one_bar_3
		const server_selection_server_one_bar_3 = this.add.image(759, 125, "login_1", "login-screen/populationOff");
		server_selection_server_one_bar_3.scaleY = 0.935185118305838;
		server_selection_server_one_bar_3.setOrigin(-0.176571, -0.122281);

		// server_selection_server_one_bar_4
		const server_selection_server_one_bar_4 = this.add.image(801, 125, "login_1", "login-screen/populationOff");
		server_selection_server_one_bar_4.scaleY = 0.935185118305838;
		server_selection_server_one_bar_4.setOrigin(-0.176571, -0.122281);

		// server_selection_server_one_bar_5
		const server_selection_server_one_bar_5 = this.add.image(843, 126, "login_1", "login-screen/populationOff");
		server_selection_server_one_bar_5.scaleY = 0.935185118305838;
		server_selection_server_one_bar_5.setOrigin(-0.176571, -0.122281);

		// Setting all interactives sprites starts here
		server_selection_server_one_button.setInteractive({ useHandCursor: true });
		server_selection_server_one_hover.setInteractive({ useHandCursor: true });
		server_selection_more_servers_button.setInteractive({ useHandCursor: true });
		server_selection_unlock_items_button.setInteractive({ useHandCursor: true });
		// Setting all interactives sprites ends here

		// All interactive events start here
		server_selection_server_one_button.on("pointerover", () => {
			server_selection_server_one_button.visible = false;
			server_selection_server_one_hover.visible = true;
		});

		server_selection_server_one_hover.on("pointerout", () => {
			server_selection_server_one_button.visible = true;
			server_selection_server_one_hover.visible = false;
		});

		server_selection_server_one_hover.on("pointerdown", () => {
			// join server or whatever shit im gonna add
		});
		// All interactive events end here

		this.events.emit("scene-awake");
	}
}