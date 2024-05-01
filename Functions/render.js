import {unStartedScreen} from "./unStartedScreen.js";
import {questionsScreen} from "./questionsScreen.js";
import {gameOverScreen} from "./gameOverScreen.js";
import {questionByIndex} from "./questionByIndex.js";

export function render(gameState, questions) {
    const root = document.getElementById('root');
    root.innerHTML = "";

    if (gameState.gameState === 'UNSTARTED') {
        root.append(unStartedScreen());
    } else if (gameState.gameState === 'PLAYING') {
        const questionData = questionByIndex(gameState, questions)
        console.log('hemos llegado aquí')
        root.append(questionsScreen(gameState, questionData));
    } else if (gameState.gameState === 'GAME_OVER') {
        root.append(gameOverScreen(gameState));
    }
}