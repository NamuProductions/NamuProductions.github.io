import {unstartedScreen} from "./unstartedScreen.js";
import {questionsScreen} from "./questionsScreen.js";
import {gameOverScreen} from "./gameOverScreen.js";

export function render(gameState, onStart, onAnswer, onNext) {
        const root = document.getElementById('root');
    root.innerHTML = "";

    if (gameState.gameState === 'UNSTARTED') {
        root.append(unstartedScreen(gameState, onStart));
    } else if (gameState.gameState === 'PLAYING') {
        root.append(questionsScreen(gameState, onAnswer, onNext))
    } else if (gameState.gameState === 'GAME_OVER') {
        root.append(gameOverScreen(gameState, onStart));
    }
}