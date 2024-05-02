export function questionByIndex(gameState) {
    console.log(gameState.questions);
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

    return {
        question: questionText,
        correctAnswer: correctAnswer,
        possibleAnswers: possibleAnswers,
        totalQuestions: totalQuestions
    };
}
