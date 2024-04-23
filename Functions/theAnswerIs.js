import { checkAnswer } from './checkAnswer.js';

export function theAnswerIs(optionButton) {
    const selectedOption = optionButton.textContent;
    const correctAnswer = optionButton.dataset.correctAnswer;
    const isCorrect = checkAnswer(selectedOption, correctAnswer);

    if (isCorrect) {
        console.log('Correct');
    } else {
        console.log('Wrong, the correct answer is: ' + correctAnswer);
    }
}