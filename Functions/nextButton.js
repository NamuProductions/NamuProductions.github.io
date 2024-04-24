export function createNextButton(updateQuestion, showEndScreen, currentQuestionIndex, questions, answered, score) {
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.classList.add('next-button');
    nextButton.disabled = true;

    nextButton.addEventListener('click', () => {
        const totalQuestions = questions.length;
        if (currentQuestionIndex < totalQuestions) {
            updateQuestion();
            answered = false;
            nextButton.disabled = true;
        } else {
            showEndScreen(score, totalQuestions);
        }
    });

    return nextButton;
}
