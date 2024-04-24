export function updateScore(score, isCorrect) {
    return isCorrect ? score + 1 : score;
}
