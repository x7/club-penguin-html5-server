import { pickRandomCharacter, updateProgress } from './loadingHelper.js'
import eventEmitter from '../../../util/eventEmitter.js';
import { BaseScene } from '../base/baseScene.js';
import { ASSET_TYPES } from '../../assets/assetTypes.js';

export class LoadingScene extends BaseScene {
	constructor() {
		super("LoadingScene");
	}

	init(data) {
		this.sceneManager = this.getSceneManager();
		this.assetManager = this.getAssetManager();
		this.sceneManager.setCurrentScene(this);
		this.progress = 0;
		
		this.text = data.text ?? "No text provided\nPlease provide one";
		this.newScene = data.newScene ?? null;
		eventEmitter.addEventOnce("loading:completed", (callback) => {
			setTimeout(() => {
				callback();
			}, 1250);
		});
	}

	preload() {
		this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.PACK,
			name: "load",
			paths: ["assets/loading/load-pack.json"]
		});

		this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.PACK,
			name: "login",
			paths: ["assets/login/login-pack.json"]
		});

		this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.BITMAP_FONT,
			name: "BurbankSmallBold",
			paths: ["assets/fonts/BurbankSmallBold.png", "assets/fonts/BurbankSmallBold.xml"]
		});

		this.assetManager.load({
			scene: this,
			type: ASSET_TYPES.JSON,
			name: "loading-characters-json",
			paths: ["src/game/gamedata/loadingCharacters.json"]
		})
	}

	async create() {		
		// login_screen_background
		this.login_screen_background = this.add.image(-54, -69, "login", "login-screen/background");
		this.login_screen_background.scaleX = 0.8005228796833518;
		this.login_screen_background.scaleY = 0.7697808237235164;
		this.login_screen_background.setOrigin(0, 0);

		// load_screen_background
		const load_screen_background = this.add.image(548, 393, "load", "load-screen/background");
		load_screen_background.scaleX = 0.6043379501487305;
		load_screen_background.scaleY = 0.6244561279852182;
		load_screen_background.setOrigin(0, 0);

		// load_screen_spinner0001
		const load_screen_spinner0001 = this.add.sprite(554, 400, "load", "load-screen/spinner0001");
		load_screen_spinner0001.scaleX = 0.5116844663233825;
		load_screen_spinner0001.scaleY = 0.529299740149275;
		load_screen_spinner0001.setOrigin(0, 0);
		load_screen_spinner0001.play("load-spinner-animation");

		// load_screen_mask
		this.load_screen_mask = this.add.image(581, 402, "load", "load-screen/mask");
		this.load_screen_mask.scaleX = 0.6037870622124922;
		this.load_screen_mask.scaleY = 0.7291006632874022;
		this.load_screen_mask.setOrigin(0, 0);
		this.load_screen_mask.tintFill = true;
		this.load_screen_mask.tintTopLeft = 16761134;
		this.load_screen_mask.tintTopRight = 16761134;
		this.load_screen_mask.tintBottomLeft = 16761134;
		this.load_screen_mask.tintBottomRight = 16761134;
		this.load_screen_mask.visible = false;

		const centerX = this.scale.width / 2;
		const centerY = this.scale.height / 2;
		const loading_random_text = this.add.bitmapText(centerX - 10, centerY + 70, "BurbankSmallBold", this.text);
		loading_random_text.text = this.text;
		loading_random_text.fontSize = 18;
		loading_random_text.setOrigin(0.5, 0.0)
		loading_random_text.setLineSpacing(5);
		loading_random_text.setCenterAlign();

		this.progressInterval = this.time.addEvent({
			delay: 500,
			callback: () => {
				if(this.progress >= 1) {
					this.time.removeEvent(this.progressInterval);
					return;
				}

				if(this.progress >= 0.075) {
					this.progress = 0;
				}
				
				this.progress += 0.01;
				updateProgress(this);
			},
			callbackScope: this,
			loop: true
		});

		// Main character animation
		const characters = this.cache.json.get("loading-characters-json");
        const mainCharacterPicked = pickRandomCharacter(characters);
        const mainCharacter = this.add.sprite(mainCharacterPicked['x'], mainCharacterPicked['y'], "load", mainCharacterPicked['mainSpriteName']);
		mainCharacter.scaleX = mainCharacterPicked['scaleX'];
		mainCharacter.scaleY = mainCharacterPicked['scaleY'];
		mainCharacter.setOrigin(0, 0);
		mainCharacter.play(mainCharacterPicked['animationName']);

		this.events.once("shutdown", this.shutdown, this);
		this.events.emit("scene-awake");

		// Loading system
		this.sceneManager.add({ sceneKey: this.newScene, scene: null, autoStart: false });
		this.sceneManager.launch(this.newScene, { "loading": true });
		this.sceneManager.sendToBack(this.newScene);
	}

	shutdown() {
		this.time.removeEvent(this.progressInterval);
	}
}