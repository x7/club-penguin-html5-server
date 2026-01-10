export async function registerPenguin(username, password, email, penguinColor) {
    const validUsername = validateUsernameInput();
    const validatePassword = validatePasswordInput();
    const validatePasswordConfirm = doPasswordsMatch();
    const validateEmail = validateEmailInput();

    if(!validUsername || !validatePassword || !validatePasswordConfirm || !validateEmail) {
        alert("failed")
        return;
    }

    try {
        const request = await fetch("http://localhost:8080/api/register", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "username": username,
                "password": password,
                "email": email,
                "penguinColor": penguinColor
            })
        });

        console.log(await request.json())
    } catch (error) {
        console.log(error)
        alert("error")
    }
}

export function validateUsernameInput() {
    const username = document.getElementById("penguinNameInput");
    const value = username.value;
    if(value.length < 3 || value.length > 16) {
        console.log("username has to be more than 3 characters and less than 16 characters");
        return false;
    }

    return true;
}

export function validatePasswordInput() {
    const password = document.getElementById("passwordInput");
    const value = password.value
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

    if(!passwordRegex.test(value)) {
        return false;
    }

    return true;
}

export function doPasswordsMatch() {
    const confirmPassword = document.getElementById("passwordConfirmInput");
    const firstPassword = document.getElementById("passwordInput");
    const confirmValue = confirmPassword.value;
    const firstValue = firstPassword.value;

    if(firstValue != confirmValue) {
        return false;
    }

    return true;
}

export function validateEmailInput() {
    const element = document.getElementById("emailInput");
    const value = element.value;
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if(!emailRegex.test(value)) {
        return false;
    }

    return true;
}

export function validatePenguinColor() {

}

export function updatePenguinColor(button, penguinColorImage) {
    if(button == null || penguinColorImage == null) {
        console.log("one of the buttons was null");
        return;
    }

    if(button.type.toLowerCase() != "image" || penguinColorImage.type.toLowerCase() != "image") {
        console.log("one of the provided images was not a image type");
        return;
    }

    penguinColorImage.tintFill = button.tintFill;
    penguinColorImage.tintTopLeft = button.tintTopLeft;
    penguinColorImage.tintTopRight = button.tintTopRight;
    penguinColorImage.tintBottomLeft = button.tintBottomLeft;
    penguinColorImage.tintBottomRight = button.tintBottomRight;
}

export function handleInputEvent(event, textElement) {
    const value = event.target.value
    const isTextVisible = textElement.visible

    if((value === "" || value.length === 0) && !isTextVisible) {
        textElement.visible = true;
        return;
    }

    textElement.visible = false;

    return value;
}