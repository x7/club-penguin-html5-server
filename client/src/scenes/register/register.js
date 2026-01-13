import Phaser from 'phaser';
import { updatePenguinColor, updateSelectedColor, registerPenguin, penguinColors, createInputCss, onUsernameInput, onPasswordInput, onSecondPasswordInput, onEmailInput } from './registerHelper.js';

// Todo: Error prompts

export class RegisterScene extends Phaser.Scene {
    constructor() {
        super("RegisterScene");
        this.username = null;
        this.password = null;
        this.confirmPassword = null;
        this.email = null;
        this.penguinColor = penguinColors.teal;
		this.currentSelectedColor = null;
		this.penguinColorDataTag = "penguin_color";
    }

    preload() {
        this.load.pack("create-pack", "public/phaser/register/create-pack.json");
		this.load.bitmapFont("BurbankSmallBold", "public/phaser/fonts/BurbankSmallBold.png", "public/phaser/fonts/BurbankSmallBold.xml");
    }

	create() {
		// register_main_background
		const register_main_background = this.add.image(633, -7, "create", "create-module/mainBackgroundConfirmation");
		register_main_background.scaleX = 0.842354994900877;
		register_main_background.scaleY = 0.7043206072203547;
		register_main_background.setOrigin(0.5, 0);

		// register_club_penguin_logo
		const register_club_penguin_logo = this.add.image(16, -3, "create", "create-module/logo");
		register_club_penguin_logo.scaleX = 0.8270256365654004;
		register_club_penguin_logo.scaleY = 0.7319500662489749;
		register_club_penguin_logo.setOrigin(0, 0);

		// register_penguin_body
		const register_penguin_body = this.add.image(168, 189, "create", "create-module/paperdollOutline");
		register_penguin_body.scaleX = 0.6378867510830845;
		register_penguin_body.scaleY = 0.6186047069759965;
		register_penguin_body.setOrigin(0, 0);

		// register_choose_penguin_name_box
		const register_choose_penguin_name_box = this.add.image(157, 568, "create", "create-module/chooseNameField");
		register_choose_penguin_name_box.scaleX = 0.75;
		register_choose_penguin_name_box.scaleY = 0.62;
		register_choose_penguin_name_box.setOrigin(0, 0);

		// register_create_penguin_name_text
		const register_create_penguin_name_text = this.add.text(164, 539, "", {});
		register_create_penguin_name_text.scaleX = 1.7925058706609729;
		register_create_penguin_name_text.scaleY = 1.9039375826120126;
		register_create_penguin_name_text.text = "Create Penguin Name:";
		register_create_penguin_name_text.setStyle({ "baselineX": 1, "baselineY": 1, "color": "#6B6B6B", "fontFamily": "Arial Rounded MT Bold, Nunito, Varela Round, sans-serif", "fontSize": "9.5px", "fontStyle": "bold", "stroke": "", "resolution": 4 });

		// register_create_penguin_bubble
		const register_create_penguin_bubble = this.add.image(77, 521, "create", "create-module/largeProgressBubble");
		register_create_penguin_bubble.scaleX = 0.6507266318022114;
		register_create_penguin_bubble.scaleY = 0.6238994133768057;
		register_create_penguin_bubble.setOrigin(0, 0);

		// register_create_penguin_bubble_text
		const register_create_penguin_bubble_text = this.add.text(93, 528, "", {});
		register_create_penguin_bubble_text.scaleX = 2.4877054298732717;
		register_create_penguin_bubble_text.scaleY = 2.7706885590922576;
		register_create_penguin_bubble_text.text = "1.";
		register_create_penguin_bubble_text.setStyle({ "align": "center", "color": "#FFFFFF", "fontFamily": "Arial Rounded MT Bold, Nunito, Varela Round, sans-serif", "fontSize": "14px", "fontStyle": "bold", "stroke": "#FFFFFF", "resolution": 4 });

		// register_choose_name_requirements_text
		const register_choose_name_requirements_text = this.add.text(160, 636, "", {});
		register_choose_name_requirements_text.scaleX = 1.5487428237305858;
		register_choose_name_requirements_text.scaleY = 1.6566697119179672;
		register_choose_name_requirements_text.text = "• 4 – 16 letters and numbers\n• Do not use your real name";
		register_choose_name_requirements_text.setStyle({ "color": "#7a7a7a", "fontFamily": "Arial Rounded MT Bold, Nunito, Varela Round, sans-serif", "fontSize": "10px", "fontStyle": "bold", "stroke": "#7a7a7a", "resolution": 4 });

		// register_finish_login_button
		const register_finish_login_button = this.add.image(1036, 626, "create", "create-module/nextButton");
		register_finish_login_button.scaleX = 0.5921897725219171;
		register_finish_login_button.scaleY = 0.7819105828441584;
		register_finish_login_button.setOrigin(0, 0);

		// create_module_nextButtonHover
		const register_finish_login_button_hover = this.add.image(1036, 626, "create", "create-module/nextButtonHover");
		register_finish_login_button_hover.scaleX = 0.5921897725219171;
		register_finish_login_button_hover.scaleY = 0.7819105828441584;
		register_finish_login_button_hover.setOrigin(0, 0);
		register_finish_login_button_hover.visible = false;

		// register_finish_login_button_arrow
		const register_finish_login_button_arrow = this.add.image(1128, 639, "create", "create-module/nextButtonArrow");
		register_finish_login_button_arrow.scaleX = 0.9950752732553921;
		register_finish_login_button_arrow.scaleY = 0.8115965846131568;
		register_finish_login_button_arrow.setOrigin(0, 0);

		// register_finish_login_button_text
		const register_finish_login_button_text = this.add.text(1036, 624, "", {});
		register_finish_login_button_text.scaleX = 1.647632836484964;
		register_finish_login_button_text.scaleY = 1.7094473842061118;
		register_finish_login_button_text.text = "Next\n";
		register_finish_login_button_text.setStyle({ "align": "center", "baselineX": 1, "baselineY": 1, "color": "#FFFFFF", "fontFamily": "Arial Rounded MT Bold, Nunito, Varela Round, sans-serif", "fontSize": "20px", "fontStyle": "bold", "maxLines": 1, "stroke": "#0B5E9E", "strokeThickness": 2, "shadow.offsetY": 2, "shadow.color": "#00000055", "shadow.fill": true, "resolution": 4 });
		register_finish_login_button_text.setPadding({"left":8,"top":4,"right":8,"bottom":4});

		// register_choose_penguin_color_bubble
		const register_choose_penguin_color_bubble = this.add.image(616, 49, "create", "create-module/largeProgressBubble");
		register_choose_penguin_color_bubble.scaleX = 0.6507266318022114;
		register_choose_penguin_color_bubble.scaleY = 0.6238994133768057;
		register_choose_penguin_color_bubble.setOrigin(0, 0);

		// register_penguin_color_teal
		const register_penguin_color_teal = this.add.image(713, 98, "create", "create-module/swatchContentFill");
		register_penguin_color_teal.scaleX = 0.8345768673365528;
		register_penguin_color_teal.scaleY = 0.8397749370643428;
		register_penguin_color_teal.setOrigin(0, 0);
		register_penguin_color_teal.tintFill = true;
		register_penguin_color_teal.tintTopLeft = 3065014;
		register_penguin_color_teal.tintTopRight = 3065014;
		register_penguin_color_teal.tintBottomLeft = 3065014;
		register_penguin_color_teal.tintBottomRight = 3065014;
		register_penguin_color_teal.setData(this.penguinColorDataTag, penguinColors.teal);

		// register_choose_penguin_color_text
		const register_choose_penguin_color_text = this.add.text(717, 70, "", {});
		register_choose_penguin_color_text.scaleX = 1.2911088940826791;
		register_choose_penguin_color_text.scaleY = 1.3911840253627448;
		register_choose_penguin_color_text.text = "Choose Penguin Color:\n";
		register_choose_penguin_color_text.setStyle({ "baselineX": 1, "baselineY": 1, "color": "#6B6B6B", "fontFamily": "Arial Rounded MT Bold, Nunito, Varela Round, sans-serif", "fontSize": "12px", "fontStyle": "bold", "stroke": "", "resolution": 4 });

		// register_choose_penguin_color_bubble_text
		const register_choose_penguin_color_bubble_text = this.add.text(634, 54, "", {});
		register_choose_penguin_color_bubble_text.scaleX = 2.4877054298732717;
		register_choose_penguin_color_bubble_text.scaleY = 2.7706885590922576;
		register_choose_penguin_color_bubble_text.text = "2.\n";
		register_choose_penguin_color_bubble_text.setStyle({ "align": "center", "color": "#FFFFFF", "fontFamily": "Arial Rounded MT Bold, Nunito, Varela Round, sans-serif", "fontSize": "14px", "fontStyle": "bold", "stroke": "#FFFFFF", "resolution": 4 });

		// register_create_password_bubble
		const register_create_password_bubble = this.add.image(616, 240, "create", "create-module/largeProgressBubble");
		register_create_password_bubble.scaleX = 0.6507266318022114;
		register_create_password_bubble.scaleY = 0.6238994133768057;
		register_create_password_bubble.setOrigin(0, 0);

		// register_create_password_bubble_text
		const register_create_password_bubble_text = this.add.text(634, 245, "", {});
		register_create_password_bubble_text.scaleX = 2.4877054298732717;
		register_create_password_bubble_text.scaleY = 2.7706885590922576;
		register_create_password_bubble_text.text = "3.\n";
		register_create_password_bubble_text.setStyle({ "align": "center", "color": "#FFFFFF", "fontFamily": "Arial Rounded MT Bold, Nunito, Varela Round, sans-serif", "fontSize": "14px", "fontStyle": "bold", "stroke": "#FFFFFF", "resolution": 10 });

		// register_create_password_text
		const register_create_password_text = this.add.text(717, 257, "", {});
		register_create_password_text.scaleX = 1.7925058706609729;
		register_create_password_text.scaleY = 1.9039375826120126;
		register_create_password_text.text = "Create Password:";
		register_create_password_text.setStyle({ "baselineX": 1, "baselineY": 1, "color": "#6B6B6B", "fontFamily": "Arial Rounded MT Bold, Nunito, Varela Round, sans-serif", "fontSize": "9.5px", "fontStyle": "bold", "stroke": "", "resolution": 4 });

		// register_create_password_first_box
		const register_create_password_first_box = this.add.image(702, 286, "create", "create-module/emailField");
		register_create_password_first_box.scaleX = 0.85;
		register_create_password_first_box.scaleY = 0.8;
		register_create_password_first_box.setOrigin(0, 0);

		// register_create_password_second_box
		const register_create_password_second_box = this.add.image(702, 349, "create", "create-module/emailField");
		register_create_password_second_box.scaleX = 0.85;
		register_create_password_second_box.scaleY = 0.8;
		register_create_password_second_box.setOrigin(0, 0);

		// register_email_under_text
		const register_email_under_text = this.add.text(713, 572, "", {});
		register_email_under_text.scaleX = 1.8487428237305858;
		register_email_under_text.scaleY = 1.654471079768003;
		register_email_under_text.text = "• Club Penguin will send your parent\n   an email with an activation code.";
		register_email_under_text.setStyle({ "color": "#7a7a7a", "fontFamily": "Arial Rounded MT Bold, Nunito, Varela Round, sans-serif", "fontSize": "8px", "fontStyle": "bold", "stroke": "#7a7a7a", "resolution": 4 });
		register_email_under_text.setLineSpacing(4);

		// register_email_bubble
		const register_email_bubble = this.add.image(616, 445, "create", "create-module/largeProgressBubble");
		register_email_bubble.scaleX = 0.6507266318022114;
		register_email_bubble.scaleY = 0.6238994133768057;
		register_email_bubble.setOrigin(0, 0);

		// register_parents_email_address_text
		const register_parents_email_address_text = this.add.text(717, 481, "", {});
		register_parents_email_address_text.scaleX = 1.6925058706609728;
		register_parents_email_address_text.scaleY = 1.8039375826120125;
		register_parents_email_address_text.text = "Parent's Email Address:\n";
		register_parents_email_address_text.setStyle({ "baselineX": 1, "baselineY": 1, "color": "#6B6B6B", "fontFamily": "Arial Rounded MT Bold, Nunito, Varela Round, sans-serif", "fontSize": "9.5px", "fontStyle": "bold", "stroke": "", "resolution": 4 });

		// register_parents_email_box
		const register_parents_email_box = this.add.image(704, 507, "create", "create-module/emailField");
		register_parents_email_box.scaleX = 0.85;
		register_parents_email_box.scaleY = 0.8;
		register_parents_email_box.setOrigin(0, 0);

		// register_parents_email_bubble_text
		const register_parents_email_bubble_text = this.add.text(634, 452, "", {});
		register_parents_email_bubble_text.scaleX = 2.4877054298732717;
		register_parents_email_bubble_text.scaleY = 2.7706885590922576;
		register_parents_email_bubble_text.text = "4.\n";
		register_parents_email_bubble_text.setStyle({ "align": "center", "color": "#FFFFFF", "fontFamily": "Arial Rounded MT Bold, Nunito, Varela Round, sans-serif", "fontSize": "14px", "fontStyle": "bold", "stroke": "#FFFFFF", "resolution": 4 });

		// register_password_requirements_text
		const register_password_requirements_text = this.add.text(713, 414, "", {});
		register_password_requirements_text.scaleX = 1.8487428237305858;
		register_password_requirements_text.scaleY = 1.654471079768003;
		register_password_requirements_text.text = "• At least 8 characters, one number, one\n  uppercase letter and one special character.";
		register_password_requirements_text.setStyle({ "color": "#7a7a7a", "fontFamily": "Arial Rounded MT Bold, Nunito, Varela Round, sans-serif", "fontSize": "8px", "fontStyle": "bold", "stroke": "#7a7a7a", "resolution": 4 });
		register_password_requirements_text.setLineSpacing(4);

		// register_penguin_overlay_color
		this.register_penguin_overlay_color = this.add.image(168, 189, "create", "create-module/paperdollContentFill");
		this.register_penguin_overlay_color.name = "register_penguin_overlay_color";
		this.register_penguin_overlay_color.scaleX = 0.6366517767866403;
		this.register_penguin_overlay_color.scaleY = 0.6186047069759965;
		this.register_penguin_overlay_color.setOrigin(0, 0);
		this.register_penguin_overlay_color.tintFill = true;
		this.register_penguin_overlay_color.tintTopLeft = 3065014;
		this.register_penguin_overlay_color.tintTopRight = 3065014;
		this.register_penguin_overlay_color.tintBottomLeft = 3065014;
		this.register_penguin_overlay_color.tintBottomRight = 3065014;

		// register_create_penguin_display_text
		this.register_create_penguin_display_text = this.add.text(178, 583, "", {});
		this.register_create_penguin_display_text.scaleX = 1.4945494276515807;
		this.register_create_penguin_display_text.scaleY = 1.8598924079869041;
		this.register_create_penguin_display_text.text = "Penguin Name";
		this.register_create_penguin_display_text.setStyle({ "color": "#9c9c9cff", "fontFamily": "Arial Rounded MT Bold, Nunito, Varela Round, sans-serif", "fontSize": "14px", "fontStyle": "bold", "stroke": "", "resolution": 4 });

		// register_email_address_display_text
		this.register_email_address_display_text = this.add.text(722, 520, "", {});
		this.register_email_address_display_text.scaleX = 1.4945494276515807;
		this.register_email_address_display_text.scaleY = 1.8598924079869041;
		this.register_email_address_display_text.text = "Enter parent's email address";
		this.register_email_address_display_text.setStyle({ "color": "#9c9c9cff", "fontFamily": "Arial Rounded MT Bold, Nunito, Varela Round, sans-serif", "fontSize": "12px", "fontStyle": "bold", "stroke": "", "resolution": 4 });

		// register_enter_password_display_text
		this.register_enter_password_display_text = this.add.text(722, 300, "", {});
		this.register_enter_password_display_text.scaleX = 1.4945494276515807;
		this.register_enter_password_display_text.scaleY = 1.8598924079869041;
		this.register_enter_password_display_text.text = "Enter password";
		this.register_enter_password_display_text.setStyle({ "color": "#9c9c9cff", "fontFamily": "Arial Rounded MT Bold, Nunito, Varela Round, sans-serif", "fontSize": "12px", "fontStyle": "bold", "stroke": "", "resolution": 4 });

		// register_reenter_password_display_text
		this.register_reenter_password_display_text = this.add.text(722, 364, "", {});
		this.register_reenter_password_display_text.scaleX = 1.4945494276515807;
		this.register_reenter_password_display_text.scaleY = 1.8598924079869041;
		this.register_reenter_password_display_text.text = "Confirm Password";
		this.register_reenter_password_display_text.setStyle({ "color": "#9c9c9cff", "fontFamily": "Arial Rounded MT Bold, Nunito, Varela Round, sans-serif", "fontSize": "12px", "fontStyle": "bold", "stroke": "", "resolution": 4 });

		// register_penguin_color_dark_blue
		const register_penguin_color_dark_blue = this.add.image(778, 98, "create", "create-module/swatchContentFill");
		register_penguin_color_dark_blue.scaleX = 0.8345768673365528;
		register_penguin_color_dark_blue.scaleY = 0.8397749370643428;
		register_penguin_color_dark_blue.setOrigin(0, 0);
		register_penguin_color_dark_blue.tintFill = true;
		register_penguin_color_dark_blue.tintTopLeft = 2047112;
		register_penguin_color_dark_blue.tintTopRight = 2047112;
		register_penguin_color_dark_blue.tintBottomLeft = 2047112;
		register_penguin_color_dark_blue.tintBottomRight = 2047112;
		register_penguin_color_dark_blue.setData(this.penguinColorDataTag, penguinColors.dark_blue);

		// register_penguin_color_green
		const register_penguin_color_green = this.add.image(843, 98, "create", "create-module/swatchContentFill");
		register_penguin_color_green.scaleX = 0.8345768673365528;
		register_penguin_color_green.scaleY = 0.8397749370643428;
		register_penguin_color_green.setOrigin(0, 0);
		register_penguin_color_green.tintFill = true;
		register_penguin_color_green.tintTopLeft = 3066993;
		register_penguin_color_green.tintTopRight = 3066993;
		register_penguin_color_green.tintBottomLeft = 3066993;
		register_penguin_color_green.tintBottomRight = 3066993;
		register_penguin_color_green.setData(this.penguinColorDataTag, penguinColors.green);

		// register_penguin_color_coral
		const register_penguin_color_coral = this.add.image(908, 98, "create", "create-module/swatchContentFill");
		register_penguin_color_coral.scaleX = 0.8345768673365528;
		register_penguin_color_coral.scaleY = 0.8397749370643428;
		register_penguin_color_coral.setOrigin(0, 0);
		register_penguin_color_coral.tintFill = true;
		register_penguin_color_coral.tintTopLeft = 16739179;
		register_penguin_color_coral.tintTopRight = 16739179;
		register_penguin_color_coral.tintBottomLeft = 16739179;
		register_penguin_color_coral.tintBottomRight = 16739179;
		register_penguin_color_coral.setData(this.penguinColorDataTag, penguinColors.coral);

		// register_penguin_color_yellow
		const register_penguin_color_yellow = this.add.image(973, 98, "create", "create-module/swatchContentFill");
		register_penguin_color_yellow.scaleX = 0.8345768673365528;
		register_penguin_color_yellow.scaleY = 0.8397749370643428;
		register_penguin_color_yellow.setOrigin(0, 0);
		register_penguin_color_yellow.tintFill = true;
		register_penguin_color_yellow.tintTopLeft = 16767293;
		register_penguin_color_yellow.tintTopRight = 16767293;
		register_penguin_color_yellow.tintBottomLeft = 16767293;
		register_penguin_color_yellow.tintBottomRight = 16767293;
		register_penguin_color_yellow.setData(this.penguinColorDataTag, penguinColors.yellow);

		// register_penguin_color_purple
		const register_penguin_color_purple = this.add.image(1038, 98, "create", "create-module/swatchContentFill");
		register_penguin_color_purple.scaleX = 0.8345768673365528;
		register_penguin_color_purple.scaleY = 0.8397749370643428;
		register_penguin_color_purple.setOrigin(0, 0);
		register_penguin_color_purple.tintFill = true;
		register_penguin_color_purple.tintTopLeft = 6966419;
		register_penguin_color_purple.tintTopRight = 6966419;
		register_penguin_color_purple.tintBottomLeft = 6966419;
		register_penguin_color_purple.tintBottomRight = 6966419;
		register_penguin_color_purple.setData(this.penguinColorDataTag, penguinColors.purple);

		// register_penguin_color_dark_green
		const register_penguin_color_dark_green = this.add.image(1103, 98, "create", "create-module/swatchContentFill");
		register_penguin_color_dark_green.scaleX = 0.8345768673365528;
		register_penguin_color_dark_green.scaleY = 0.8397749370643428;
		register_penguin_color_dark_green.setOrigin(0, 0);
		register_penguin_color_dark_green.tintFill = true;
		register_penguin_color_dark_green.tintTopLeft = 1793568;
		register_penguin_color_dark_green.tintTopRight = 1793568;
		register_penguin_color_dark_green.tintBottomLeft = 1793568;
		register_penguin_color_dark_green.tintBottomRight = 1793568;
		register_penguin_color_dark_green.setData(this.penguinColorDataTag, penguinColors.dark_green);

		// register_penguin_color_orange
		const register_penguin_color_orange = this.add.image(713, 162, "create", "create-module/swatchContentFill");
		register_penguin_color_orange.scaleX = 0.8345768673365528;
		register_penguin_color_orange.scaleY = 0.8397749370643428;
		register_penguin_color_orange.setOrigin(0, 0);
		register_penguin_color_orange.tintFill = true;
		register_penguin_color_orange.tintTopLeft = 16747586;
		register_penguin_color_orange.tintTopRight = 16747586;
		register_penguin_color_orange.tintBottomLeft = 16747586;
		register_penguin_color_orange.tintBottomRight = 16747586;
		register_penguin_color_orange.setData(this.penguinColorDataTag, penguinColors.orange);

		// register_penguin_color_black
		const register_penguin_color_black = this.add.image(778, 162, "create", "create-module/swatchContentFill");
		register_penguin_color_black.scaleX = 0.8345768673365528;
		register_penguin_color_black.scaleY = 0.8397749370643428;
		register_penguin_color_black.setOrigin(0, 0);
		register_penguin_color_black.tintFill = true;
		register_penguin_color_black.tintTopLeft = 3026478;
		register_penguin_color_black.tintTopRight = 3026478;
		register_penguin_color_black.tintBottomLeft = 3026478;
		register_penguin_color_black.tintBottomRight = 3026478;
		register_penguin_color_black.setData(this.penguinColorDataTag, penguinColors.black);

		// register_penguin_color_light_blue
		const register_penguin_color_light_blue = this.add.image(843, 162, "create", "create-module/swatchContentFill");
		register_penguin_color_light_blue.scaleX = 0.8345768673365528;
		register_penguin_color_light_blue.scaleY = 0.8397749370643428;
		register_penguin_color_light_blue.setOrigin(0, 0);
		register_penguin_color_light_blue.tintFill = true;
		register_penguin_color_light_blue.tintTopLeft = 3065087;
		register_penguin_color_light_blue.tintTopRight = 3065087;
		register_penguin_color_light_blue.tintBottomLeft = 3065087;
		register_penguin_color_light_blue.tintBottomRight = 3065087;
		register_penguin_color_light_blue.setData(this.penguinColorDataTag, penguinColors.light_blue);

		// register_penguin_color_lime
		const register_penguin_color_lime = this.add.image(908, 162, "create", "create-module/swatchContentFill");
		register_penguin_color_lime.scaleX = 0.8345768673365528;
		register_penguin_color_lime.scaleY = 0.8397749370643428;
		register_penguin_color_lime.setOrigin(0, 0);
		register_penguin_color_lime.tintFill = true;
		register_penguin_color_lime.tintTopLeft = 8191744;
		register_penguin_color_lime.tintTopRight = 8191744;
		register_penguin_color_lime.tintBottomLeft = 8191744;
		register_penguin_color_lime.tintBottomRight = 8191744;
		register_penguin_color_lime.setData(this.penguinColorDataTag, penguinColors.lime);

		// register_penguin_color_brown
		const register_penguin_color_brown = this.add.image(973, 162, "create", "create-module/swatchContentFill");
		register_penguin_color_brown.scaleX = 0.8345768673365528;
		register_penguin_color_brown.scaleY = 0.8397749370643428;
		register_penguin_color_brown.setOrigin(0, 0);
		register_penguin_color_brown.tintFill = true;
		register_penguin_color_brown.tintTopLeft = 9268799;
		register_penguin_color_brown.tintTopRight = 9268799;
		register_penguin_color_brown.tintBottomLeft = 9268799;
		register_penguin_color_brown.tintBottomRight = 9268799;
		register_penguin_color_brown.setData(this.penguinColorDataTag, penguinColors.brown);

		// register_penguin_color_pink
		const register_penguin_color_pink = this.add.image(1038, 162, "create", "create-module/swatchContentFill");
		register_penguin_color_pink.scaleX = 0.8345768673365528;
		register_penguin_color_pink.scaleY = 0.8397749370643428;
		register_penguin_color_pink.setOrigin(0, 0);
		register_penguin_color_pink.tintFill = true;
		register_penguin_color_pink.tintTopLeft = 16736162;
		register_penguin_color_pink.tintTopRight = 16736162;
		register_penguin_color_pink.tintBottomLeft = 16736162;
		register_penguin_color_pink.tintBottomRight = 16736162;
		register_penguin_color_pink.setData(this.penguinColorDataTag, penguinColors.pink);

		// register_penguin_color_red
		const register_penguin_color_red = this.add.image(1103, 162, "create", "create-module/swatchContentFill");
		register_penguin_color_red.scaleX = 0.8345768673365528;
		register_penguin_color_red.scaleY = 0.8397749370643428;
		register_penguin_color_red.setOrigin(0, 0);
		register_penguin_color_red.tintFill = true;
		register_penguin_color_red.tintTopLeft = 15022389;
		register_penguin_color_red.tintTopRight = 15022389;
		register_penguin_color_red.tintBottomLeft = 15022389;
		register_penguin_color_red.tintBottomRight = 15022389;
		register_penguin_color_red.setData(this.penguinColorDataTag, penguinColors.red);

		// register_penguin_color_teal_not_selected_overlay
		const register_penguin_color_teal_not_selected_overlay = this.add.image(712, 97, "create", "create-module/swatchOutline");
		register_penguin_color_teal_not_selected_overlay.scaleX = 0.8591034413975879;
		register_penguin_color_teal_not_selected_overlay.scaleY = 0.856933180792397;
		register_penguin_color_teal_not_selected_overlay.setOrigin(0, 0);
		register_penguin_color_teal_not_selected_overlay.tintFill = true;
		register_penguin_color_teal_not_selected_overlay.tintTopLeft = 0;
		register_penguin_color_teal_not_selected_overlay.tintTopRight = 0;
		register_penguin_color_teal_not_selected_overlay.tintBottomLeft = 0;
		register_penguin_color_teal_not_selected_overlay.tintBottomRight = 0;

		// register_penguin_color_blue_not_selected_overlay
		const register_penguin_color_dark_blue_not_selected_overlay = this.add.image(778, 98, "create", "create-module/swatchOutline");
		register_penguin_color_dark_blue_not_selected_overlay.scaleX = 0.8354456763003091;
		register_penguin_color_dark_blue_not_selected_overlay.scaleY = 0.8398088895446231;
		register_penguin_color_dark_blue_not_selected_overlay.setOrigin(0, 0);
		register_penguin_color_dark_blue_not_selected_overlay.tintFill = true;
		register_penguin_color_dark_blue_not_selected_overlay.tintTopLeft = 0;
		register_penguin_color_dark_blue_not_selected_overlay.tintTopRight = 0;
		register_penguin_color_dark_blue_not_selected_overlay.tintBottomLeft = 0;
		register_penguin_color_dark_blue_not_selected_overlay.tintBottomRight = 0;

		// register_penguin_color_green_not_selected_overlay
		const register_penguin_color_green_not_selected_overlay = this.add.image(842, 97, "create", "create-module/swatchOutline");
		register_penguin_color_green_not_selected_overlay.scaleX = 0.8591034413975879;
		register_penguin_color_green_not_selected_overlay.scaleY = 0.856933180792397;
		register_penguin_color_green_not_selected_overlay.setOrigin(0, 0);
		register_penguin_color_green_not_selected_overlay.tintFill = true;
		register_penguin_color_green_not_selected_overlay.tintTopLeft = 0;
		register_penguin_color_green_not_selected_overlay.tintTopRight = 0;
		register_penguin_color_green_not_selected_overlay.tintBottomLeft = 0;
		register_penguin_color_green_not_selected_overlay.tintBottomRight = 0;

		// register_penguin_color_coral_not_selected_overlay
		const register_penguin_color_coral_not_selected_overlay = this.add.image(907, 97, "create", "create-module/swatchOutline");
		register_penguin_color_coral_not_selected_overlay.scaleX = 0.8591034413975879;
		register_penguin_color_coral_not_selected_overlay.scaleY = 0.856933180792397;
		register_penguin_color_coral_not_selected_overlay.setOrigin(0, 0);
		register_penguin_color_coral_not_selected_overlay.tintFill = true;
		register_penguin_color_coral_not_selected_overlay.tintTopLeft = 0;
		register_penguin_color_coral_not_selected_overlay.tintTopRight = 0;
		register_penguin_color_coral_not_selected_overlay.tintBottomLeft = 0;
		register_penguin_color_coral_not_selected_overlay.tintBottomRight = 0;

		// register_penguin_color_yellow_not_selected_overlay
		const register_penguin_color_yellow_not_selected_overlay = this.add.image(972, 97, "create", "create-module/swatchOutline");
		register_penguin_color_yellow_not_selected_overlay.scaleX = 0.8591034413975879;
		register_penguin_color_yellow_not_selected_overlay.scaleY = 0.856933180792397;
		register_penguin_color_yellow_not_selected_overlay.setOrigin(0, 0);
		register_penguin_color_yellow_not_selected_overlay.tintFill = true;
		register_penguin_color_yellow_not_selected_overlay.tintTopLeft = 0;
		register_penguin_color_yellow_not_selected_overlay.tintTopRight = 0;
		register_penguin_color_yellow_not_selected_overlay.tintBottomLeft = 0;
		register_penguin_color_yellow_not_selected_overlay.tintBottomRight = 0;

		// register_penguin_color_purple_not_selected_overlay
		const register_penguin_color_purple_not_selected_overlay = this.add.image(1038, 98, "create", "create-module/swatchOutline");
		register_penguin_color_purple_not_selected_overlay.scaleX = 0.8382221092546285;
		register_penguin_color_purple_not_selected_overlay.scaleY = 0.8437424249603463;
		register_penguin_color_purple_not_selected_overlay.setOrigin(0, 0);
		register_penguin_color_purple_not_selected_overlay.tintFill = true;
		register_penguin_color_purple_not_selected_overlay.tintTopLeft = 0;
		register_penguin_color_purple_not_selected_overlay.tintTopRight = 0;
		register_penguin_color_purple_not_selected_overlay.tintBottomLeft = 0;
		register_penguin_color_purple_not_selected_overlay.tintBottomRight = 0;

		// register_penguin_color_dark_green_not_selected_overlay
		const register_penguin_color_dark_green_not_selected_overlay = this.add.image(1103, 98, "create", "create-module/swatchOutline");
		register_penguin_color_dark_green_not_selected_overlay.scaleX = 0.8376081125208638;
		register_penguin_color_dark_green_not_selected_overlay.scaleY = 0.8492329747082579;
		register_penguin_color_dark_green_not_selected_overlay.setOrigin(0, 0);
		register_penguin_color_dark_green_not_selected_overlay.tintFill = true;
		register_penguin_color_dark_green_not_selected_overlay.tintTopLeft = 0;
		register_penguin_color_dark_green_not_selected_overlay.tintTopRight = 0;
		register_penguin_color_dark_green_not_selected_overlay.tintBottomLeft = 0;
		register_penguin_color_dark_green_not_selected_overlay.tintBottomRight = 0;

		// register_penguin_color_orange_not_selected_overlay
		const register_penguin_color_orange_not_selected_overlay = this.add.image(712, 162, "create", "create-module/swatchOutline");
		register_penguin_color_orange_not_selected_overlay.scaleX = 0.8591034413975879;
		register_penguin_color_orange_not_selected_overlay.scaleY = 0.8440148490195766;
		register_penguin_color_orange_not_selected_overlay.setOrigin(0, 0);
		register_penguin_color_orange_not_selected_overlay.tintFill = true;
		register_penguin_color_orange_not_selected_overlay.tintTopLeft = 0;
		register_penguin_color_orange_not_selected_overlay.tintTopRight = 0;
		register_penguin_color_orange_not_selected_overlay.tintBottomLeft = 0;
		register_penguin_color_orange_not_selected_overlay.tintBottomRight = 0;

		// register_penguin_color_black_not_selected_overlay
		const register_penguin_color_black_not_selected_overlay = this.add.image(778, 162, "create", "create-module/swatchOutline");
		register_penguin_color_black_not_selected_overlay.scaleX = 0.8332509727810387;
		register_penguin_color_black_not_selected_overlay.scaleY = 0.8440148490195766;
		register_penguin_color_black_not_selected_overlay.setOrigin(0, 0);
		register_penguin_color_black_not_selected_overlay.tintFill = true;
		register_penguin_color_black_not_selected_overlay.tintTopLeft = 0;
		register_penguin_color_black_not_selected_overlay.tintTopRight = 0;
		register_penguin_color_black_not_selected_overlay.tintBottomLeft = 0;
		register_penguin_color_black_not_selected_overlay.tintBottomRight = 0;

		// register_penguin_color_light_blue_not_selected_overlay
		const register_penguin_color_light_blue_not_selected_overlay = this.add.image(843, 162, "create", "create-module/swatchOutline");
		register_penguin_color_light_blue_not_selected_overlay.scaleX = 0.8287994823580699;
		register_penguin_color_light_blue_not_selected_overlay.scaleY = 0.8440148490195766;
		register_penguin_color_light_blue_not_selected_overlay.setOrigin(0, 0);
		register_penguin_color_light_blue_not_selected_overlay.tintFill = true;
		register_penguin_color_light_blue_not_selected_overlay.tintTopLeft = 0;
		register_penguin_color_light_blue_not_selected_overlay.tintTopRight = 0;
		register_penguin_color_light_blue_not_selected_overlay.tintBottomLeft = 0;
		register_penguin_color_light_blue_not_selected_overlay.tintBottomRight = 0;

		// register_penguin_color_lime_not_selected_overlay
		const register_penguin_color_lime_not_selected_overlay = this.add.image(909, 162, "create", "create-module/swatchOutline");
		register_penguin_color_lime_not_selected_overlay.scaleX = 0.8287994823580699;
		register_penguin_color_lime_not_selected_overlay.scaleY = 0.8440148490195766;
		register_penguin_color_lime_not_selected_overlay.setOrigin(0, 0);
		register_penguin_color_lime_not_selected_overlay.tintFill = true;
		register_penguin_color_lime_not_selected_overlay.tintTopLeft = 0;
		register_penguin_color_lime_not_selected_overlay.tintTopRight = 0;
		register_penguin_color_lime_not_selected_overlay.tintBottomLeft = 0;
		register_penguin_color_lime_not_selected_overlay.tintBottomRight = 0;

		// register_penguin_color_brown_not_selected_overlay
		const register_penguin_color_brown_not_selected_overlay = this.add.image(973, 162, "create", "create-module/swatchOutline");
		register_penguin_color_brown_not_selected_overlay.scaleX = 0.8234206148957577;
		register_penguin_color_brown_not_selected_overlay.scaleY = 0.8440148490195766;
		register_penguin_color_brown_not_selected_overlay.setOrigin(0, 0);
		register_penguin_color_brown_not_selected_overlay.tintFill = true;
		register_penguin_color_brown_not_selected_overlay.tintTopLeft = 0;
		register_penguin_color_brown_not_selected_overlay.tintTopRight = 0;
		register_penguin_color_brown_not_selected_overlay.tintBottomLeft = 0;
		register_penguin_color_brown_not_selected_overlay.tintBottomRight = 0;

		// register_penguin_color_pink_not_selected_overlay
		const register_penguin_color_pink_not_selected_overlay = this.add.image(1038, 162, "create", "create-module/swatchOutline");
		register_penguin_color_pink_not_selected_overlay.scaleX = 0.8234206148957577;
		register_penguin_color_pink_not_selected_overlay.scaleY = 0.8440148490195766;
		register_penguin_color_pink_not_selected_overlay.setOrigin(0, 0);
		register_penguin_color_pink_not_selected_overlay.tintFill = true;
		register_penguin_color_pink_not_selected_overlay.tintTopLeft = 0;
		register_penguin_color_pink_not_selected_overlay.tintTopRight = 0;
		register_penguin_color_pink_not_selected_overlay.tintBottomLeft = 0;
		register_penguin_color_pink_not_selected_overlay.tintBottomRight = 0;

		// register_penguin_color_red_not_selected_overlay
		const register_penguin_color_red_not_selected_overlay = this.add.image(1104, 163, "create", "create-module/swatchOutline");
		register_penguin_color_red_not_selected_overlay.scaleX = 0.8234206148957577;
		register_penguin_color_red_not_selected_overlay.scaleY = 0.8220667164927843;
		register_penguin_color_red_not_selected_overlay.setOrigin(0, 0);
		register_penguin_color_red_not_selected_overlay.tintFill = true;
		register_penguin_color_red_not_selected_overlay.tintTopLeft = 0;
		register_penguin_color_red_not_selected_overlay.tintTopRight = 0;
		register_penguin_color_red_not_selected_overlay.tintBottomLeft = 0;
		register_penguin_color_red_not_selected_overlay.tintBottomRight = 0;

		// register_penguin_color_teal_selected_overlay
		const register_penguin_color_teal_selected_overlay = this.add.image(712, 97, "create", "create-module/swatchSelected");
		register_penguin_color_teal_selected_overlay.scaleX = 0.8517664006439605;
		register_penguin_color_teal_selected_overlay.scaleY = 0.8440533587455629;
		register_penguin_color_teal_selected_overlay.setOrigin(0, 0);
		register_penguin_color_teal_selected_overlay.visible = true;

		// register_penguin_color_blue_selected_overlay
		const register_penguin_color_dark_blue_selected_overlay = this.add.image(778, 98, "create", "create-module/swatchSelected");
		register_penguin_color_dark_blue_selected_overlay.scaleX = 0.8354456763003091;
		register_penguin_color_dark_blue_selected_overlay.scaleY = 0.8398088895446231;
		register_penguin_color_dark_blue_selected_overlay.setOrigin(0, 0);
		register_penguin_color_dark_blue_selected_overlay.visible = false;

		// register_penguin_color_green_selected_overlay
		const register_penguin_color_green_selected_overlay = this.add.image(842, 97, "create", "create-module/swatchSelected");
		register_penguin_color_green_selected_overlay.scaleX = 0.8420622665841403;
		register_penguin_color_green_selected_overlay.scaleY = 0.8425738698217964;
		register_penguin_color_green_selected_overlay.setOrigin(0, 0);
		register_penguin_color_green_selected_overlay.visible = false;

		// register_penguin_color_coral_selected_overlay
		const register_penguin_color_coral_selected_overlay = this.add.image(907, 97, "create", "create-module/swatchSelected");
		register_penguin_color_coral_selected_overlay.scaleX = 0.8493544167552075;
		register_penguin_color_coral_selected_overlay.scaleY = 0.8474461268955638;
		register_penguin_color_coral_selected_overlay.setOrigin(0, 0);
		register_penguin_color_coral_selected_overlay.visible = false;

		// register_penguin_color_yellow_selected_overlay
		const register_penguin_color_yellow_selected_overlay = this.add.image(972, 97, "create", "create-module/swatchSelected");
		register_penguin_color_yellow_selected_overlay.scaleX = 0.8493544167552075;
		register_penguin_color_yellow_selected_overlay.scaleY = 0.8474461268955638;
		register_penguin_color_yellow_selected_overlay.setOrigin(0, 0);
		register_penguin_color_yellow_selected_overlay.visible = false;

		// register_penguin_color_purple_selected_overlay
		const register_penguin_color_purple_selected_overlay = this.add.image(1038, 98, "create", "create-module/swatchSelected");
		register_penguin_color_purple_selected_overlay.scaleX = 0.8332158188054465;
		register_penguin_color_purple_selected_overlay.scaleY = 0.8317142339371845;
		register_penguin_color_purple_selected_overlay.setOrigin(0, 0);
		register_penguin_color_purple_selected_overlay.visible = false;

		// register_penguin_color_dark_green_selected_overlay
		const register_penguin_color_dark_green_selected_overlay = this.add.image(1103, 98, "create", "create-module/swatchSelected");
		register_penguin_color_dark_green_selected_overlay.scaleX = 0.82613177790062;
		register_penguin_color_dark_green_selected_overlay.scaleY = 0.8317142339371845;
		register_penguin_color_dark_green_selected_overlay.setOrigin(0, 0);
		register_penguin_color_dark_green_selected_overlay.visible = false;

		// register_penguin_color_orange_selected_overlay
		const register_penguin_color_orange_selected_overlay = this.add.image(712, 162, "create", "create-module/swatchSelected");
		register_penguin_color_orange_selected_overlay.scaleX = 0.8431499251163271;
		register_penguin_color_orange_selected_overlay.scaleY = 0.839838496227611;
		register_penguin_color_orange_selected_overlay.setOrigin(0, 0);
		register_penguin_color_orange_selected_overlay.visible = false;

		// register_penguin_color_black_selected_overlay
		const register_penguin_color_black_selected_overlay = this.add.image(778, 162, "create", "create-module/swatchSelected");
		register_penguin_color_black_selected_overlay.scaleX = 0.8350168830529625;
		register_penguin_color_black_selected_overlay.scaleY = 0.839838496227611;
		register_penguin_color_black_selected_overlay.setOrigin(0, 0);
		register_penguin_color_black_selected_overlay.visible = false;

		// register_penguin_color_light_blue_selected_overlay
		const register_penguin_color_light_blue_selected_overlay = this.add.image(843, 162, "create", "create-module/swatchSelected");
		register_penguin_color_light_blue_selected_overlay.scaleX = 0.8236150038698904;
		register_penguin_color_light_blue_selected_overlay.scaleY = 0.839838496227611;
		register_penguin_color_light_blue_selected_overlay.setOrigin(0, 0);
		register_penguin_color_light_blue_selected_overlay.visible = false;

		// register_penguin_color_lime_selected_overlay
		const register_penguin_color_lime_selected_overlay = this.add.image(909, 162, "create", "create-module/swatchSelected");
		register_penguin_color_lime_selected_overlay.scaleX = 0.8236150038698904;
		register_penguin_color_lime_selected_overlay.scaleY = 0.839838496227611;
		register_penguin_color_lime_selected_overlay.setOrigin(0, 0);
		register_penguin_color_lime_selected_overlay.visible = false;

		// register_penguin_color_brown_selected_overlay
		const register_penguin_color_brown_selected_overlay = this.add.image(973, 161, "create", "create-module/swatchSelected");
		register_penguin_color_brown_selected_overlay.scaleX = 0.8135439677775654;
		register_penguin_color_brown_selected_overlay.scaleY = 0.8502526259280397;
		register_penguin_color_brown_selected_overlay.setOrigin(0, 0);
		register_penguin_color_brown_selected_overlay.visible = false;

		// register_penguin_color_pink_selected_overlay
		const register_penguin_color_pink_selected_overlay = this.add.image(1038, 162, "create", "create-module/swatchSelected");
		register_penguin_color_pink_selected_overlay.scaleX = 0.8135439677775654;
		register_penguin_color_pink_selected_overlay.scaleY = 0.8375142830234344;
		register_penguin_color_pink_selected_overlay.setOrigin(0, 0);
		register_penguin_color_pink_selected_overlay.visible = false;

		// register_penguin_color_red_selected_overlay
		const register_penguin_color_red_selected_overlay = this.add.image(1104, 163, "create", "create-module/swatchSelected");
		register_penguin_color_red_selected_overlay.scaleX = 0.8135439677775654;
		register_penguin_color_red_selected_overlay.scaleY = 0.8177652768366382;
		register_penguin_color_red_selected_overlay.setOrigin(0, 0);
		register_penguin_color_red_selected_overlay.visible = false;

		// register_penguin_name_error_bubble
		const register_penguin_name_error_bubble = this.add.image(307, 494, "create", "create-module/errorBubble");
		register_penguin_name_error_bubble.scaleX = 0.5341448617671243;
		register_penguin_name_error_bubble.scaleY = 0.6571161645273013;
		register_penguin_name_error_bubble.setOrigin(0.5, 0.17801);
		register_penguin_name_error_bubble.visible = false;

		// register_penguin_email_error_bubble
		const register_penguin_email_error_bubble = this.add.image(846, 638, "create", "create-module/errorBubble");
		register_penguin_email_error_bubble.scaleX = 0.5341448617671243;
		register_penguin_email_error_bubble.scaleY = 0.6571161645273013;
		register_penguin_email_error_bubble.setOrigin(0.5, 0.17801);
		register_penguin_email_error_bubble.flipY = true;
		register_penguin_email_error_bubble.visible = false;

		// register_penguin_password_error_bubble
		const register_penguin_password_error_bubble = this.add.image(849, 479, "create", "create-module/errorBubble");
		register_penguin_password_error_bubble.scaleX = 0.5341448617671243;
		register_penguin_password_error_bubble.scaleY = 0.6571161645273013;
		register_penguin_password_error_bubble.setOrigin(0.5, 0.17801);
		register_penguin_password_error_bubble.flipY = true;
		register_penguin_password_error_bubble.visible = false;

		// bitmaptext_1
		const register_penguin_name_error_bubble_text = this.add.bitmapText(207, 508, "BurbankSmallBold", "Username is not valid");
		register_penguin_name_error_bubble_text.scaleX = 0.6333024185274249;
		register_penguin_name_error_bubble_text.scaleY = 0.7938425303038038;
		register_penguin_name_error_bubble_text.tintTopLeft = 65536;
		register_penguin_name_error_bubble_text.tintTopRight = 0;
		register_penguin_name_error_bubble_text.tintBottomLeft = 0;
		register_penguin_name_error_bubble_text.tintBottomRight = 393216;
		register_penguin_name_error_bubble_text.text = "Username is not valid";
		register_penguin_name_error_bubble_text.fontSize = 32;
		register_penguin_name_error_bubble_text.visible = false;

		// Dom elements start here
		const inputPaddingX = 20;
		const inputPaddingY = 10;

		// Username input starts here
		const usernameInputWidth = register_choose_penguin_name_box.displayWidth - (inputPaddingX * 2);
		const usernameInputHeight = register_choose_penguin_name_box.displayHeight - (inputPaddingY * 2);
		this.usernameInput = this.add.dom(register_choose_penguin_name_box.x + inputPaddingX + usernameInputWidth / 2,
  			register_choose_penguin_name_box.y + inputPaddingY + usernameInputHeight / 2,
  			"input",
  			createInputCss(usernameInputWidth, usernameInputHeight)
		);

		this.usernameInput.setOrigin(0.5, 0.5);
		this.usernameInput.node.id = "register_username_input";
		this.usernameInput.node.type = "text";
		this.usernameInput.node.autocomplete = "off";
		this.usernameInput.node.spellcheck = false;
		this.usernameInput.node.addEventListener("input", (value) => {
			onUsernameInput(this, value);
		});
		// Username input ends here

		// Password input starts here
		const passwordInputWidth = register_create_password_first_box.displayWidth - (inputPaddingX * 2);
		const passwordInputHeight = register_create_password_first_box.displayHeight - (inputPaddingY * 2);
		this.passwordInput = this.add.dom(register_create_password_first_box.x + inputPaddingX + passwordInputWidth / 2,
  			register_create_password_first_box.y + inputPaddingY + passwordInputHeight / 2,
  			"input",
  			createInputCss(passwordInputWidth, passwordInputHeight)
		);

		this.passwordInput.setOrigin(0.5, 0.5);
		this.passwordInput.node.id = "register_password_input";
		this.passwordInput.node.type = "password";
		this.passwordInput.node.autocomplete = "off";
		this.passwordInput.node.spellcheck = false;
		this.passwordInput.node.addEventListener("input", (value) => {
			onPasswordInput(this, value);
		});
		// Password input ends here

		// Confirm password input starts here
		const confirmPasswordInputWidth = register_create_password_second_box.displayWidth - (inputPaddingX * 2);
		const confirmPasswordInputHeight = register_create_password_second_box.displayHeight - (inputPaddingY * 2);
		this.confirmPasswordInput = this.add.dom(register_create_password_second_box.x + inputPaddingX + confirmPasswordInputWidth / 2,
  			register_create_password_second_box.y + inputPaddingY + confirmPasswordInputHeight / 2,
  			"input",
  			createInputCss(confirmPasswordInputWidth, confirmPasswordInputHeight)
		);

		this.confirmPasswordInput.setOrigin(0.5, 0.5);
		this.confirmPasswordInput.node.id = "register_confirm_password_input";
		this.confirmPasswordInput.node.type = "password";
		this.confirmPasswordInput.node.autocomplete = "off";
		this.confirmPasswordInput.node.spellcheck = false;
		this.confirmPasswordInput.node.addEventListener("input", (value) => {
			onSecondPasswordInput(this, value);
		});
		// Confirm password input ends here

		// Email input starts here
		const emailInputWidth = register_parents_email_box.displayWidth - (inputPaddingX * 2);
		const emailInputHeight = register_parents_email_box.displayHeight - (inputPaddingY * 2);
		this.emailInput = this.add.dom(register_parents_email_box.x + inputPaddingX + emailInputWidth / 2,
  			register_parents_email_box.y + inputPaddingY + emailInputHeight / 2,
  			"input",
  			createInputCss(emailInputWidth, emailInputHeight)
		);

		this.emailInput.setOrigin(0.5, 0.5);
		this.emailInput.node.id = "register_email_input";
		this.emailInput.node.type = "text";
		this.emailInput.node.autocomplete = "off";
		this.emailInput.node.spellcheck = false;
		this.emailInput.node.addEventListener("input", (value) => {
			onEmailInput(this, value);
		});
		// Email input ends here

		// Dom elements end here

		// Setting all interactives sprites starts here
		register_finish_login_button.setInteractive({ useHandCursor: true });
		register_finish_login_button_hover.setInteractive({ useHandCursor: true });
		register_penguin_color_teal_not_selected_overlay.setInteractive({ useHandCursor: true });
		register_penguin_color_dark_blue_not_selected_overlay.setInteractive({ useHandCursor: true });
		register_penguin_color_green_not_selected_overlay.setInteractive({ useHandCursor: true });
		register_penguin_color_coral_not_selected_overlay.setInteractive({ useHandCursor: true });
		register_penguin_color_yellow_not_selected_overlay.setInteractive({ useHandCursor: true });
		register_penguin_color_purple_not_selected_overlay.setInteractive({ useHandCursor: true });
		register_penguin_color_dark_green_not_selected_overlay.setInteractive({ useHandCursor: true });
		register_penguin_color_orange_not_selected_overlay.setInteractive({ useHandCursor: true });
		register_penguin_color_black_not_selected_overlay.setInteractive({ useHandCursor: true });
		register_penguin_color_light_blue_not_selected_overlay.setInteractive({ useHandCursor: true });
		register_penguin_color_lime_not_selected_overlay.setInteractive({ useHandCursor: true });
		register_penguin_color_brown_not_selected_overlay.setInteractive({ useHandCursor: true });
		register_penguin_color_pink_not_selected_overlay.setInteractive({ useHandCursor: true });
		register_penguin_color_red_not_selected_overlay.setInteractive({ useHandCursor: true });
		// Setting all interactives sprites ends here

		// All interactive events start here
		// Register button events start here
		register_finish_login_button.on("pointerover", () => {
			register_finish_login_button.visible = false;
			register_finish_login_button_hover.visible = true;
		});

		register_finish_login_button_hover.on("pointerout", () => {
			register_finish_login_button.visible = true;
			register_finish_login_button_hover.visible = false;
		});

		register_finish_login_button_hover.on("pointerdown", () => {
			registerPenguin({
				username: this.username,
				password: this.password,
				secondPassword: this.confirmPassword,
				email: this.email,
				penguinColor: this.penguinColor
			});
		});
		// Register button events end here

		// All color related events start here
		// Teal
		register_penguin_color_teal_not_selected_overlay.on("pointerdown", () => {
			register_penguin_color_teal_selected_overlay.visible = true;
			updatePenguinColor(this, register_penguin_color_teal);
			updateSelectedColor(this, register_penguin_color_teal_selected_overlay);
		});

		// Dark Blue
		register_penguin_color_dark_blue_not_selected_overlay.on("pointerdown", () => {
			register_penguin_color_dark_blue_selected_overlay.visible = true;
			updatePenguinColor(this, register_penguin_color_dark_blue);
			updateSelectedColor(this, register_penguin_color_dark_blue_selected_overlay);
		});

		// Green
		register_penguin_color_green_not_selected_overlay.on("pointerdown", () => {
			register_penguin_color_green_selected_overlay.visible = true;
			updatePenguinColor(this, register_penguin_color_green);
			updateSelectedColor(this, register_penguin_color_green_selected_overlay);
		});

		// Coral
		register_penguin_color_coral_not_selected_overlay.on("pointerdown", () => {
			register_penguin_color_coral_selected_overlay.visible = true;
			updatePenguinColor(this, register_penguin_color_coral);
			updateSelectedColor(this, register_penguin_color_coral_selected_overlay);
		});

		// Yellow
		register_penguin_color_yellow_not_selected_overlay.on("pointerdown", () => {
			register_penguin_color_yellow_selected_overlay.visible = true;
			updatePenguinColor(this, register_penguin_color_yellow);
			updateSelectedColor(this, register_penguin_color_yellow_selected_overlay);
		});

		// Purple
		register_penguin_color_purple_not_selected_overlay.on("pointerdown", () => {
			register_penguin_color_purple_selected_overlay.visible = true;
			updatePenguinColor(this, register_penguin_color_purple);
			updateSelectedColor(this, register_penguin_color_purple_selected_overlay);
		});

		// Dark Green
		register_penguin_color_dark_green_not_selected_overlay.on("pointerdown", () => {
			register_penguin_color_dark_green_selected_overlay.visible = true;
			updatePenguinColor(this, register_penguin_color_dark_green);
			updateSelectedColor(this, register_penguin_color_dark_green_selected_overlay);
		});

		// Orange
		register_penguin_color_orange_not_selected_overlay.on("pointerdown", () => {
			register_penguin_color_orange_selected_overlay.visible = true;
			updatePenguinColor(this, register_penguin_color_orange);
			updateSelectedColor(this, register_penguin_color_orange_selected_overlay);
		});

		// Black
		register_penguin_color_black_not_selected_overlay.on("pointerdown", () => {
			register_penguin_color_black_selected_overlay.visible = true;
			updatePenguinColor(this, register_penguin_color_black);
			updateSelectedColor(this, register_penguin_color_black_selected_overlay);
		});

		// Light Blue
		register_penguin_color_light_blue_not_selected_overlay.on("pointerdown", () => {
			register_penguin_color_light_blue_selected_overlay.visible = true;
			updatePenguinColor(this, register_penguin_color_light_blue);
			updateSelectedColor(this, register_penguin_color_light_blue_selected_overlay);
		});

		// Lime
		register_penguin_color_lime_not_selected_overlay.on("pointerdown", () => {
			register_penguin_color_lime_selected_overlay.visible = true;
			updatePenguinColor(this, register_penguin_color_lime);
			updateSelectedColor(this, register_penguin_color_lime_selected_overlay);
		});

		// Brown
		register_penguin_color_brown_not_selected_overlay.on("pointerdown", () => {
			register_penguin_color_brown_selected_overlay.visible = true;
			updatePenguinColor(this, register_penguin_color_brown);
			updateSelectedColor(this, register_penguin_color_brown_selected_overlay);
		});

		// Pink
		register_penguin_color_pink_not_selected_overlay.on("pointerdown", () => {
			register_penguin_color_pink_selected_overlay.visible = true;
			updatePenguinColor(this, register_penguin_color_pink);
			updateSelectedColor(this, register_penguin_color_pink_selected_overlay);
		});

		// Red
		register_penguin_color_red_not_selected_overlay.on("pointerdown", () => {
			register_penguin_color_red_selected_overlay.visible = true;
			updatePenguinColor(this, register_penguin_color_red);
			updateSelectedColor(this, register_penguin_color_red_selected_overlay);
		});
		// All color related events end here

		// Some random extra stuff
		this.currentSelectedColor = register_penguin_color_teal_selected_overlay;

		// Emit event
		this.events.once("shutdown", this.shutdown);
		this.events.emit("scene-awake");
	}

	shutdown() {
		this.usernameInput.destroy();
		this.passwordInput.destroy();
		this.confirmPasswordInput.destroy();
		this.emailInput.destroy();
	}	
}