import { displayQuestions } from "../Functions/displayQuestions.js";
import { fetchQuestions } from "../Functions/fetchQuestions.js";

document.addEventListener("DOMContentLoaded", async function () {
    const startButton = document.getElementById('startButton');
    startButton.addEventListener('click', async function () {
        try {
            const root = document.getElementById('root');
            const questions = await fetchQuestions();
            const quizContainer = displayQuestions(questions);
            root.innerHTML = "";
            root.appendChild(quizContainer);
        } catch (error) {
            console.error('Error initializing quiz:', error);
        }
    });
});
