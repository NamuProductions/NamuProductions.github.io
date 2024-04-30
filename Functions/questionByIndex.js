export function questionByIndex(questions, gameState) {
    const currentQuestion = questions[gameState.currentQuestionIndex];
    const questionText = currentQuestion.question;
    const correctAnswer = currentQuestion.correct_answer;
    const possibleAnswers = [...currentQuestion.incorrect_answers, correctAnswer];
    const totalQuestions = questions.length;

    return {
        question: questionText,
        correctAnswer: correctAnswer,
        possibleAnswers: possibleAnswers,
        totalQuestions: totalQuestions
    };
}