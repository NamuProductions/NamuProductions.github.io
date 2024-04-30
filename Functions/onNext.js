import {render} from "./render.js";
import {onAnswer} from "./onAnswer.js";
import {onStart} from "../Public/index.js";


export function onNext(totalQuestions, gameState) {
    gameState.currentQuestionIndex++;

    if (gameState.currentQuestionIndex < totalQuestions) {
        render(gameState, onStart, onAnswer, onNext, totalQuestions);
    } else {
        gameState.gameState = 'GAME_OVER';
        render(gameState, onStart, onAnswer, onNext, totalQuestions);
    }
}