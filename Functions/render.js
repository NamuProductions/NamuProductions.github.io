import { unstartedScreen } from "./unstartedScreen.js";
import { questionsScreen } from "./questionsScreen.js";
import { gameOverScreen } from "./gameOverScreen.js";

export function render(gameState, questions) {
    const root = document.getElementById('root');
    root.innerHTML = "";

    if (gameState.gameState === 'UNSTARTED') {
        root.append(unstartedScreen(gameState));
    } else if (gameState.gameState === 'PLAYING') {
        root.append(questionsScreen(gameState, questions));
    } else if (gameState.gameState === 'GAME_OVER') {
        root.append(gameOverScreen(gameState));
    }
}
