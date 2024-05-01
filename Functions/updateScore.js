export function updateScore(gameState, isCorrect) {
    return isCorrect ? gameState.score + 1 : gameState.score;
}
