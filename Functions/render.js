import {gameState, startGame, nextQuestion, restartGame} from './gameState.js';
import {theAnswerIs} from "./theAnswerIs.js";
import {questionByIndex} from "./questionByIndex.js";

const root = document.getElementById('root');

export function render(gameState) {
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
        render(gameState);
    });
    root.appendChild(startButton);
}

function renderGameScreen(questionData) {
    const screen = document.createElement('div');
    const messageElement = document.createElement('p');
    screen.appendChild(messageElement);

    showQuestion(screen, questionData.question);
    showOptions(screen, questionData.possibleAnswers);

    const temporizer = document.createElement("time");
    temporizer.textContent = '15';
    screen.appendChild(temporizer);
    let timeLeft = 15;
    const countdownInterval = setInterval(() => {
        timeLeft--;
        temporizer.textContent = timeLeft.toString();
        if (timeLeft === 0) {
            clearInterval(countdownInterval);
            temporizer.textContent = 'Time\'s up, go to the next question!';
            screen.querySelectorAll('.option-button').forEach(optionButton => {
                optionButton.disabled = true;
            });
            nextButton.style.display = 'block';
        }
    }, 1000);

    const nextButton = createNextButton(screen);
    nextButton.style.display = 'none';
    nextButton.addEventListener('click', () => {
        nextQuestion(gameState);
        render(gameState);
    });

    screen.querySelectorAll('.option-button').forEach(optionButton => {
        optionButton.addEventListener('click', () => {
            temporizer.style.display = 'none';
            const result = theAnswerIs(optionButton, questionData, gameState);
            showAnswer(screen, result);
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

function showAnswer(screen, result) {
    const answer = document.createElement('p');
    answer.textContent = result.isCorrect ? 'Correct!' : `Wrong! The correct answer is: ${result.correctAnswer}`;
    screen.appendChild(answer);
}


function renderGameOverScreen() {
    const screen = document.createElement('div');
    screen.classList.add('end-screen');

    const scoreMessage = document.createElement('h2');
    scoreMessage.textContent = `Your score is: ${gameState.score} / ${gameState.totalQuestions}`;
    screen.appendChild(scoreMessage);

    const restartButton = document.createElement('button');
    restartButton.textContent = 'New Game';
    restartButton.classList.add('restart-button');
    restartButton.addEventListener('click', () => {
        restartGame();
        location.reload();
    });
    screen.appendChild(restartButton);

    root.appendChild(screen);
    return screen;

}
