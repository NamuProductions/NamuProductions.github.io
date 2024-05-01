import { render } from "../Functions/render.js";

export function onStart(gameState, questions) {
    gameState.gameState = 'PLAYING';
    console.log(gameState);
    render(gameState, questions);
    return {gameState};
}

