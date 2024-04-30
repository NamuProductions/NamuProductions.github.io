import { onStart } from "../Functions/onStart.js";

document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById('startButton');
    startButton.addEventListener('click', onStart);
});




// import { fetchQuestions } from "../Functions/fetchQuestions.js";
// import {render} from "../Functions/render.js";
// import {onStart} from "../Functions/onStart.js";
// import {onAnswer} from "../Functions/onAnswer.js";
// import {onNext} from "../Functions/onNext.js";
//
// document.addEventListener("DOMContentLoaded", async function () {
//     const startButton = document.getElementById('startButton');
//     startButton.addEventListener('click', async function () {
//         try {
//             const root = document.getElementById('root');
//             const questions = await fetchQuestions();
//             const quizContainer = render(gameState, onStart, onAnswer, onNext);
//             root.innerHTML = "";
//             root.appendChild(quizContainer);
//         } catch (error) {
//             console.error('Error initializing quiz:', error);
//         }
//     });
// });
