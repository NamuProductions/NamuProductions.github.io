import { render } from "./render.js";
import { gameState } from "./gameState.js";

export function startGame(questions) {
    gameState.gameState = 'PLAYING';
    gameState.currentQuestionIndex = 0;
    gameState.score = 0;

    render(gameState, questions);
}

