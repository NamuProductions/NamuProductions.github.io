import { showEndScreen } from "./showEndScreen.js";
import {displayQuestion} from "./displayQuestion.js";

export function createNextButton(updateQuestion, currentQuestionIndex, questions, questionContainer, score) {
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.classList.add('next-button');

    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion(currentQuestionIndex, questions, questionContainer, nextButton, score);
        } else {
            showEndScreen(score, questions.length);
        }
    });

    return nextButton;
}
