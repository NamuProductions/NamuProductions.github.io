export function theAnswerIs(optionButton, currentQuestion, gameState) {
    const selectedOption = optionButton.textContent;
    const correctAnswer = currentQuestion.correctAnswer;
    const isCorrect = selectedOption === correctAnswer;

    gameState.lastSelectedOption = selectedOption;

    if (isCorrect) {
        console.log('Correct ' + correctAnswer);
    } else {
        console.log(selectedOption + ' is wrong, the correct answer is: ' + correctAnswer);
    }

    gameState.score = updateScore(gameState, isCorrect);

    const optionButtons = document.querySelectorAll('.option-button');
    optionButtons.forEach(button => {
        button.disabled = true;
    });

    return {
        isCorrect: isCorrect,
        correctAnswer: correctAnswer
    };
}

function updateScore(gameState, isCorrect) {
    let scoreChange = 0;

    if (isCorrect) {
        switch (gameState.selectedDifficulty.toLowerCase()) {
            case 'easy':
                scoreChange = 1;
                break;
            case 'medium':
                scoreChange = 2;
                break;
            case 'hard':
                scoreChange = 3;
                break;
            default:
                console.error('Unknown difficulty:', gameState.selectedDifficulty);
                break;
        }
    } else {
        switch (gameState.selectedDifficulty.toLowerCase()) {
            case 'easy':
                scoreChange = -1;
                break;
            case 'medium':
                scoreChange = -2;
                break;
            case 'hard':
                scoreChange = -3;
                break;
            default:
                console.error('Unknown difficulty:', gameState.selectedDifficulty);
                break;
        }
    }

    return gameState.score + scoreChange;
}
