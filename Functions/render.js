import {nextQuestion, restartGame, setDifficulty, setQuestions, startGame} from './gameState.js';
import {theAnswerIs} from "./theAnswerIs.js";
import {questionByIndex} from "./questionByIndex.js";
import {fetchQuestions} from "./fetchQuestions.js";

const root = document.getElementById('root');

export function render(gameState) {
    root.innerHTML = '';

    if (gameState.gameStage === "SELECT_DIFFICULTY") {
        renderDifficultyScreen(gameState)
    } else if (gameState.gameStage === 'UN_STARTED') {
        renderStartScreen(gameState);
    } else if (gameState.gameStage === 'PLAYING') {
        renderGameScreen(gameState);
    } else if (gameState.gameStage === 'GAME_OVER') {
        renderGameOverScreen(gameState);
    }
}

async function renderDifficultyScreen(gameState) {
    const difficulty = document.createElement('div');
    difficulty.innerHTML = `
    <div id="difficulties" class="container1">
        <h1>CHOOSE DIFFICULTY</h1>
        <button id="EASY">Easy</button>
        <button id="MEDIUM">Medium</button>
        <button id="HARD">Hard</button>
    </div>`;

    playBackgroundMusic();

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
    stopBackgroundMusic();
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


function renderGameOverScreen(gameState) {
    stopQuestionMusic();
    playBackgroundMusic();
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

const questionMusic = document.getElementById('question-music');
const backgroundMusic = document.getElementById('background-music');

function playBackgroundMusic() {
    backgroundMusic.play();
}

function stopBackgroundMusic() {
    backgroundMusic.pause();
}

function playQuestionMusic() {
    questionMusic.play();
}

function stopQuestionMusic() {
    questionMusic.pause();
}
