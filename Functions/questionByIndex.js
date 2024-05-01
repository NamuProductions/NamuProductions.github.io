export function questionByIndex(questions, gameState) {
    if (!Array.isArray(questions)) {
        console.error('Questions is not an array.');
        return null;
    }

    if (gameState.currentQuestionIndex < 0 || gameState.currentQuestionIndex >= questions.length) {
        console.error('currentQuestionIndex is out of range or invalid.');
        return null;
    }

    const question = questions[gameState.currentQuestionIndex];
    const questionText = question.question;
    const correctAnswer = question.correct_answer;
    const possibleAnswers = [...question.incorrect_answers, correctAnswer];
    const totalQuestions = questions.length;

    return {
        question: questionText,
        correctAnswer: correctAnswer,
        possibleAnswers: possibleAnswers,
        totalQuestions: totalQuestions
    };
}
