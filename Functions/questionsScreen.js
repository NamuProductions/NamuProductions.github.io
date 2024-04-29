export function questionsScreen(onAnswer, onNext) {
    const screen = document.createElement('div');
    questionContainer.innerHTML = '';

    const currentQuestion = questions[currentQuestionIndex];
    const { question, correct_answer, incorrect_answers } = currentQuestion;

    showQuestion(questionContainer, question);

    const options = incorrect_answers.concat(correct_answer);
    const shuffledOptions = shuffle(options);

    showOptions(questionContainer, shuffledOptions);

    const nextButton = createNextButton(questionContainer);
    nextButton.style.display = 'none';
    apiQuizContainer.appendChild(nextButton);

    nextButton.addEventListener('click', onNext);

    questionContainer.querySelectorAll('.option-button').forEach(optionButton => {
        optionButton.addEventListener('click', () => {
            handleOptionClick(optionButton, correct_answer, nextButton);
        });
    });
    return screen;
}

function showQuestion(questionContainer, question) {
    const questionElement = document.createElement('h1');
    questionElement.textContent = question;
    questionContainer.appendChild(questionElement);
}

function showOptions(questionContainer, options) {
    options.forEach(option => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.classList.add('option-button');
        questionContainer.appendChild(optionButton);
    });
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function createNextButton(questionContainer) {
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.classList.add('next-button');
    questionContainer.appendChild(nextButton);
    return nextButton;
    }