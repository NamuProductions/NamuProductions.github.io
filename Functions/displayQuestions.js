import { theAnswerIs } from "./theAnswerIs.js";
import { createNextButton } from "./nextButtonHandler.js";
import { updateQuestions } from "./updateQuestions.js";

export function displayQuestions(questions) {
    let currentQuestionIndex = 0;
    let score = 0;

    const apiQuizContainer = document.createElement('div');
    apiQuizContainer.classList.add('container1');

    const questionContainer = document.createElement('div');
    questionContainer.classList.add('question-container');
    apiQuizContainer.appendChild(questionContainer);

    let nextButton;

    function displayQuestion() {
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
                const isCorrect = theAnswerIs(optionButton);
                if (isCorrect) {
                    score++;
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

    displayQuestion();

    apiQuizContainer.style.display = 'block';
    console.log('DisplayQuestions done correctly');
    return apiQuizContainer;
}
