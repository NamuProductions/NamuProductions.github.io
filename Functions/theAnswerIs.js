export function theAnswerIs(optionButton) {
    const selectedOption = optionButton.textContent;
    const correctAnswer = optionButton.correctAnswer;
    const isCorrect = selectedOption === correctAnswer
    console.log('The correct is ' + correctAnswer);
    if (isCorrect) {
        console.log('Correct');
    } else {
        console.log('Wrong, the correct answer is: ' + correctAnswer);
    }
    const optionButtons = document.querySelectorAll('.option-button');
    optionButtons.forEach(button => {
        button.disabled = true;
    });

    const nextButton = document.querySelector('.next-button');
    nextButton.disabled = false;

    return isCorrect;
}