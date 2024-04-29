import { render } from "functions/render.js";
import {onAnswer} from "../Functions/onAnswer.js";
import {onNext} from "../Functions/onNext.js";

let gameState = 'UNSTARTED';
let currentQuestionIndex = 0;
let score = 0;

function onStart() {
    gameState = 'PLAYING';
    render(gameState, onStart, onAnswer, onNext);
}



