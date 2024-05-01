import {render} from "./render.js";

export function onNext(gameState, questions) {
    console.log(gameState.currentQuestionIndex)
    gameState.currentQuestionIndex++;
    console.log(gameState.currentQuestionIndex)

    if (gameState.currentQuestionIndex < gameState.totalQuestions) {
        render(gameState, questions);
    } else {
        gameState.gameState = 'GAME_OVER';
        render(gameState, questions);
    }
}
