import {render} from "./render.js";

export const gameState = {
    gameStage: 'UNSTARTED',
    currentQuestionIndex: 0,
    score: 0,
    totalQuestions: 0,
    questions: []
};

export function setQuestions(questions) {
    gameState.questions = questions;
    gameState.totalQuestions = questions.length;
    console.log(gameState.gameStage);
}
export function startGame() {
    gameState.gameStage = 'PLAYING';
    console.log(gameState.gameStage);
    }

export function clickNext(gameState) {
    console.log(gameState.currentQuestionIndex)
    gameState.currentQuestionIndex++;
    console.log(gameState.currentQuestionIndex)

    if (gameState.currentQuestionIndex < gameState.totalQuestions) {
        render(gameState);
    } else {
        gameState.gameStage = 'GAME_OVER';
        console.log(gameState.gameStage);
        render(gameState);
    }
}

export function restartGame () {
    gameState.gameStage = 'UNSTARTED';
    gameState.currentQuestionIndex = 0;
    gameState.score = 0;
    gameState.totalQuestions = 0;
    console.log(gameState);

    location.reload();
}