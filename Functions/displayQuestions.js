import { theAnswerIs } from "./theAnswerIs.js";
import { createNextButton } from "./nextButton.js";
import { showEndScreen } from "./showEndScreen.js";
import {updateQuestions} from "./updateQuestions.js";
export function displayQuestions(questions) {
    let currentQuestionIndex = 0;
    let score = 0;
    let answered = false;

    const apiQuizContainer = document.createElement('div');
    apiQuizContainer.classList.add('container1');

    const questionContainer = document.createElement('div');
    questionContainer.classList.add('question-container');
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
            if (!answered) {
                const isCorrect = theAnswerIs(optionButton);
                if (isCorrect) {
                    score++;
                }
                answered = true;
                nextButton.disabled = false;
            }
        });
        questionContainer.appendChild(optionButton);
    });

    const nextButton = createNextButton();

    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            updateQuestions(currentQuestionIndex, questions, questionContainer, nextButton, answered);
        } else {
            showEndScreen(score, questions.length);
        }
    });

    apiQuizContainer.appendChild(questionContainer);
    apiQuizContainer.appendChild(nextButton);

    apiQuizContainer.style.display = 'block';
    console.log('DisplayQuestions done correctly');
    return apiQuizContainer;
}
