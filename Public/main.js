import {render} from '../Functions/render.js';
import {fetchQuestions} from '../Functions/fetchQuestions.js';
import {gameState, setQuestions} from "../Functions/gameState.js";

async function init() {
    try {
        const questions = await fetchQuestions();
        setQuestions(questions);
        render(gameState);
    } catch (error) {
        console.error('Error initializing game:', error);
    }
}

document.addEventListener('DOMContentLoaded', init);
