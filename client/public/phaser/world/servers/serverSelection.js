import * as Phaser from 'https://cdn.jsdelivr.net/npm/phaser@3/dist/phaser.esm.js';

// TODO: Make nicer
// TODO: Add more servers popup
// TODO: Add redemption

export default class ServerSelectionScene extends Phaser.Scene {
	constructor() {
		super("ServerSelectionScene");
	}

	preload() {
	    this.load.pack("login-pack", "login/login-pack.json");
	}

	create() {
// login_screen_background
		const login_screen_background = this.add.image(-11, -18, "login_1", "login-screen/background");
		login_screen_background.scaleX = 0.7585468997218747;
		login_screen_background.scaleY = 0.7048577006218386;
		login_screen_background.setOrigin(0, 0);

		// login_screen_items0001
		const login_screen_items0001 = this.add.image(1122, 8, "login_1", "login-screen/items0001");
		login_screen_items0001.scaleX = 0.674904561750434;
		login_screen_items0001.scaleY = 0.6733426260234598;
		login_screen_items0001.setOrigin(0, 0);

		// login_screen_more0001
		const login_screen_more0001 = this.add.image(977, 460, "login_1", "login-screen/more0001");
		login_screen_more0001.scaleX = 0.7202304140282709;
		login_screen_more0001.scaleY = 0.7910271882893434;
		login_screen_more0001.setOrigin(0.0379109, 0.243031);

		// login_screen_chat
		const login_screen_chat = this.add.image(820, 673, "login_1", "login-screen/chat");
		login_screen_chat.setOrigin(0, 0);

		// ultimate_safe_chat
		const ultimate_safe_chat = this.add.text(870, 677, "", {});
		ultimate_safe_chat.scaleX = 1.7187470152635058;
		ultimate_safe_chat.scaleY = 1.9019716542572633;
		ultimate_safe_chat.text = "Ultimate safe chat";
		ultimate_safe_chat.setStyle({ "fontFamily": "Helvetica Neue, Arial, sans-serif", "fontSize": "12px", "resolution": 4 });

		// login_screen_population
		const login_screen_population = this.add.image(401, 673, "login_1", "login-screen/population");
		login_screen_population.setOrigin(0, 0);

		// among_of_penguins_online
		const among_of_penguins_online = this.add.text(436, 677, "", {});
		among_of_penguins_online.scaleX = 1.7187470152635058;
		among_of_penguins_online.scaleY = 1.9019716542572633;
		among_of_penguins_online.text = "Amount of penguins online";
		among_of_penguins_online.setStyle({ "fontFamily": "Helvetica Neue, Arial, sans-serif", "fontSize": "12px", "resolution": 4 });

		// login_screen_buddies
		const login_screen_buddies = this.add.image(121, 673, "login_1", "login-screen/buddies");
		login_screen_buddies.setOrigin(0, 0);

		// buddies_online
		const buddies_online = this.add.text(164, 677, "", {});
		buddies_online.scaleX = 1.3795443812419483;
		buddies_online.scaleY = 1.7419866232929508;
		buddies_online.text = "Buddies online";
		buddies_online.setStyle({ "fontFamily": "Helvetica Neue, Arial, sans-serif", "fontSize": "12px", "resolution": 4 });

		// login_screen_worldTile
		const login_screen_worldTile = this.add.image(253, 129, "login_1", "login-screen/worldTile");
		login_screen_worldTile.scaleX = 0.7935356211545179;
		login_screen_worldTile.scaleY = 0.7821325379291588;
		login_screen_worldTile.setOrigin(0, 0);

		// server_1_hover
		const server_1_hover = this.add.image(253, 129, "login_1", "login-screen/worldTileSelect");
		server_1_hover.scaleX = 0.7935356211545179;
		server_1_hover.scaleY = 0.7821325379291588;
		server_1_hover.setOrigin(0, 0);
		server_1_hover.visible = false;

		// login_screen_worldTile_1
		const login_screen_worldTile_1 = this.add.image(253, 220.72737628784682, "login_1", "login-screen/worldTile");
		login_screen_worldTile_1.scaleX = 0.7935356211545179;
		login_screen_worldTile_1.scaleY = 0.7821325379291588;
		login_screen_worldTile_1.setOrigin(0, 0);

		// server_2_hover
		const server_2_hover = this.add.image(253, 220.72737628784682, "login_1", "login-screen/worldTileSelect");
		server_2_hover.scaleX = 0.7935356211545179;
		server_2_hover.scaleY = 0.7821325379291588;
		server_2_hover.setOrigin(0, 0);
		server_2_hover.visible = false;

		// login_screen_worldTile_2
		const login_screen_worldTile_2 = this.add.image(253, 311, "login_1", "login-screen/worldTile");
		login_screen_worldTile_2.scaleX = 0.7935356211545179;
		login_screen_worldTile_2.scaleY = 0.7821325379291588;
		login_screen_worldTile_2.setOrigin(0, 0);

		// server_3_hover
		const server_3_hover = this.add.image(253, 311, "login_1", "login-screen/worldTileSelect");
		server_3_hover.scaleX = 0.7935356211545179;
		server_3_hover.scaleY = 0.7821325379291588;
		server_3_hover.setOrigin(0, 0);
		server_3_hover.visible = false;

		// login_screen_worldTile_3
		const login_screen_worldTile_3 = this.add.image(253, 402, "login_1", "login-screen/worldTile");
		login_screen_worldTile_3.scaleX = 0.7935356211545179;
		login_screen_worldTile_3.scaleY = 0.7821325379291588;
		login_screen_worldTile_3.setOrigin(0, 0);

		// server_4_hover
		const server_4_hover = this.add.image(253, 402, "login_1", "login-screen/worldTileSelect");
		server_4_hover.scaleX = 0.7935356211545179;
		server_4_hover.scaleY = 0.7821325379291588;
		server_4_hover.setOrigin(0, 0);
		server_4_hover.visible = false;

		// login_screen_worldTile_4
		const login_screen_worldTile_4 = this.add.image(253, 493, "login_1", "login-screen/worldTile");
		login_screen_worldTile_4.scaleX = 0.7935356211545179;
		login_screen_worldTile_4.scaleY = 0.7821325379291588;
		login_screen_worldTile_4.setOrigin(0, 0);

		// server_5_hover
		const server_5_hover = this.add.image(253, 493, "login_1", "login-screen/worldTileSelect");
		server_5_hover.scaleX = 0.7935356211545179;
		server_5_hover.scaleY = 0.7821325379291588;
		server_5_hover.setOrigin(0, 0);
		server_5_hover.visible = false;

		// your_suggested_servers
		const your_suggested_servers = this.add.text(300, 41, "", {});
		your_suggested_servers.scaleX = 2.6042659928865755;
		your_suggested_servers.scaleY = 2.883553216600199;
		your_suggested_servers.text = "YOUR SUGGESTED SERVERS";
		your_suggested_servers.setStyle({ "fontFamily": "Helvetica Neue, Arial, sans-serif", "fontStyle": "bold", "resolution": 4 });

		// server_text_1
		const server_text_1 = this.add.text(342, 147, "", {});
		server_text_1.scaleX = 3.7674411920495317;
		server_text_1.scaleY = 3.4567005254306005;
		server_text_1.text = "Blizzard";
		server_text_1.setStyle({ "fontFamily": "Helvetica Neue, Arial, sans-serif", "fontSize": "12px", "resolution": 4 });

		// server_text_2
		const server_text_2 = this.add.text(342, 239, "", {});
		server_text_2.scaleX = 3.7674411920495317;
		server_text_2.scaleY = 3.4567005254306005;
		server_text_2.text = "Zipline";
		server_text_2.setStyle({ "fontFamily": "Helvetica Neue, Arial, sans-serif", "fontSize": "12px", "resolution": 4 });

		// server_text_3
		const server_text_3 = this.add.text(342, 329, "", {});
		server_text_3.scaleX = 3.7674411920495317;
		server_text_3.scaleY = 3.4567005254306005;
		server_text_3.text = "Glaciar";
		server_text_3.setStyle({ "fontFamily": "Helvetica Neue, Arial, sans-serif", "fontSize": "12px", "resolution": 4 });

		// server_text_4
		const server_text_4 = this.add.text(342, 419, "", {});
		server_text_4.scaleX = 3.7674411920495317;
		server_text_4.scaleY = 3.4567005254306005;
		server_text_4.text = "Bonza";
		server_text_4.setStyle({ "fontFamily": "Helvetica Neue, Arial, sans-serif", "fontSize": "12px", "resolution": 4 });

		// server_text_5
		const server_text_5 = this.add.text(342, 509, "", {});
		server_text_5.scaleX = 3.7674411920495317;
		server_text_5.scaleY = 3.4567005254306005;
		server_text_5.text = "Pizzarock";
		server_text_5.setStyle({ "fontFamily": "Helvetica Neue, Arial, sans-serif", "fontSize": "12px", "resolution": 4 });

		// server_1_bar_5
		const server_1_bar_5 = this.add.image(844, 137, "login_1", "login-screen/populationOff");
		server_1_bar_5.setOrigin(-0.176571, -0.122281);

		// server_1_bar_4
		const server_1_bar_4 = this.add.image(795, 137, "login_1", "login-screen/populationOff");
		server_1_bar_4.setOrigin(-0.176571, -0.122281);

		// server_1_bar_3
		const server_1_bar_3 = this.add.image(746, 137, "login_1", "login-screen/populationOff");
		server_1_bar_3.setOrigin(-0.176571, -0.122281);

		// server_1_bar_2
		const server_1_bar_2 = this.add.image(697, 137, "login_1", "login-screen/populationOff");
		server_1_bar_2.setOrigin(-0.176571, -0.122281);

		// server_1_bar_green_1
		const server_1_bar_green_1 = this.add.image(648, 134, "login_1", "login-screen/population");
		server_1_bar_green_1.scaleX = 1.5699855458654939;
		server_1_bar_green_1.scaleY = 1.66172218815691;
		server_1_bar_green_1.setOrigin(-0.176571, -0.122281);

		// server_1_bar_green_2
		const server_1_bar_green_2 = this.add.image(697, 135, "login_1", "login-screen/population");
		server_1_bar_green_2.scaleX = 1.5699855458654939;
		server_1_bar_green_2.scaleY = 1.66172218815691;
		server_1_bar_green_2.setOrigin(-0.176571, -0.122281);
		server_1_bar_green_2.visible = false;

		// server_1_bar_green_3
		const server_1_bar_green_3 = this.add.image(746, 135, "login_1", "login-screen/population");
		server_1_bar_green_3.scaleX = 1.5699855458654939;
		server_1_bar_green_3.scaleY = 1.66172218815691;
		server_1_bar_green_3.setOrigin(-0.176571, -0.122281);
		server_1_bar_green_3.visible = false;

		// server_1_bar_green_4
		const server_1_bar_green_4 = this.add.image(795, 135, "login_1", "login-screen/population");
		server_1_bar_green_4.scaleX = 1.5699855458654939;
		server_1_bar_green_4.scaleY = 1.66172218815691;
		server_1_bar_green_4.setOrigin(-0.176571, -0.122281);
		server_1_bar_green_4.visible = false;

		// server_1_bar_green_5
		const server_1_bar_green_5 = this.add.image(844, 135, "login_1", "login-screen/population");
		server_1_bar_green_5.scaleX = 1.5699855458654939;
		server_1_bar_green_5.scaleY = 1.66172218815691;
		server_1_bar_green_5.setOrigin(-0.176571, -0.122281);
		server_1_bar_green_5.visible = false;

		// server_2_bar_green_1
		const server_2_bar_green_1 = this.add.image(648, 227, "login_1", "login-screen/population");
		server_2_bar_green_1.scaleX = 1.5699855458654939;
		server_2_bar_green_1.scaleY = 1.66172218815691;
		server_2_bar_green_1.setOrigin(-0.176571, -0.122281);

		// server_2_bar_2
		const server_2_bar_2 = this.add.image(697, 230, "login_1", "login-screen/populationOff");
		server_2_bar_2.setOrigin(-0.176571, -0.122281);

		// server_2_bar_3
		const server_2_bar_3 = this.add.image(746, 230, "login_1", "login-screen/populationOff");
		server_2_bar_3.setOrigin(-0.176571, -0.122281);

		// server_2_bar_4
		const server_2_bar_4 = this.add.image(795, 230, "login_1", "login-screen/populationOff");
		server_2_bar_4.setOrigin(-0.176571, -0.122281);

		// server_2_bar_5
		const server_2_bar_5 = this.add.image(844, 230, "login_1", "login-screen/populationOff");
		server_2_bar_5.setOrigin(-0.176571, -0.122281);

		// server_3_bar_green_1
		const server_3_bar_green_1 = this.add.image(648, 317, "login_1", "login-screen/population");
		server_3_bar_green_1.scaleX = 1.5699855458654939;
		server_3_bar_green_1.scaleY = 1.66172218815691;
		server_3_bar_green_1.setOrigin(-0.176571, -0.122281);

		// server_4_bar_green_1
		const server_4_bar_green_1 = this.add.image(648, 407, "login_1", "login-screen/population");
		server_4_bar_green_1.scaleX = 1.5699855458654939;
		server_4_bar_green_1.scaleY = 1.66172218815691;
		server_4_bar_green_1.setOrigin(-0.176571, -0.122281);

		// server_5_bar_green_1
		const server_5_bar_green_1 = this.add.image(648, 498, "login_1", "login-screen/population");
		server_5_bar_green_1.scaleX = 1.5699855458654939;
		server_5_bar_green_1.scaleY = 1.66172218815691;
		server_5_bar_green_1.setOrigin(-0.176571, -0.122281);

		// server_3_bar_2
		const server_3_bar_2 = this.add.image(697, 318, "login_1", "login-screen/populationOff");
		server_3_bar_2.setOrigin(-0.176571, -0.122281);

		// server_3_bar_3
		const server_3_bar_3 = this.add.image(746, 318, "login_1", "login-screen/populationOff");
		server_3_bar_3.setOrigin(-0.176571, -0.122281);

		// server_3_bar_4
		const server_3_bar_4 = this.add.image(795, 318, "login_1", "login-screen/populationOff");
		server_3_bar_4.setOrigin(-0.176571, -0.122281);

		// server_3_bar_5
		const server_3_bar_5 = this.add.image(844, 318, "login_1", "login-screen/populationOff");
		server_3_bar_5.setOrigin(-0.176571, -0.122281);

		// server_4_bar_2
		const server_4_bar_2 = this.add.image(697, 409, "login_1", "login-screen/populationOff");
		server_4_bar_2.setOrigin(-0.176571, -0.122281);

		// server_4_bar_3
		const server_4_bar_3 = this.add.image(746, 409, "login_1", "login-screen/populationOff");
		server_4_bar_3.setOrigin(-0.176571, -0.122281);

		// server_4_bar_4
		const server_4_bar_4 = this.add.image(795, 409, "login_1", "login-screen/populationOff");
		server_4_bar_4.setOrigin(-0.176571, -0.122281);

		// server_4_bar_5
		const server_4_bar_5 = this.add.image(844, 409, "login_1", "login-screen/populationOff");
		server_4_bar_5.setOrigin(-0.176571, -0.122281);

		// server_5_bar_2
		const server_5_bar_2 = this.add.image(697, 501, "login_1", "login-screen/populationOff");
		server_5_bar_2.setOrigin(-0.176571, -0.122281);

		// server_5_bar_3
		const server_5_bar_3 = this.add.image(746, 501, "login_1", "login-screen/populationOff");
		server_5_bar_3.setOrigin(-0.176571, -0.122281);

		// server_5_bar_4
		const server_5_bar_4 = this.add.image(795, 501, "login_1", "login-screen/populationOff");
		server_5_bar_4.setOrigin(-0.176571, -0.122281);

		// server_5_bar_5
		const server_5_bar_5 = this.add.image(844, 501, "login_1", "login-screen/populationOff");
		server_5_bar_5.setOrigin(-0.176571, -0.122281);

		// interactives
		login_screen_worldTile.setInteractive({ useHandCursor: true });
		server_1_hover.setInteractive({ useHandCursor: true });
		login_screen_worldTile_1.setInteractive({ useHandCursor: true });
		server_2_hover.setInteractive({ useHandCursor: true });
		login_screen_worldTile_2.setInteractive({ useHandCursor: true });
		server_3_hover.setInteractive({ useHandCursor: true });
		login_screen_worldTile_3.setInteractive({ useHandCursor: true });
		server_4_hover.setInteractive({ useHandCursor: true });
		login_screen_worldTile_4.setInteractive({ useHandCursor: true });
		server_5_hover.setInteractive({ useHandCursor: true });
		login_screen_more0001.setInteractive({ useHandCursor: true });
		login_screen_items0001.setInteractive({ useHandCursor: true });

		login_screen_worldTile.on("pointerover", () => {
		    login_screen_worldTile.visible = false;
		    server_1_hover.visible = true;
		});

		server_1_hover.on("pointerout", () => {
            login_screen_worldTile.visible = true;
            server_1_hover.visible = false;
        });

        login_screen_worldTile_1.on("pointerover", () => {
            login_screen_worldTile_1.visible = false;
            server_2_hover.visible = true;
        });

        server_2_hover.on("pointerout", () => {
            login_screen_worldTile_1.visible = true;
            server_2_hover.visible = false;
        });

        login_screen_worldTile_2.on("pointerover", () => {
            login_screen_worldTile_2.visible = false;
            server_3_hover.visible = true;
        });

        server_3_hover.on("pointerout", () => {
            login_screen_worldTile_2.visible = true;
            server_3_hover.visible = false;
        });

        login_screen_worldTile_3.on("pointerover", () => {
            login_screen_worldTile_3.visible = false;
            server_4_hover.visible = true;
        });

        server_4_hover.on("pointerout", () => {
            login_screen_worldTile_3.visible = true;
            server_4_hover.visible = false;
        });

        login_screen_worldTile_4.on("pointerover", () => {
            login_screen_worldTile_4.visible = false;
            server_5_hover.visible = true;
        });

        server_5_hover.on("pointerout", () => {
            login_screen_worldTile_4.visible = true;
            server_5_hover.visible = false;
        });

		this.events.emit("scene-awake");
	}
}
