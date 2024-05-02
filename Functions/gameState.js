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
    console.log('Questions in gameStage');
}
export function startGame() {
    gameState.gameStage = 'PLAYING';
    console.log(gameState.gameStage);
    }