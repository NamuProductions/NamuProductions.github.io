export const gameState = {
    gameStage: 'UNSTARTED',
    currentQuestionIndex: 0,
    score: 0,
    totalQuestions: 0,
    questions: []
};

export function initializeGameState(questions) {
    gameState.questions = questions;
    gameState.totalQuestions = questions.length;
}

