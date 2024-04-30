import {questionByIndex} from "./questionByIndex.js";
import {theAnswerIs} from "./theAnswerIs.js";
import {gameState} from "./gameState.js";

export function questionsScreen(onAnswer, onNext, currentIndex, questions) {
    console.log('questionScreen');
    const screen = document.createElement('div');
    if (questions && gameState) {
        if (gameState.currentQuestionIndex >= 0 && gameState.currentQuestionIndex < questions.length) {
            const currentQuestion = questionByIndex(questions, gameState);
            const {question, correctAnswer, possibleAnswers} = currentQuestion;

            showQuestion(screen, question);

            const shuffledOptions = shuffle(possibleAnswers);

            showOptions(screen, shuffledOptions);

            const nextButton = createNextButton(screen);
            nextButton.style.display = 'none';
            nextButton.addEventListener('click', onNext);

            screen.querySelectorAll('.option-button').forEach(optionButton => {
                optionButton.addEventListener('click', () => {
                    theAnswerIs(optionButton, correctAnswer, nextButton, gameState.score);
                });
            });
        } else {
            console.error('currentQuestionIndex is out of range or invalid.');
        }
    } else {
        console.error('Questions or gameState is undefined or null.');
    }

    return screen;
}

function showQuestion(screen, question) {
    const questionElement = document.createElement('h1');
    questionElement.textContent = question;
    screen.appendChild(questionElement);
}

function showOptions(screen, options) {
    options.forEach(option => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.classList.add('option-button');
        screen.appendChild(optionButton);
    });
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function createNextButton(screen) {
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.classList.add('next-button');
    screen.appendChild(nextButton);
    return nextButton;
}