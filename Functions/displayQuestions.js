import {questionByIndex} from "./questionByIndex.js";


export function displayQuestions(questions) {

    const apiQuizContainer = document.createElement('div');
    apiQuizContainer.classList.add('container1');

    const questionContainer = document.createElement('div');
    questionContainer.classList.add('question-container');
    apiQuizContainer.appendChild(questionContainer);
    questionByIndex(questions, questionContainer, apiQuizContainer);

    apiQuizContainer.style.display = 'block';
    console.log('DisplayQuestions done correctly');
    return apiQuizContainer;
}
