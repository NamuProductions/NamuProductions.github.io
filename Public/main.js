import { displayQuestions } from "../Functions/displayQuestions.js";
import { fetchQuestions } from "../Functions/fetchQuestions.js";
import { checkAnswer } from "../Functions/checkAnswer.js";

document.addEventListener("DOMContentLoaded", async function () {
    try {
        const root = document.getElementById('root');
        const questions = await fetchQuestions();
        const quizContainer = displayQuestions(questions);
        root.appendChild(quizContainer);

        quizContainer.addEventListener('click', (event) => {
            const selectedOption = event.target.textContent;
            const correctAnswer = event.target.dataset.correctAnswer;
            if (selectedOption) {
                const isCorrect = checkAnswer(selectedOption, correctAnswer);
                if (isCorrect) {
                    console.log('¡Correct!');
                } else {
                    console.log('Wrong, the correct answer is: ' + correctAnswer);
                }
            }
        });
    } catch (error) {
        console.error('Error initializing quiz:', error);
    }
});

















