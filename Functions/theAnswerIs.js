import {updateScore} from "./updateScore.js";

export function theAnswerIs(optionButton, score) {
    const selectedOption = optionButton.textContent;
    const correctAnswer = optionButton.correctAnswer;
    const isCorrect = selectedOption === correctAnswer
    if (isCorrect) {
        console.log('Correct ' + correctAnswer);
        score = updateScore(score, true)
    } else {
        console.log(selectedOption +' is wrong, the correct answer is: ' + correctAnswer);
    }
    const optionButtons = document.querySelectorAll('.option-button');
    optionButtons.forEach(button => {
        button.disabled = true;
    });
    return {isCorrect, score};
}