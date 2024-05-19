export const gameState = {
    selectedDifficulty: "",
    gameStage: 'LOGIN',
    currentQuestionIndex: 0,
    score: 0,
    totalQuestions: 0,
    questions: [],
    wildCards: 0
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
    gameState.gameStage = 'SELECT_DIFFICULTY';
    gameState.currentQuestionIndex = 0;
    gameState.score = 0;
    gameState.totalQuestions = 0;

}

export const Difficulty = {
    EASY: 'easy',
    MEDIUM: 'medium',
    HARD: 'hard'
};

export function setDifficulty(difficulty) {
    if (!difficulty in Difficulty) {
        throw Error('Invalid difficulty value');
    } else {
        gameState.selectedDifficulty = difficulty;
        gameState.gameStage = 'UN_STARTED';
    }
}

export function setWildCards(difficulty) {
    if (difficulty) {
        switch (gameState.selectedDifficulty.toLowerCase()) {
            case 'easy':
                gameState.wildCards = 1;
                break;
            case 'medium':
                gameState.wildCards = 2;
                break;
            case 'hard':
                gameState.wildCards = 3;
                break;
            default:
                console.error('Unknown difficulty:', gameState.selectedDifficulty);
                break;
        }
    }
}
