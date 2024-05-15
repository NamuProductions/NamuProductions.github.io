export function theAnswerIs(optionButton, currentQuestion, gameState) {
    const selectedOption = optionButton.textContent;
    const correctAnswer = currentQuestion.correctAnswer;
    const isCorrect = selectedOption === correctAnswer

    gameState.lastSelectedOption = selectedOption;

    if (isCorrect) {
        console.log('Correct ' + correctAnswer);
        gameState.score = updateScore(gameState, true)
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
    return isCorrect ? gameState.score + 1 : gameState.score;
}
