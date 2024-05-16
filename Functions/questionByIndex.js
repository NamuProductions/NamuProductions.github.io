export function questionByIndex(gameState) {
    if (!Array.isArray(gameState.questions)) {
        console.error('Questions is not an array.');
        return null;
    }

    if (gameState.currentQuestionIndex < 0 || gameState.currentQuestionIndex >= gameState.questions.length) {
        console.error('currentQuestionIndex is out of range or invalid.');
        return null;
    }

    const questionData = gameState.questions[gameState.currentQuestionIndex];
    const questionText = questionData.question;
    const correctAnswer = questionData.correct_answer;
    const possibleAnswers = [...questionData.incorrect_answers, correctAnswer];
    const totalQuestions = gameState.questions.length;

    const allAnswers = shuffleArray([...possibleAnswers]);

    return {
        question: questionText,
        correctAnswer: correctAnswer,
        possibleAnswers: allAnswers,
        totalQuestions: totalQuestions
    };
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}