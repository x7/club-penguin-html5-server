export function showWarningImage(scene, index) {
    const allWarningImages = getWarningImages();
    const warningImage = allWarningImages[index];

    const image = warningImage.image;
    const text = warningImage.text;

    // Image
    const imageToDisplay = scene.add.image(image.x, image.y, image.image_parent, image.image_name);
    imageToDisplay.scaleX = image.scaleX;
    imageToDisplay.scaleY = image.scaleY;
    imageToDisplay.setDepth(-1);

    // Text
    const textToDisplay = scene.add.bitmapText(text.x, text.y, text.font, text.text);
    textToDisplay.scaleX = text.scaleX;
    textToDisplay.scaleY = text.scaleY;
    textToDisplay.text = text.text;
    textToDisplay.fontSize = text.fontSize;
    textToDisplay.setTint(text.color);

    return {
        "image": imageToDisplay,
        "text": textToDisplay
    }
}

export function getWarningImages() {
    // Image
    const imageX = 305;
    const imageY = 253;
    const imageScaleX = 0.9447648119667182;
    const imageScaleY = 0.8595724450105905;

    // Text
    const textX = 320;
    const textY = 296;
    const textScaleX = 1.0585856215070626;
    const textScaleY = 1.0993152667516197;
    const textFontSize = 36;

    const warnings = [
        {
            "image": {
                "image_parent": "login",
                "image_name": "login-screen/carousel0",
                "x": imageX,
                "y": imageY,
                "scaleX": imageScaleX,
                "scaleY": imageScaleY
            },
            "text": {
                "text": "They could spend\nyour coins!",
                "font": "BurbankSmallBold",
                "fontSize": textFontSize,
                "color": "0x000000",
                "x": textX,
                "y": textY,
                "scaleX": textScaleX,
                "scaleY": textScaleY
            }
        },
        {
            "image": {
                "image_parent": "login",
                "image_name": "login-screen/carousel1",
                "x": imageX,
                "y": imageY,
                "scaleX": imageScaleX,
                "scaleY": imageScaleY
            },
            "text": {
                "text": "They could change\nyour igloo!",
                "font": "BurbankSmallBold",
                "fontSize": textFontSize,
                "color": "0xffffff",
                "x": textX,
                "y": textY,
                "scaleX": textScaleX,
                "scaleY": textScaleY
            }
        },
        {
            "image": {
                "image_parent": "login",
                "image_name": "login-screen/carousel2",
                "x": imageX,
                "y": imageY,
                "scaleX": imageScaleX,
                "scaleY": imageScaleY
            },
            "text": {
                "text": "They could get your\npenguin banned!",
                "font": "BurbankSmallBold",
                "fontSize": textFontSize,
                "color": "0x000000",
                "x": textX,
                "y": textY,
                "scaleX": textScaleX,
                "scaleY": textScaleY
            }
        }
    ]

    return warnings;
}