export function questionByIndex (questions, gameState) {
const currentIndex = gameState.currentIndex;
const currentQuestion = questions[currentIndex];
const questionText = currentQuestion.question;
const correctAnswer = currentQuestion.correct_answer;
const possibleAnswers = [...currentQuestion.incorrect_answers, correctAnswer];

return {
    question: questionText,
    correctAnswer: correctAnswer,
    possibleAnswers: possibleAnswers
};
}