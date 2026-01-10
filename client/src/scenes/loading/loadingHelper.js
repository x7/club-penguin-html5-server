// Will pick a random character to display the animations on
// Todo add minecart animation
export function pickRandomCharacter() {
    const characters = [
        [
           {
                'mainSpriteName': 'load-screen/pizzatoss0001',
                'animationName': 'load-pizzatoss-animation',
                'x': 513,
                'y': 4,
                'scaleX': 0.6056892634898927,
                'scaleY': 0.6700680230368443
            } 
        ],
        [
            {
                'mainSpriteName': 'load-screen/snowshovel0001',
                'animationName': 'load-snowshovel-animation',
                'x': 542,
                'y': 165,
                'scaleX': 0.5046644549177679,
                'scaleY': 0.557562204996745
            },
        ],
        // [
        //      {
        //         'mainSpriteName': 'load-screen/cartsurfer-flip0001',
        //         'animationName': 'load-cartsurfer-flip-animation',
        //         'x': 511,
        //         'y': 157,
        //         'scaleX': 0.5932878808998011,
        //         'scaleY': 0.5938541760285426,
        //     }
        // ]
    ]

    return characters[Math.floor(Math.random() * characters.length)];
}