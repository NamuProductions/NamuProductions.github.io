import { fetchQuestions } from "./fetchQuestions.js";
import { onStart } from "../Public/index.js";
import { gameState } from "./gameState.js";


export function restartButtonHandler() {


    const root = document.getElementById('root');
    root.innerHTML = '<button id="startButton">Start Game</button>';

    const startButton = document.getElementById('startButton');
    startButton.addEventListener('click', async function () {
        try {
            gameState.gameState = 'UNSTARTED';
            gameState.currentQuestionIndex = 0;
            gameState.score = 0;
            gameState.totalQuestions = 0;

            const questions = await fetchQuestions();
            gameState.totalQuestions = questions.length;

            console.log(gameState.totalQuestions);
            console.log(gameState.gameState);
            onStart(gameState, questions);
        } catch (error) {
            console.error('Error initializing quiz:', error);
        }
    });
}
