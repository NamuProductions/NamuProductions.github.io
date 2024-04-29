export function render(gameState, onStart, onAnswer, onNext) {
        const root = document.getElementById('root');
    root.innerHTML = "";

    if (gameState === 'UNSTARTED') {
        root.append(unstartedScreen(gameState, onStart));
    } else if (gameState === 'PLAYING') {
        root.append(questionsScreen(state, onAnswer, onNext))
    } else if (gameState === 'GAME_OVER') {
        root.append(gameOverScreen(state, onStart));
    }


}