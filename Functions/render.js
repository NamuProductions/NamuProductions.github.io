import {gameState, startGame, clickNext, restartGame} from './gameState.js';
import {theAnswerIs} from "./theAnswerIs.js";
import {questionByIndex} from "./questionByIndex.js";

const root = document.getElementById('root');

export function render() {
    root.innerHTML = '';

    if (gameState.gameStage === 'UNSTARTED') {
        renderStartScreen();
    } else if (gameState.gameStage === 'PLAYING') {
        const currentQuestionData = questionByIndex(gameState);
        renderGameScreen(currentQuestionData);
    } else if (gameState.gameStage === 'GAME_OVER') {
        renderGameOverScreen();
    }
}

function renderStartScreen() {
    const startButton = document.createElement('button');
    startButton.textContent = 'Start Game';
    startButton.addEventListener('click', () => {
        startGame();
        render();
    });
    root.appendChild(startButton);
}

function renderGameScreen(questionData) {
    const screen = document.createElement('div');
    const messageElement = document.createElement('p');
    screen.appendChild(messageElement);

    showQuestion(screen, questionData.question);
    showOptions(screen, questionData.possibleAnswers);

    const nextButton = createNextButton(screen);
    nextButton.style.display = 'none';
    nextButton.addEventListener('click', () => clickNext(gameState));

    screen.querySelectorAll('.option-button').forEach(optionButton => {
        optionButton.addEventListener('click', () => {
            theAnswerIs(optionButton, questionData, gameState);
            console.log(gameState.score)
            nextButton.style.display = 'block';
        });
    });

    root.appendChild(screen);
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

function createNextButton(screen) {
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.classList.add('next-button');
    screen.appendChild(nextButton);
    return nextButton;
}

function renderGameOverScreen() {
    console.log('estamos en last window')
    const screen = document.createElement('div');
    screen.classList.add('end-screen');

    const scoreMessage = document.createElement('h2');
    scoreMessage.textContent = `Your score is: ${gameState.score} / ${gameState.totalQuestions}`;
    screen.appendChild(scoreMessage);

    const restartButton = document.createElement('button');
    restartButton.textContent = 'New Game';
    restartButton.classList.add('restart-button');
    restartButton.addEventListener('click', () => restartGame());
    screen.appendChild(restartButton);

    root.appendChild(screen);
    return screen;

}
