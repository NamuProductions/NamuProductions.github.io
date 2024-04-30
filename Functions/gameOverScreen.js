export function gameOverScreen(onStart) {
    const screen = document.createElement('div');
    const apiQuizContainer = document.createElement('.container1');

    screen.classList.add('end-screen');

    const scoreMessage = document.createElement('h2');
    scoreMessage.textContent = `Your score is: ${score} / ${totalQuestions}`;
    screen.appendChild(scoreMessage);

    const restartButton = document.createElement('button');
    restartButton.textContent = 'New Game';
    restartButton.classList.add('restart-button');
    screen.appendChild(restartButton);

    apiQuizContainer.appendChild(screen);

    return screen;
}