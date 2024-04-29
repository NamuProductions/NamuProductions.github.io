import {render} from "./render.js";

export function onNext() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        render(gameState, onStart, onAnswer, onNext);
    } else {
        gameState = 'GAME_OVER';
        render(gameState, onStart, onAnswer, onNext);
    }}