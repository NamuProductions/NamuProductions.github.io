import {theAnswerIs} from "./theAnswerIs.js";

export function updateQuestions(currentQuestionIndex, questions, questionContainer, nextButton, answered) {
    const question = questions[currentQuestionIndex].question;
    const options = questions[currentQuestionIndex].incorrect_answers.concat(questions[currentQuestionIndex].correct_answer);
    options.sort(() => Math.random() - 0.5);

    questionContainer.innerHTML = '';

    const questionElement = document.createElement('h1');
    questionElement.textContent = question;
    questionContainer.appendChild(questionElement);

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
}
