import {chooseDifficulty} from "../Functions/chooseDifficulty.js";

async function init() {
    try {
        chooseDifficulty();
    } catch (error) {
        console.error('Error initializing game:', error);
    }
}

document.addEventListener('DOMContentLoaded', init);
