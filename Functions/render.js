import {nextQuestion, restartGame, setDifficulty, setQuestions, startGame} from './gameState.js';
import {theAnswerIs} from "./theAnswerIs.js";
import {questionByIndex} from "./questionByIndex.js";
import {fetchQuestions} from "./fetchQuestions.js";
import { registerUser, loginUser } from '../Public/main.js';

const root = document.getElementById('root');

export function render(gameState) {
    root.innerHTML = '';
    if (gameState.gameStage === 'LOGIN') {
        renderLoginScreen(gameState);
    } else if (gameState.gameStage === "SELECT_DIFFICULTY") {
        renderDifficultyScreen(gameState);
    } else if (gameState.gameStage === 'UN_STARTED') {
        renderStartScreen(gameState);
    } else if (gameState.gameStage === 'PLAYING') {
        renderGameScreen(gameState);
    } else if (gameState.gameStage === 'GAME_OVER') {
        renderGameOverScreen(gameState);
    }
}

function renderLoginScreen(gameState) {
    const loginContainer = document.createElement('div');
    loginContainer.innerHTML = `
        <h2>Login</h2>
        <input type="email" id="login-email" placeholder="Email">
        <input type="password" id="login-password" placeholder="Password">
        <button id="login-button">Login</button>
        <h2>Register</h2>
        <input type="email" id="register-email" placeholder="Email">
        <input type="password" id="register-password" placeholder="Password">
        <button id="register-button">Register</button>
    `;

    loginContainer.querySelector('#login-button').addEventListener('click', async () => {

        const email = loginContainer.querySelector('#login-email').value;
        const password = loginContainer.querySelector('#login-password').value;
        const user = await loginUser(email, password);
        if (user) {
            gameState.gameStage = "SELECT_DIFFICULTY";
            render(gameState);
        }
    });

    loginContainer.querySelector('#register-button').addEventListener('click', async () => {
        const email = loginContainer.querySelector('#register-email').value;
        const password = loginContainer.querySelector('#register-password').value;
        const user = await registerUser(email, password);
        if (user) {
            gameState.gameStage = "SELECT_DIFFICULTY";
            render(gameState);
        }
    });

    root.appendChild(loginContainer);
}

async function renderDifficultyScreen(gameState) {
    backgroundMusic.volume = 0.2;
    questionMusic.volume = 0.5;
    playBackgroundMusic();
    const difficulty = document.createElement('div');
    difficulty.innerHTML = `
    <div id="difficulties" class="container1">
        <h1>CHOOSE DIFFICULTY</h1>
        <button id="EASY">Easy</button>
        <button id="MEDIUM">Medium</button>
        <button id="HARD">Hard</button>
    </div>`;


    const buttons = difficulty.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', async () => {

            const selectedDifficulty = button.id;
            setDifficulty(selectedDifficulty);
            await obtainGameStateQuestions();
            render(gameState);
        });
    });

    root.appendChild(difficulty);


    async function obtainGameStateQuestions() {
        const questions = await fetchQuestions();
        setQuestions(questions);
    }
}

function renderStartScreen(gameState) {
    const startButton = document.createElement('button');
    startButton.textContent = 'Start Game';
    startButton.addEventListener('click', () => {
        startGame();
        render(gameState);
    });
    root.appendChild(startButton);
}

function renderGameScreen(gameState) {
    fadeOutMusic(backgroundMusic, 2000);
    playQuestionMusic();
    const questionData = questionByIndex(gameState);
    const screen = document.createElement('div');
    const messageElement = document.createElement('p');
    screen.appendChild(messageElement);


    showQuestion(screen, questionData.question);
    showOptions(screen, questionData.possibleAnswers);

    screen.style.opacity = '0';

    setTimeout(() => {
        screen.style.opacity = '1';
        screen.classList.add('fade-in');
    }, 200);

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
        clearInterval(countdownInterval);
        nextQuestion(gameState);
        render(gameState);
    });

    screen.querySelectorAll('.option-button').forEach(optionButton => {
        optionButton.addEventListener('click', () => {
            clearInterval(countdownInterval);
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


function renderGameOverScreen(gameState) {
    fadeOutMusic(questionMusic, 4000);
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
        render(gameState);
    });
    screen.appendChild(restartButton);

    root.appendChild(screen);
    return screen;

}

const questionMusic = document.getElementById('question-music');
const backgroundMusic = document.getElementById('background-music');

function playBackgroundMusic() {
    backgroundMusic.play();
}

// function stopBackgroundMusic() {
//     backgroundMusic.pause();
// }

function playQuestionMusic() {
    questionMusic.play();
}

// function stopQuestionMusic() {
//     questionMusic.pause();
// }

function fadeOutMusic(audioElement, duration) {
    const fadeOutInterval = 50;
    const fadeOutSteps = duration / fadeOutInterval;
    const fadeOutStep = audioElement.volume / fadeOutSteps;

    const fadeOut = setInterval(() => {
        if (audioElement.volume > fadeOutStep) {
            audioElement.volume -= fadeOutStep;
        } else {
            clearInterval(fadeOut);
            audioElement.pause();
            audioElement.volume = 1.0;
        }
    }, fadeOutInterval);
}