export function getRandomWarning() {
    const warnings = [
        {
            "image": {
                "image_parent": "login_1",
                "image_name": "login-screen/carousel0",
                "x": 269,
                "y": 209,
                "scaleX": 0.7106714957345415,
                "scaleY": 0.6119120825117418
            },
            "text": {
                "text": "They could spend\nyour coins!",
                "font": "BurbankSmallBold",
                "fontSize": 26,
                "color": "0x000000",
                "x": 305,
                "y": 225,
                "scaleX": 1.0585856215070626,
                "scaleY": 1.0993152667516197
            }
        },
        {
            "image": {
                "image_parent": "login_1",
                "image_name": "login-screen/carousel1",
                "x": 269,
                "y": 209,
                "scaleX": 0.7106714957345415,
                "scaleY": 0.6119120825117418
            },
            "text": {
                "text": "They could change\nyour igloo!",
                "font": "BurbankSmallBold",
                "fontSize": 26,
                "color": "0xffffff",
                "x": 305,
                "y": 225,
                "scaleX": 1.0585856215070626,
                "scaleY": 1.0993152667516197
            }
        },
        {
            "image": {
                "image_parent": "login_1",
                "image_name": "login-screen/carousel2",
                "x": 269,
                "y": 209,
                "scaleX": 0.7106714957345415,
                "scaleY": 0.6119120825117418
            },
            "text": {
                "text": "They could get your\npenguin banned!",
                "font": "BurbankSmallBold",
                "fontSize": 26,
                "color": "0x000000",
                "x": 305,
                "y": 225,
                "scaleX": 1.0585856215070626,
                "scaleY": 1.0993152667516197
            }
        }
    ]

    return warnings[Math.floor(Math.random() * warnings.length)]; 
}