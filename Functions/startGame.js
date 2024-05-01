import { render } from "./render.js";
import { gameState } from "./gameState.js";

export function startGame(questions) {
    gameState.gameState = 'PLAYING';
    gameState.currentQuestionIndex = 0;
    gameState.score = 0;
    console.log(gameState.gameState);
    render(gameState, questions);
}

