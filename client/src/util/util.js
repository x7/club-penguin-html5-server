export function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function pickRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}