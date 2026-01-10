import Phaser from 'phaser';
import * as registerHelper from './registerHelper.js'

export class RegisterScene extends Phaser.Scene {
    constructor() {
        super("RegisterScene");

        this.username = null;
        this.password = null;
        this.confirmPassword = null;
        this.email = null;
        this.penguinColor = "red"; // default is red
    }

    preload() {
        this.load.pack("create-pack", "public/phaser/register/create-pack.json");
    }

    create() {
		this.events.once("shutdown", this.shutdown, this);
	// create_module_mainBackgroundConfirmation
	const gameCanvas = this.game.canvas;
    const canvasRect = gameCanvas.getBoundingClientRect();

	const create_module_mainBackgroundConfirmation = this.add.image(635, -4, "create", "create-module/mainBackgroundConfirmation");
	create_module_mainBackgroundConfirmation.scaleX = 0.842354994900877;
	create_module_mainBackgroundConfirmation.scaleY = 0.7043206072203547;
	create_module_mainBackgroundConfirmation.setOrigin(0.5, 0);

	// create_module_logo
	const create_module_logo = this.add.image(-16, -31, "create", "create-module/logo");
	create_module_logo.setOrigin(0, 0);

	// create_module_paperdollAlternateOutline
	const create_module_paperdollAlternateOutline = this.add.image(186, 119, "create", "create-module/paperdollOutline");
	create_module_paperdollAlternateOutline.scaleX = 0.6727898389718864;
	create_module_paperdollAlternateOutline.scaleY = 0.6468453557210952;
	create_module_paperdollAlternateOutline.setOrigin(0, 0);

	// create_module_chooseNameField
	const create_module_chooseNameField = this.add.image(151, 545, "create", "create-module/chooseNameField");
	create_module_chooseNameField.scaleX = 0.75;
	create_module_chooseNameField.scaleY = 0.62;
	create_module_chooseNameField.setOrigin(0, 0);

	// create_penguin_name_text
	const create_penguin_name_text = this.add.text(159, 514, "", {});
	create_penguin_name_text.scaleX = 1.7925058706609729;
	create_penguin_name_text.scaleY = 1.9039375826120126;
	create_penguin_name_text.text = "Create Penguin Name:";
	create_penguin_name_text.setStyle({ "baselineX": 1, "baselineY": 1, "color": "#6B6B6B", "fontFamily": "Arial Rounded MT Bold, Nunito, Varela Round, sans-serif", "fontSize": "9.5px", "fontStyle": "bold", "stroke": "", "resolution": 4 });

	// create_penguin_name_bubble
	const create_penguin_name_bubble = this.add.image(72, 517, "create", "create-module/largeProgressBubble");
	create_penguin_name_bubble.scaleX = 0.6507266318022114;
	create_penguin_name_bubble.scaleY = 0.6238994133768057;
	create_penguin_name_bubble.setOrigin(0, 0);

	// number_1_text
	const number_1_text = this.add.text(88, 522, "", {});
	number_1_text.scaleX = 2.4877054298732717;
	number_1_text.scaleY = 2.7706885590922576;
	number_1_text.text = "1.";
	number_1_text.setStyle({ "align": "center", "color": "#FFFFFF", "fontFamily": "Arial Rounded MT Bold, Nunito, Varela Round, sans-serif", "fontSize": "14px", "fontStyle": "bold", "stroke": "#FFFFFF", "resolution": 4 });

	// name_information_text
	const name_information_text = this.add.text(160, 617, "", {});
	name_information_text.scaleX = 1.5487428237305858;
	name_information_text.scaleY = 1.654471079768003;
	name_information_text.text = "• 4 – 13 letters and numbers, up to 2 spaces  \n• Do not use your real name";
	name_information_text.setStyle({ "color": "#7a7a7a", "fontFamily": "Arial Rounded MT Bold, Nunito, Varela Round, sans-serif", "fontSize": "10px", "fontStyle": "bold", "stroke": "#7a7a7a", "resolution": 4 });
	name_information_text.setLineSpacing(4);

	// create_module_nextButton
	const create_module_nextButton = this.add.image(1043, 628, "create", "create-module/nextButton");
	create_module_nextButton.scaleX = 0.780598488392683;
	create_module_nextButton.scaleY = 0.7819105828441584;
	create_module_nextButton.setOrigin(0, 0);

	// create_module_nextButtonArrow
	const create_module_nextButtonArrow = this.add.image(1170, 638, "create", "create-module/nextButtonArrow");
	create_module_nextButtonArrow.scaleX = 1.103943128561055;
	create_module_nextButtonArrow.scaleY = 0.9105428465745466;
	create_module_nextButtonArrow.setOrigin(0, 0);

	// continue_text
	const continue_text = this.add.text(1079, 625, "", {});
	continue_text.scaleX = 1.2834301424909005;
	continue_text.scaleY = 1.7094473842061118;
	continue_text.text = "Next\n";
	continue_text.setStyle({ "align": "center", "baselineX": 1, "baselineY": 1, "color": "#FFFFFF", "fontFamily": "Arial Rounded MT Bold, Nunito, Varela Round, sans-serif", "fontSize": "20px", "fontStyle": "bold", "maxLines": 1, "stroke": "#0B5E9E", "strokeThickness": 2, "shadow.offsetY": 2, "shadow.color": "#00000055", "shadow.fill": true, "resolution": 4 });
	continue_text.setPadding({"left":8,"top":4,"right":8,"bottom":4});

	// create_module_largeProgressBubble
	const create_module_largeProgressBubble = this.add.image(556, 62, "create", "create-module/largeProgressBubble");
	create_module_largeProgressBubble.scaleX = 0.6507266318022114;
	create_module_largeProgressBubble.scaleY = 0.6238994133768057;
	create_module_largeProgressBubble.setOrigin(0, 0);

	// create_module_swatchContentFill
	const create_module_swatchContentFill = this.add.image(695, 99, "create", "create-module/swatchContentFill");
	create_module_swatchContentFill.scaleX = 0.8345768673365528;
	create_module_swatchContentFill.scaleY = 0.8397749370643428;
	create_module_swatchContentFill.setOrigin(0, 0);
	create_module_swatchContentFill.tintFill = true;
	create_module_swatchContentFill.tintTopLeft = 40960;
	create_module_swatchContentFill.tintTopRight = 40960;
	create_module_swatchContentFill.tintBottomLeft = 40960;
	create_module_swatchContentFill.tintBottomRight = 40960;

	// create_module_swatchContentFill_1
	const create_module_swatchContentFill_1 = this.add.image(756, 99, "create", "create-module/swatchContentFill");
	create_module_swatchContentFill_1.scaleX = 0.8345768673365528;
	create_module_swatchContentFill_1.scaleY = 0.8397749370643428;
	create_module_swatchContentFill_1.setOrigin(0, 0);
	create_module_swatchContentFill_1.tintFill = true;
	create_module_swatchContentFill_1.tintTopLeft = 16727972;
	create_module_swatchContentFill_1.tintTopRight = 16727972;
	create_module_swatchContentFill_1.tintBottomLeft = 16727972;
	create_module_swatchContentFill_1.tintBottomRight = 16727972;

	// create_module_swatchContentFill_2
	const create_module_swatchContentFill_2 = this.add.image(817, 99, "create", "create-module/swatchContentFill");
	create_module_swatchContentFill_2.scaleX = 0.8345768673365528;
	create_module_swatchContentFill_2.scaleY = 0.8397749370643428;
	create_module_swatchContentFill_2.setOrigin(0, 0);
	create_module_swatchContentFill_2.tintFill = true;
	create_module_swatchContentFill_2.tintTopLeft = 3026478;
	create_module_swatchContentFill_2.tintTopRight = 3026478;
	create_module_swatchContentFill_2.tintBottomLeft = 3026478;
	create_module_swatchContentFill_2.tintBottomRight = 3026478;

	// create_module_swatchContentFill_3
	const create_module_swatchContentFill_3 = this.add.image(878, 99, "create", "create-module/swatchContentFill");
	create_module_swatchContentFill_3.scaleX = 0.8345768673365528;
	create_module_swatchContentFill_3.scaleY = 0.8397749370643428;
	create_module_swatchContentFill_3.setOrigin(0, 0);
	create_module_swatchContentFill_3.tintFill = true;
	create_module_swatchContentFill_3.tintTopLeft = 14024704;
	create_module_swatchContentFill_3.tintTopRight = 14024704;
	create_module_swatchContentFill_3.tintBottomLeft = 14024704;
	create_module_swatchContentFill_3.tintBottomRight = 14024704;

	// create_module_swatchContentFill_4
	const create_module_swatchContentFill_4 = this.add.image(939, 99, "create", "create-module/swatchContentFill");
	create_module_swatchContentFill_4.scaleX = 0.8345768673365528;
	create_module_swatchContentFill_4.scaleY = 0.8397749370643428;
	create_module_swatchContentFill_4.setOrigin(0, 0);
	create_module_swatchContentFill_4.tintFill = true;
	create_module_swatchContentFill_4.tintTopLeft = 16742912;
	create_module_swatchContentFill_4.tintTopRight = 16742912;
	create_module_swatchContentFill_4.tintBottomLeft = 16742912;
	create_module_swatchContentFill_4.tintBottomRight = 16742912;

	// create_module_swatchContentFill_5
	const create_module_swatchContentFill_5 = this.add.image(1000, 99, "create", "create-module/swatchContentFill");
	create_module_swatchContentFill_5.scaleX = 0.8345768673365528;
	create_module_swatchContentFill_5.scaleY = 0.8397749370643428;
	create_module_swatchContentFill_5.setOrigin(0, 0);
	create_module_swatchContentFill_5.tintFill = true;
	create_module_swatchContentFill_5.tintTopLeft = 16765440;
	create_module_swatchContentFill_5.tintTopRight = 16765440;
	create_module_swatchContentFill_5.tintBottomLeft = 16765440;
	create_module_swatchContentFill_5.tintBottomRight = 16765440;

	// create_module_swatchContentFill_6
	const create_module_swatchContentFill_6 = this.add.image(1061, 99, "create", "create-module/swatchContentFill");
	create_module_swatchContentFill_6.scaleX = 0.8345768673365528;
	create_module_swatchContentFill_6.scaleY = 0.8397749370643428;
	create_module_swatchContentFill_6.setOrigin(0, 0);
	create_module_swatchContentFill_6.tintFill = true;
	create_module_swatchContentFill_6.tintTopLeft = 7020454;
	create_module_swatchContentFill_6.tintTopRight = 7020454;
	create_module_swatchContentFill_6.tintBottomLeft = 7020454;
	create_module_swatchContentFill_6.tintBottomRight = 7020454;

	// create_module_swatchContentFill_8
	const create_module_swatchContentFill_8 = this.add.image(1122, 99, "create", "create-module/swatchContentFill");
	create_module_swatchContentFill_8.scaleX = 0.8345768673365528;
	create_module_swatchContentFill_8.scaleY = 0.8397749370643428;
	create_module_swatchContentFill_8.setOrigin(0, 0);
	create_module_swatchContentFill_8.tintFill = true;
	create_module_swatchContentFill_8.tintTopLeft = 9132544;
	create_module_swatchContentFill_8.tintTopRight = 9132544;
	create_module_swatchContentFill_8.tintBottomLeft = 9132544;
	create_module_swatchContentFill_8.tintBottomRight = 9132544;

	// create_module_swatchContentFill_9
	const create_module_swatchContentFill_9 = this.add.image(1183, 99, "create", "create-module/swatchContentFill");
	create_module_swatchContentFill_9.scaleX = 0.8345768673365528;
	create_module_swatchContentFill_9.scaleY = 0.8397749370643428;
	create_module_swatchContentFill_9.setOrigin(0, 0);
	create_module_swatchContentFill_9.tintFill = true;
	create_module_swatchContentFill_9.tintTopLeft = 16740207;
	create_module_swatchContentFill_9.tintTopRight = 16740207;
	create_module_swatchContentFill_9.tintBottomLeft = 16740207;
	create_module_swatchContentFill_9.tintBottomRight = 16740207;

	// create_module_swatchContentFill_10
	const create_module_swatchContentFill_10 = this.add.image(634, 99, "create", "create-module/swatchContentFill");
	create_module_swatchContentFill_10.scaleX = 0.8345768673365528;
	create_module_swatchContentFill_10.scaleY = 0.8397749370643428;
	create_module_swatchContentFill_10.setOrigin(0, 0);
	create_module_swatchContentFill_10.tintFill = true;
	create_module_swatchContentFill_10.tintTopLeft = 667482;
	create_module_swatchContentFill_10.tintTopRight = 667482;
	create_module_swatchContentFill_10.tintBottomLeft = 667482;
	create_module_swatchContentFill_10.tintBottomRight = 667482;

	// create_module_swatchContentFill_11
	const create_module_swatchContentFill_11 = this.add.image(664, 159, "create", "create-module/swatchContentFill");
	create_module_swatchContentFill_11.scaleX = 0.8345768673365528;
	create_module_swatchContentFill_11.scaleY = 0.8397749370643428;
	create_module_swatchContentFill_11.setOrigin(0, 0);
	create_module_swatchContentFill_11.tintFill = true;
	create_module_swatchContentFill_11.tintTopLeft = 25600;
	create_module_swatchContentFill_11.tintTopRight = 25600;
	create_module_swatchContentFill_11.tintBottomLeft = 25600;
	create_module_swatchContentFill_11.tintBottomRight = 25600;

	// create_module_swatchContentFill_12
	const create_module_swatchContentFill_12 = this.add.image(725, 159, "create", "create-module/swatchContentFill");
	create_module_swatchContentFill_12.scaleX = 0.8345768673365528;
	create_module_swatchContentFill_12.scaleY = 0.8397749370643428;
	create_module_swatchContentFill_12.setOrigin(0, 0);
	create_module_swatchContentFill_12.tintFill = true;
	create_module_swatchContentFill_12.tintTopLeft = 44783;
	create_module_swatchContentFill_12.tintTopRight = 44783;
	create_module_swatchContentFill_12.tintBottomLeft = 44783;
	create_module_swatchContentFill_12.tintBottomRight = 44783;

	// create_module_swatchContentFill_13
	const create_module_swatchContentFill_13 = this.add.image(786, 159, "create", "create-module/swatchContentFill");
	create_module_swatchContentFill_13.scaleX = 0.8345768673365528;
	create_module_swatchContentFill_13.scaleY = 0.8397749370643428;
	create_module_swatchContentFill_13.setOrigin(0, 0);
	create_module_swatchContentFill_13.tintFill = true;
	create_module_swatchContentFill_13.tintTopLeft = 8190976;
	create_module_swatchContentFill_13.tintTopRight = 8190976;
	create_module_swatchContentFill_13.tintBottomLeft = 8190976;
	create_module_swatchContentFill_13.tintBottomRight = 8190976;

	// create_module_swatchContentFill_14
	const create_module_swatchContentFill_14 = this.add.image(847, 159, "create", "create-module/swatchContentFill");
	create_module_swatchContentFill_14.scaleX = 0.8345768673365528;
	create_module_swatchContentFill_14.scaleY = 0.8397749370643428;
	create_module_swatchContentFill_14.setOrigin(0, 0);
	create_module_swatchContentFill_14.tintFill = true;
	create_module_swatchContentFill_14.tintTopLeft = 42909;
	create_module_swatchContentFill_14.tintTopRight = 42909;
	create_module_swatchContentFill_14.tintBottomLeft = 42909;
	create_module_swatchContentFill_14.tintBottomRight = 42909;

	// create_module_swatchContentFill_15
	const create_module_swatchContentFill_15 = this.add.image(908, 159, "create", "create-module/swatchContentFill");
	create_module_swatchContentFill_15.scaleX = 0.8345768673365528;
	create_module_swatchContentFill_15.scaleY = 0.8397749370643428;
	create_module_swatchContentFill_15.setOrigin(0, 0);
	create_module_swatchContentFill_15.tintFill = true;
	create_module_swatchContentFill_15.tintTopLeft = 16119260;
	create_module_swatchContentFill_15.tintTopRight = 16119260;
	create_module_swatchContentFill_15.tintBottomLeft = 16119260;
	create_module_swatchContentFill_15.tintBottomRight = 16119260;

	// create_module_swatchContentFill_16
	const create_module_swatchContentFill_16 = this.add.image(969, 159, "create", "create-module/swatchContentFill");
	create_module_swatchContentFill_16.scaleX = 0.8345768673365528;
	create_module_swatchContentFill_16.scaleY = 0.8397749370643428;
	create_module_swatchContentFill_16.setOrigin(0, 0);
	create_module_swatchContentFill_16.tintFill = true;
	create_module_swatchContentFill_16.tintTopLeft = 8003389;
	create_module_swatchContentFill_16.tintTopRight = 8003389;
	create_module_swatchContentFill_16.tintBottomLeft = 8003389;
	create_module_swatchContentFill_16.tintBottomRight = 8003389;

	// create_module_swatchContentFill_17
	const create_module_swatchContentFill_17 = this.add.image(1030, 159, "create", "create-module/swatchContentFill");
	create_module_swatchContentFill_17.scaleX = 0.8345768673365528;
	create_module_swatchContentFill_17.scaleY = 0.8397749370643428;
	create_module_swatchContentFill_17.setOrigin(0, 0);
	create_module_swatchContentFill_17.tintFill = true;
	create_module_swatchContentFill_17.tintTopLeft = 11771355;
	create_module_swatchContentFill_17.tintTopRight = 11771355;
	create_module_swatchContentFill_17.tintBottomLeft = 11771355;
	create_module_swatchContentFill_17.tintBottomRight = 11771355;

	// create_module_swatchContentFill_18
	const create_module_swatchContentFill_18 = this.add.image(1091, 159, "create", "create-module/swatchContentFill");
	create_module_swatchContentFill_18.scaleX = 0.8345768673365528;
	create_module_swatchContentFill_18.scaleY = 0.8397749370643428;
	create_module_swatchContentFill_18.setOrigin(0, 0);
	create_module_swatchContentFill_18.tintFill = true;
	create_module_swatchContentFill_18.tintTopLeft = 16765404;
	create_module_swatchContentFill_18.tintTopRight = 16765404;
	create_module_swatchContentFill_18.tintBottomLeft = 16765404;
	create_module_swatchContentFill_18.tintBottomRight = 16765404;

	// create_module_swatchContentFill_19
	const create_module_swatchContentFill_19 = this.add.image(1152, 159, "create", "create-module/swatchContentFill");
	create_module_swatchContentFill_19.scaleX = 0.8345768673365528;
	create_module_swatchContentFill_19.scaleY = 0.8397749370643428;
	create_module_swatchContentFill_19.setOrigin(0, 0);
	create_module_swatchContentFill_19.tintFill = true;
	create_module_swatchContentFill_19.tintTopLeft = 14726537;
	create_module_swatchContentFill_19.tintTopRight = 14726537;
	create_module_swatchContentFill_19.tintBottomLeft = 14726537;
	create_module_swatchContentFill_19.tintBottomRight = 14726537;

	// choose_penguin_color_text
	const choose_penguin_color_text = this.add.text(638, 65, "", {});
	choose_penguin_color_text.scaleX = 1.7925058706609729;
	choose_penguin_color_text.scaleY = 1.9039375826120126;
	choose_penguin_color_text.text = "Choose Penguin Color:\n";
	choose_penguin_color_text.setStyle({ "baselineX": 1, "baselineY": 1, "color": "#6B6B6B", "fontFamily": "Arial Rounded MT Bold, Nunito, Varela Round, sans-serif", "fontSize": "12px", "fontStyle": "bold", "stroke": "", "resolution": 4 });

	// number_2_text_2
	const number_2_text_2 = this.add.text(574, 68, "", {});
	number_2_text_2.scaleX = 2.4877054298732717;
	number_2_text_2.scaleY = 2.7706885590922576;
	number_2_text_2.text = "2.\n";
	number_2_text_2.setStyle({ "align": "center", "color": "#FFFFFF", "fontFamily": "Arial Rounded MT Bold, Nunito, Varela Round, sans-serif", "fontSize": "14px", "fontStyle": "bold", "stroke": "#FFFFFF", "resolution": 4 });

	// create_module_largeProgressBubble_1
	const create_module_largeProgressBubble_1 = this.add.image(636, 221, "create", "create-module/largeProgressBubble");
	create_module_largeProgressBubble_1.scaleX = 0.5507266318022114;
	create_module_largeProgressBubble_1.scaleY = 0.5238994133768057;
	create_module_largeProgressBubble_1.setOrigin(0, 0);

	// number_3_text_3
	const number_3_text_3 = this.add.text(650, 225, "", {});
	number_3_text_3.scaleX = 2.3877054298732716;
	number_3_text_3.scaleY = 2.470688559092258;
	number_3_text_3.text = "3.\n";
	number_3_text_3.setStyle({ "align": "center", "color": "#FFFFFF", "fontFamily": "Arial Rounded MT Bold, Nunito, Varela Round, sans-serif", "fontSize": "14px", "fontStyle": "bold", "stroke": "#FFFFFF", "resolution": 10 });

	// create_password_text
	const create_password_text = this.add.text(724, 244, "", {});
	create_password_text.scaleX = 1.7925058706609729;
	create_password_text.scaleY = 1.9039375826120126;
	create_password_text.text = "Create Password:";
	create_password_text.setStyle({ "baselineX": 1, "baselineY": 1, "color": "#6B6B6B", "fontFamily": "Arial Rounded MT Bold, Nunito, Varela Round, sans-serif", "fontSize": "9.5px", "fontStyle": "bold", "stroke": "", "resolution": 4 });

	// create_module_passwordField
	const create_module_passwordField = this.add.image(711, 270, "create", "create-module/emailField");
	create_module_passwordField.scaleX = 0.85;
	create_module_passwordField.scaleY = 0.8;
	create_module_passwordField.setOrigin(0, 0);

	// create_module_repeatPasswordField_1
	const create_module_repeatPasswordField_1 = this.add.image(711, 336, "create", "create-module/emailField");
	create_module_repeatPasswordField_1.scaleX = 0.85;
	create_module_repeatPasswordField_1.scaleY = 0.8;
	create_module_repeatPasswordField_1.setOrigin(0, 0);

	// email_address_information_text_1
	const email_address_information_text_1 = this.add.text(720, 552, "", {});
	email_address_information_text_1.scaleX = 1.8487428237305858;
	email_address_information_text_1.scaleY = 1.654471079768003;
	email_address_information_text_1.text = "• Club Penguin will send your parent\n   an email with an activation code.";
	email_address_information_text_1.setStyle({ "color": "#7a7a7a", "fontFamily": "Arial Rounded MT Bold, Nunito, Varela Round, sans-serif", "fontSize": "8px", "fontStyle": "bold", "stroke": "#7a7a7a", "resolution": 4 });
	email_address_information_text_1.setLineSpacing(4);

	// create_module_largeProgressBubble_2
	const create_module_largeProgressBubble_2 = this.add.image(636, 445, "create", "create-module/largeProgressBubble");
	create_module_largeProgressBubble_2.scaleX = 0.5507266318022114;
	create_module_largeProgressBubble_2.scaleY = 0.5238994133768057;
	create_module_largeProgressBubble_2.setOrigin(0, 0);

	// create_email_address_text_1
	const create_email_address_text_1 = this.add.text(724, 461, "", {});
	create_email_address_text_1.scaleX = 1.6925058706609728;
	create_email_address_text_1.scaleY = 1.8039375826120125;
	create_email_address_text_1.text = "Email Address:\n";
	create_email_address_text_1.setStyle({ "baselineX": 1, "baselineY": 1, "color": "#6B6B6B", "fontFamily": "Arial Rounded MT Bold, Nunito, Varela Round, sans-serif", "fontSize": "9.5px", "fontStyle": "bold", "stroke": "", "resolution": 4 });

	// create_module_repeatPasswordField
	const create_module_repeatPasswordField = this.add.image(711, 487, "create", "create-module/emailField");
	create_module_repeatPasswordField.scaleX = 0.85;
	create_module_repeatPasswordField.scaleY = 0.8;
	create_module_repeatPasswordField.setOrigin(0, 0);

	// number_4_text
	const number_4_text = this.add.text(648, 445, "", {});
	number_4_text.scaleX = 2.4877054298732717;
	number_4_text.scaleY = 2.7706885590922576;
	number_4_text.text = "4.\n";
	number_4_text.setStyle({ "align": "center", "color": "#FFFFFF", "fontFamily": "Arial Rounded MT Bold, Nunito, Varela Round, sans-serif", "fontSize": "14px", "fontStyle": "bold", "stroke": "#FFFFFF", "resolution": 4 });

	// password_information_text
	const password_information_text = this.add.text(724, 401, "", {});
	password_information_text.scaleX = 1.8487428237305858;
	password_information_text.scaleY = 1.654471079768003;
	password_information_text.text = "• At least 8 characters, one number, one\n  uppercase letter and one special character.";
	password_information_text.setStyle({ "color": "#7a7a7a", "fontFamily": "Arial Rounded MT Bold, Nunito, Varela Round, sans-serif", "fontSize": "8px", "fontStyle": "bold", "stroke": "#7a7a7a", "resolution": 4 });
	password_information_text.setLineSpacing(4);

	// create_module_paperdollContentFill
	const create_module_paperdollContentFill = this.add.image(185, 119, "create", "create-module/paperdollContentFill");
	create_module_paperdollContentFill.scaleX = 0.6779770590428532;
	create_module_paperdollContentFill.scaleY = 0.6482679658077646;
	create_module_paperdollContentFill.setOrigin(0, 0);
	create_module_paperdollContentFill.tintFill = true;
	create_module_paperdollContentFill.tintTopLeft = 16449793;
	create_module_paperdollContentFill.tintTopRight = 16449793;
	create_module_paperdollContentFill.tintBottomLeft = 16449793;
	create_module_paperdollContentFill.tintBottomRight = 16449793;

	// create_penguin_display_text
	const create_penguin_display_text = this.add.text(175, 559, "", {});
	create_penguin_display_text.scaleX = 1.4945494276515807;
	create_penguin_display_text.scaleY = 1.8598924079869041;
	create_penguin_display_text.text = "Penguin Name";
	create_penguin_display_text.setStyle({ "color": "#9c9c9cff", "fontFamily": "Arial Rounded MT Bold, Nunito, Varela Round, sans-serif", "fontSize": "14px", "fontStyle": "bold", "stroke": "", "resolution": 4 });

	// email_address_display_text
	const email_address_display_text = this.add.text(739, 500, "", {});
	email_address_display_text.scaleX = 1.4945494276515807;
	email_address_display_text.scaleY = 1.8598924079869041;
	email_address_display_text.text = "Enter parent's email address";
	email_address_display_text.setStyle({ "color": "#9c9c9cff", "fontFamily": "Arial Rounded MT Bold, Nunito, Varela Round, sans-serif", "fontSize": "12px", "fontStyle": "bold", "stroke": "", "resolution": 4 });

	// enter_password_display_text
	const enter_password_display_text = this.add.text(738, 282, "", {});
	enter_password_display_text.scaleX = 1.4945494276515807;
	enter_password_display_text.scaleY = 1.8598924079869041;
	enter_password_display_text.text = "Enter password";
	enter_password_display_text.setStyle({ "color": "#9c9c9cff", "fontFamily": "Arial Rounded MT Bold, Nunito, Varela Round, sans-serif", "fontSize": "12px", "fontStyle": "bold", "stroke": "", "resolution": 4 });

	// enter_password_display_text_1
	const enter_password_display_text_1 = this.add.text(738, 350, "", {});
	enter_password_display_text_1.scaleX = 1.4945494276515807;
	enter_password_display_text_1.scaleY = 1.8598924079869041;
	enter_password_display_text_1.text = "Confirm Password";
	enter_password_display_text_1.setStyle({ "color": "#9c9c9cff", "fontFamily": "Arial Rounded MT Bold, Nunito, Varela Round, sans-serif", "fontSize": "12px", "fontStyle": "bold", "stroke": "", "resolution": 4 });

        // Creating text input methods
        // Penguin username input
        const penguinNameInputBox = document.createElement('input');
        const imageWidth = create_module_chooseNameField.width * create_module_chooseNameField.scaleX;
        const imageHeight = create_module_chooseNameField.height * create_module_chooseNameField.scaleY;
        penguinNameInputBox.type = 'text';
        penguinNameInputBox.id = 'penguinNameInput';
        penguinNameInputBox.maxLength = 16;
        penguinNameInputBox.style.position = 'absolute';
        penguinNameInputBox.style.left = `${151 + 10}px`;
        penguinNameInputBox.style.top = `${545 + 10}px`;
        penguinNameInputBox.style.width = `${imageWidth - 20}px`;
        penguinNameInputBox.style.height = `${imageHeight - 20}px`;
        penguinNameInputBox.style.background = 'transparent';
        penguinNameInputBox.style.border = 'none';
        penguinNameInputBox.style.fontSize = '18px';
        penguinNameInputBox.style.fontFamily = 'Arial, sans-serif';
        penguinNameInputBox.style.color = '#000000';
        penguinNameInputBox.style.padding = '5px';
        penguinNameInputBox.style.outline = 'none';
        penguinNameInputBox.style.textAlign = 'left';
        penguinNameInputBox.style.left = `${canvasRect.left + 151 + 15}px`;
        penguinNameInputBox.style.top = `${canvasRect.top + 545 + 10}px`;
        document.body.appendChild(penguinNameInputBox);

        // First password input
        const passwordInputBox = document.createElement('input');
        const passwordImageWidth = create_module_passwordField.width * create_module_passwordField.scaleX;
        const passwordImageHeight = create_module_passwordField.height * create_module_passwordField.scaleY;
        passwordInputBox.type = 'password';
        passwordInputBox.id = 'passwordInput';
        passwordInputBox.maxLength = 128;
        passwordInputBox.style.position = 'absolute';
        passwordInputBox.style.left = `${151 + 10}px`;
        passwordInputBox.style.top = `${545 + 10}px`;
        passwordInputBox.style.width = `${passwordImageWidth - 20}px`;
        passwordInputBox.style.height = `${passwordImageHeight - 20}px`;
        passwordInputBox.style.background = 'transparent';
        passwordInputBox.style.border = 'none';
        passwordInputBox.style.fontSize = '18px';
        passwordInputBox.style.fontFamily = 'Arial, sans-serif';
        passwordInputBox.style.color = '#000000';
        passwordInputBox.style.padding = '5px';
        passwordInputBox.style.outline = 'none';
        passwordInputBox.style.textAlign = 'left';
        passwordInputBox.style.left = `${canvasRect.left + 711 + 15}px`;
        passwordInputBox.style.top = `${canvasRect.top + 270 + 10}px`;
        document.body.appendChild(passwordInputBox);

        // Confirm password input
        const passwordConfirmInputBox = document.createElement('input');
        const passwordConfirmImageWidth = create_module_repeatPasswordField_1.width * create_module_repeatPasswordField_1.scaleX;
        const passwordConfirmImageHeight = create_module_repeatPasswordField_1.height * create_module_repeatPasswordField_1.scaleY;
        passwordConfirmInputBox.type = 'password';
        passwordConfirmInputBox.id = 'passwordConfirmInput';
        passwordConfirmInputBox.maxLength = 128;
        passwordConfirmInputBox.style.position = 'absolute';
        passwordConfirmInputBox.style.left = `${151 + 10}px`;
        passwordConfirmInputBox.style.top = `${545 + 10}px`;
        passwordConfirmInputBox.style.width = `${passwordConfirmImageWidth - 20}px`;
        passwordConfirmInputBox.style.height = `${passwordConfirmImageHeight - 20}px`;
        passwordConfirmInputBox.style.background = 'transparent';
        passwordConfirmInputBox.style.border = 'none';
        passwordConfirmInputBox.style.fontSize = '18px';
        passwordConfirmInputBox.style.fontFamily = 'Arial, sans-serif';
        passwordConfirmInputBox.style.color = '#000000';
        passwordConfirmInputBox.style.padding = '5px';
        passwordConfirmInputBox.style.outline = 'none';
        passwordConfirmInputBox.style.textAlign = 'left';
        passwordConfirmInputBox.style.left = `${canvasRect.left + 711 + 15}px`;
        passwordConfirmInputBox.style.top = `${canvasRect.top + 336 + 10}px`;
        document.body.appendChild(passwordConfirmInputBox);

        // Email input
        const emailInput = document.createElement('input');
        const emailImageWidth = create_module_repeatPasswordField.width * create_module_repeatPasswordField.scaleX;
        const emailImageHeight = create_module_repeatPasswordField.height * create_module_repeatPasswordField.scaleY;
        emailInput.type = 'text';
        emailInput.id = 'emailInput';
        emailInput.maxLength = 128;
        emailInput.style.position = 'absolute';
        emailInput.style.left = `${151 + 10}px`;
        emailInput.style.top = `${545 + 10}px`;
        emailInput.style.width = `${emailImageWidth - 20}px`;
        emailInput.style.height = `${emailImageHeight - 20}px`;
        emailInput.style.background = 'transparent';
        emailInput.style.border = 'none';
        emailInput.style.fontSize = '18px';
        emailInput.style.fontFamily = 'Arial, sans-serif';
        emailInput.style.color = '#000000';
        emailInput.style.padding = '5px';
        emailInput.style.outline = 'none';
        emailInput.style.textAlign = 'left';
        emailInput.style.left = `${canvasRect.left + 711 + 15}px`;
        emailInput.style.top = `${canvasRect.top + 487 + 10}px`;
        document.body.appendChild(emailInput);

        // on click methods
        // Dark blue color
        create_module_swatchContentFill_10.setInteractive({ useHandCursor: true }).on("pointerdown", () => {
			registerHelper.updatePenguinColor(create_module_swatchContentFill_10, create_module_paperdollContentFill);
            this.penguinColor = "dark_blue";
        });

        // Green color
        create_module_swatchContentFill.setInteractive({ useHandCursor: true }).on("pointerdown", () => {
			registerHelper.updatePenguinColor(create_module_swatchContentFill, create_module_paperdollContentFill);
            this.penguinColor = "green";
        });

        // Pink color
        create_module_swatchContentFill_1.setInteractive({ useHandCursor: true }).on("pointerdown", () => {
			registerHelper.updatePenguinColor(create_module_swatchContentFill_1, create_module_paperdollContentFill);
            this.penguinColor = "pink";
        });

        // Black Color
        create_module_swatchContentFill_2.setInteractive({ useHandCursor: true }).on("pointerdown", () => {
			registerHelper.updatePenguinColor(create_module_swatchContentFill_2, create_module_paperdollContentFill);
            this.penguinColor = "black";
        });

        // Red Color
        create_module_swatchContentFill_3.setInteractive({ useHandCursor: true }).on("pointerdown", () => {
			registerHelper.updatePenguinColor(create_module_swatchContentFill_3, create_module_paperdollContentFill);
            this.penguinColor = "red";
        });

        // Orange Color
        create_module_swatchContentFill_4.setInteractive({ useHandCursor: true }).on("pointerdown", () => {
            registerHelper.updatePenguinColor(create_module_swatchContentFill_4, create_module_paperdollContentFill);
            this.penguinColor = "orange";
        });

        // Yellow Color
        create_module_swatchContentFill_5.setInteractive({ useHandCursor: true }).on("pointerdown", () => {
            registerHelper.updatePenguinColor(create_module_swatchContentFill_5, create_module_paperdollContentFill);
            this.penguinColor = "yellow";
        });

        // Purple Color
        create_module_swatchContentFill_6.setInteractive({ useHandCursor: true }).on("pointerdown", () => {
            registerHelper.updatePenguinColor(create_module_swatchContentFill_6, create_module_paperdollContentFill);
            this.penguinColor = "purple";
        });

        // Brown Color
        create_module_swatchContentFill_8.setInteractive({ useHandCursor: true }).on("pointerdown", () => {
            registerHelper.updatePenguinColor(create_module_swatchContentFill_8, create_module_paperdollContentFill);
            this.penguinColor = "brown";
        });

        // Light Pink Color
        create_module_swatchContentFill_9.setInteractive({ useHandCursor: true }).on("pointerdown", () => {
            registerHelper.updatePenguinColor(create_module_swatchContentFill_9, create_module_paperdollContentFill);
            this.penguinColor = "light_pink";
        });

        // Dark Green Color
        create_module_swatchContentFill_10.setInteractive({ useHandCursor: true }).on("pointerdown", () => {
            registerHelper.updatePenguinColor(create_module_swatchContentFill_10, create_module_paperdollContentFill);
            this.penguinColor = "dark_green";
        });

        // cyan Color
        create_module_swatchContentFill_11.setInteractive({ useHandCursor: true }).on("pointerdown", () => {
            registerHelper.updatePenguinColor(create_module_swatchContentFill_11, create_module_paperdollContentFill);
            this.penguinColor = "cyan";
        });

        // Lime green color
        create_module_swatchContentFill_12.setInteractive({ useHandCursor: true }).on("pointerdown", () => {
            registerHelper.updatePenguinColor(create_module_swatchContentFill_12, create_module_paperdollContentFill);
            this.penguinColor = "lime_green";
        });

        // Cyan color
        create_module_swatchContentFill_13.setInteractive({ useHandCursor: true }).on("pointerdown", () => {
            registerHelper.updatePenguinColor(create_module_swatchContentFill_13, create_module_paperdollContentFill);
            this.penguinColor = "turquoise";
        });

        // beige color
        create_module_swatchContentFill_14.setInteractive({ useHandCursor: true }).on("pointerdown", () => {
            registerHelper.updatePenguinColor(create_module_swatchContentFill_14, create_module_paperdollContentFill);
            this.penguinColor = "beige";
        });

        // Maroon
        create_module_swatchContentFill_15.setInteractive({ useHandCursor: true }).on("pointerdown", () => {
            registerHelper.updatePenguinColor(create_module_swatchContentFill_15, create_module_paperdollContentFill);
            this.penguinColor = "maroon";
        });

        // Lavender
        create_module_swatchContentFill_16.setInteractive({ useHandCursor: true }).on("pointerdown", () => {
            registerHelper.updatePenguinColor(create_module_swatchContentFill_16, create_module_paperdollContentFill);
            this.penguinColor = "lavender";
        });

        // Idk color
        create_module_swatchContentFill_17.setInteractive({ useHandCursor: true }).on("pointerdown", () => {
            registerHelper.updatePenguinColor(create_module_swatchContentFill_17, create_module_paperdollContentFill);
            this.penguinColor = "light_pink";
        });

        // Biege
        create_module_swatchContentFill_18.setInteractive({ useHandCursor: true }).on("pointerdown", () => {
            registerHelper.updatePenguinColor(create_module_swatchContentFill_18, create_module_paperdollContentFill);
            this.penguinColor = "biege";
        });

        create_module_swatchContentFill_19.setInteractive({ useHandCursor: true }).on("pointerdown", () => {
            registerHelper.updatePenguinColor(create_module_swatchContentFill_19, create_module_paperdollContentFill);
            this.penguinColor = "fuck_knows";
        });

        // penguin username input
        penguinNameInputBox.addEventListener("input", (event) => {
			const input = registerHelper.handleInputEvent(event, create_penguin_display_text);
			this.username = input;
        });

        // First password box input
        passwordInputBox.addEventListener("input", (event) => {
            const input = registerHelper.handleInputEvent(event, enter_password_display_text);
			this.password = input;
        });

        // Confirm password input
        passwordConfirmInputBox.addEventListener("input", (event) => {
			const input = registerHelper.handleInputEvent(event, enter_password_display_text_1);
			this.confirmPassword = input;
        });

        // Email input
        emailInput.addEventListener("input", (event) => {
			const input = registerHelper.handleInputEvent(event, email_address_display_text);
			this.email = input;
        });

        // click next button (submit)
        create_module_nextButton.setInteractive({ useHandCursor: true }).on("pointerdown", () => {
            registerHelper.registerPenguin(this.username, this.password, this.email, this.penguinColor);
        });

        this.events.emit("scene-awake");
    }

	shutdown() {
		document.getElementById("usernameInput")?.remove();
		document.getElementById("passwordInput")?.remove();
		document.getElementById("confirmPasswordInput")?.remove();
		document.getElementById("emailInput")?.remove();
	}
}