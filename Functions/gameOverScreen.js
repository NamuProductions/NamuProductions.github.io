export function gameOverScreen(gameState, onStart) {
    const { score, totalQuestions } = gameState;

    const screen = document.createElement('div');
    screen.classList.add('end-screen');

    const scoreMessage = document.createElement('h2');
    scoreMessage.textContent = `Your score is: ${score} / ${totalQuestions}`;
    screen.appendChild(scoreMessage);

    const restartButton = document.createElement('button');
    restartButton.textContent = 'New Game';
    restartButton.classList.add('restart-button');
    restartButton.addEventListener('click', onStart);
    screen.appendChild(restartButton);

    return screen;
}
