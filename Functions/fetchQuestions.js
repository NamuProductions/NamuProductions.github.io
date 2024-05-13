import {gameState} from "./gameState.js";

export async function fetchQuestions() {
    let numberOfQuestions = 3;
    const difficulty = gameState.selectedDifficulty.toLowerCase();
    try {
        const response = await fetch(`https://opentdb.com/api.php?amount=${numberOfQuestions}&category=10&difficulty=${difficulty}&type=multiple`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return decodeHTMLCharacters(data.results);
    } catch (error) {
        console.error('Error fetching questions:', error);
        return [];
    }
}

function decodeHTMLCharacters(results) {
    return results.map(question => {
        const decodedQuestion = decodeHTML(question.question);
        const decodedIncorrectAnswers = question.incorrect_answers.map(answer => decodeHTML(answer));
        const decodedCorrectAnswer = decodeHTML(question.correct_answer);
        return {
            ...question,
            question: decodedQuestion,
            incorrect_answers: decodedIncorrectAnswers,
            correct_answer: decodedCorrectAnswer
        };
    });
}

function decodeHTML(html) {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
}
