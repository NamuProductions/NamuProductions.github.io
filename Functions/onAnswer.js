import { questionByIndex } from "./questionByIndex.js";

export function onAnswer(selectedAnswer) {
    const { question, correctAnswer, possibleAnswers } = questionByIndex(questions, { currentIndex: currentQuestionIndex });

    if (selectedAnswer === correctAnswer) {
        score++;
    }


    clickNext();
}
