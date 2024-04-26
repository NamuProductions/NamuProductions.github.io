import {theAnswerIs} from "./theAnswerIs.js";
import {updateScore} from "./updateScore.js";
import {createNextButton} from "./nextButtonHandler.js";
import {updateQuestions} from "./updateQuestions.js";

let nextButton;

export function displayQuestion(questions, questionContainer, apiQuizContainer) {
    let currentQuestionIndex = 0;
    let score = 0;

    questionContainer.innerHTML = '';
    const questionElement = document.createElement('h1');
    questionElement.textContent = questions[currentQuestionIndex].question;
    questionContainer.appendChild(questionElement);

    const options = questions[currentQuestionIndex].incorrect_answers.concat(questions[currentQuestionIndex].correct_answer);
    options.sort(() => Math.random() - 0.5);
    options.forEach(option => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.classList.add('option-button');
        optionButton.correctAnswer = questions[currentQuestionIndex].correct_answer;
        optionButton.addEventListener('click', () => {
            const isCorrect = theAnswerIs(optionButton, score);
            if (isCorrect) {
                updateScore();
            }
            nextButton.style.display = 'block';
        });
        questionContainer.appendChild(optionButton);
    });

    if (!nextButton) {
        nextButton = createNextButton(updateQuestions, currentQuestionIndex, questions, questionContainer, score);
        nextButton.style.display = 'none';
    }

    if (currentQuestionIndex < questions.length) {
        apiQuizContainer.appendChild(nextButton);
    } else {
        nextButton.style.display = 'none';
    }
}