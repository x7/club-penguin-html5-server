import Phaser from "phaser";

// for now its alerts til we finish errors

export const penguinColors = Object.freeze({
    "teal": "teal",
    "dark_blue": "dark_blue",
    "green": "green",
    "coral": "coral",
    "yellow": "yellow",
    "purple": "purple",
    "dark_green": "dark_green",
    "orange": "orange",
    "black": "black",
    "light_blue": "light_blue",
    "lime": "lime",
    "brown": "brown",
    "pink": "pink",
    "red": "red"
});

export function updatePenguinColor(scene, penguinColorImage) {
    if(scene === null || !(scene instanceof Phaser.Scene) || scene.scene.key !== 'RegisterScene') {
        return;
    }

    const penguinOverlayColor = scene.register_penguin_overlay_color;
    if(scene.currentSelectedColor != null) {
        scene.currentSelectedColor.visible = false;
    } 

    const color = penguinColorImage.getData(scene.penguinColorDataTag);
    if(color == null) {
        alert("invalid color");
        return;
    }

    scene.penguinColor = color;
    penguinOverlayColor.tintFill = penguinColorImage.tintFill;
    penguinOverlayColor.tintTopLeft = penguinColorImage.tintTopLeft;
    penguinOverlayColor.tintTopRight = penguinColorImage.tintTopRight;
    penguinOverlayColor.tintBottomLeft = penguinColorImage.tintBottomLeft;
    penguinOverlayColor.tintBottomRight = penguinColorImage.tintBottomRight;
}

// todo make it so it doesnt undo the overlay if they already are selected
export function updateSelectedColor(scene, penguinColorSelectedOverlay) {
    if(scene === null || !(scene instanceof Phaser.Scene) || scene.scene.key !== 'RegisterScene') {
        return;
    }

    if(scene.currentSelectedColor != null && scene.currentSelectedColor !== penguinColorSelectedOverlay) {
        scene.currentSelectedColor.visible = false;
    }

    scene.currentSelectedColor = penguinColorSelectedOverlay;
}

export async function registerPenguin({ username, password, secondPassword, email, penguinColor }) {
    const validUsername = validateUsername(username);
    const validPassword = validatePassword(password);
    const samePassword = passwordMatches(password, secondPassword);
    const validEmail = validateEmail(email);
    const validPenguinColor = validatePenguinColor(penguinColor);

    if(!validUsername) {
        alert("invalid username");
        return;
    }

    if(!validPassword) {
        alert("invalid passowrd");
        return;
    }

    if(!samePassword) {
        alert("passwords dont match");
        return;
    }

    if(!validEmail) {
        alert("invalid email");
        return;
    }

    if(!validPenguinColor) {
        alert("invalid penguin color");
        return;
    }

    try {
        const request = await fetch("http://localhost:8080/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "username": username,
                "password": password,
                "email": email,
                "penguin_color": penguinColor
            })
        });

        const data = await request.json();
        if(request.status !== 200) {
            alert(data.reason);
            return;
        }

        alert("successfully created your penguin congrats nasdnasiosaiasnsa");
    } catch (error) {

    }
}

function validateUsername(username) {
    if(typeof username !== "string") {
        return false;
    }

    const trimmed = username.trim();
    const regex = /^[a-zA-Z0-9]{4,16}$/;

    return regex.test(trimmed);
}

function validatePassword(password) {
    if(typeof password !== "string") {
        return false;
    }

    if(password.length < 8) {
        return false;
    }

    const lettersRegex = /[A-Z]/;
    const numbersRegex = /[0-9]/;
    const specialCharacterRegex = /[^a-zA-Z0-9]/;

    if(!/[A-Z]/.test(password)) {
        return false;
    }

    if(!lettersRegex.test(password)) {
        return false;
    }

    if(!numbersRegex.test(password)) {
        return false;
    }

    if(!specialCharacterRegex.test(password)) {
        return false;
    }

    return true;
}

function passwordMatches(password, secondPassword) {
    if(typeof password !== "string" || typeof secondPassword !== "string") {
        return false;
    }

    return password === secondPassword;
}

function validateEmail(email) {
    if(typeof email !== 'string') {
        return;
    }

    const trimmed = email.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(trimmed);
}

function validatePenguinColor(color) {
    let valid = false;
    for(const penguinColor of Object.keys(penguinColors)) {
        if(penguinColor.toLowerCase() === color.toLowerCase()) {
            valid = true;
            break;
        }
    }   

    return valid;
}

export function onUsernameInput(scene, value) {
    const input = value.target.value;
    if(input === "" || input.length === 0) {
        scene.register_create_penguin_display_text.visible = true;
        return;
    }

    scene.register_create_penguin_display_text.visible = false;
    scene.username = input;
}

export function onPasswordInput(scene, value) {
    const input = value.target.value;
    if(input === "" || input.length === 0) {
        scene.register_enter_password_display_text.visible = true;
        return;
    }

    scene.register_enter_password_display_text.visible = false;
    scene.password = input;
}

export function onSecondPasswordInput(scene, value) {
    const input = value.target.value;
    if(input === "" || input.length === 0) {
        scene.register_reenter_password_display_text.visible = true;
        return;
    }

    scene.register_reenter_password_display_text.visible = false;
    scene.confirmPassword = input;
}

export function onEmailInput(scene, value) {
    const input = value.target.value;
    if(input === "" || input.length === 0) {
        scene.register_email_address_display_text.visible = true;
        return;
    }

    scene.register_email_address_display_text.visible = false;
    scene.email = input;
}

export function createInputCss(width, height) {
    return `
		width: ${width}px;
		height: ${height}px;
		background: transparent;
		border: none;
		outline: none;
		padding: 0;
		margin: 0;
		color: rgba(10, 1, 1, 1);
		font-family: "Arial Rounded MT Bold", Nunito, "Varela Round", sans-serif;
		font-size: 24px;
		font-weight: 700;
		line-height: 14px;
		letter-spacing: 0px;
		caret-color: rgba(0, 0, 0, 1);
		text-rendering: geometricPrecision;
		pointer-events: auto;
	`;
}