import { theAnswerIs } from "./theAnswerIs.js";

export function updateQuestions(currentQuestionIndex, questions, questionContainer, nextButton, score) {
    questionContainer.innerHTML = '';
    const question = questions[currentQuestionIndex].question;
    const options = questions[currentQuestionIndex].incorrect_answers.concat(questions[currentQuestionIndex].correct_answer);
    options.sort(() => Math.random() - 0.5);

    const questionElement = document.createElement('h1');
    questionElement.textContent = question;
    questionContainer.appendChild(questionElement);

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

    nextButton.style.display = 'none';
}
