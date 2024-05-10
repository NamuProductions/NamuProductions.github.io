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
}

export function startGame() {
    gameState.gameStage = 'PLAYING';
}

export function nextQuestion(gameState) {
    gameState.currentQuestionIndex++;

    if (gameState.currentQuestionIndex < gameState.totalQuestions) {
    } else {
        gameState.gameStage = 'GAME_OVER';
    }
}

export function restartGame() {
    gameState.gameStage = 'UNSTARTED';
    gameState.currentQuestionIndex = 0;
    gameState.score = 0;
    gameState.totalQuestions = 0;

}
