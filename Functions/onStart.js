import { render } from "./render.js";
import { onAnswer } from "./onAnswer.js";
import { onNext } from "./onNext.js";

export function onStart(gameState) {
    gameState = 'PLAYING';
    console.log(gameState);
    render(gameState, onStart, onAnswer, onNext);
    return gameState;
}
