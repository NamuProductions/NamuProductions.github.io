import { updateQuestions } from "./updateQuestions.js";
import { showEndScreen } from "./showEndScreen.js";

export function createNextButton(updateQuestion, currentQuestionIndex, questions, questionContainer, score) {
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.classList.add('next-button');

    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            updateQuestions(currentQuestionIndex, questions, questionContainer, nextButton, score);
        } else {
            showEndScreen(score, questions.length);
        }
    });

    return nextButton;
}
