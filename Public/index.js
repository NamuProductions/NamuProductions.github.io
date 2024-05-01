import { render } from "../Functions/render.js";
import { onAnswer } from "../Functions/onAnswer.js";
import { onNext } from "../Functions/onNext.js";

export function onStart(gameState, questions) {
    gameState.gameState = 'PLAYING';
    console.log(gameState);
    render(gameState, onStart, onAnswer, onNext, questions);
    return {gameState};
}

