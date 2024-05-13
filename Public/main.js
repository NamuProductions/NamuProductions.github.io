import {render} from "../Functions/render.js";
import {gameState} from "../Functions/gameState.js";

async function init() {
    try {
        render(gameState);
    } catch (error) {
        console.error('Error initializing game:', error);
    }
}

document.addEventListener('DOMContentLoaded', init);
