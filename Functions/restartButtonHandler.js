import { displayQuestions } from "./displayQuestions.js";
import { fetchQuestions } from "./fetchQuestions.js";

export async function handleRestartButton(apiQuizContainer, currentQuestionIndex, score) {
    const endScreen = apiQuizContainer.querySelector('.end-screen');
    const restartButton = endScreen.querySelector('.restart-button');

    restartButton.addEventListener('click', async () => {
        currentQuestionIndex = 0;
        score = 0;
        apiQuizContainer.removeChild(endScreen);
        try {
            const questions = await fetchQuestions();
            clearQuizContainer(apiQuizContainer);
            const quizContainer = displayQuestions(questions);
            apiQuizContainer.appendChild(quizContainer);
        } catch (error) {
            console.error('Error initializing quiz:', error);
        }
    });
}

function clearQuizContainer(container) {
    container.innerHTML = '';
}
