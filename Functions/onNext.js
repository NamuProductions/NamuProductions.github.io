import {render} from "./render.js";
import {onAnswer} from "./onAnswer.js";
import {onStart} from "../Public/index.js";


export function onNext(gameState) {
    gameState.currentQuestionIndex++;

    if (gameState.currentQuestionIndex < gameState.totalQuestions) {
        render(gameState, onStart, onAnswer, onNext);
    } else {
        gameState.gameState = 'GAME_OVER';
        render(gameState, onStart, onAnswer, onNext);
    }
}
