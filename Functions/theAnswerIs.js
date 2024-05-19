export function theAnswerIs(optionButton, currentQuestion, gameState) {
    const selectedOption = optionButton.textContent;
    const correctAnswer = currentQuestion.correctAnswer;
    const isCorrect = selectedOption === correctAnswer;

    gameState.lastSelectedOption = selectedOption;

    if (isCorrect) {
        console.log('Correct ' + correctAnswer);
        gameState.score = updateScore(gameState, isCorrect);
    } else {
        console.log(selectedOption + ' is wrong, the correct answer is: ' + correctAnswer);
    }

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
    let scoreIncrease = 0;

    if (isCorrect) {
        switch (gameState.selectedDifficulty.toLowerCase()) {
            case 'easy':
                scoreIncrease = 1;
                break;
            case 'medium':
                scoreIncrease = 2;
                break;
            case 'hard':
                scoreIncrease = 3;
                break;
            default:
                console.error('Unknown difficulty:', gameState.selectedDifficulty);
                break;
        }
    }

    return gameState.score + scoreIncrease;
}
