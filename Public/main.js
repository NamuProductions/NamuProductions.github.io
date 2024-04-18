import {showScreen} from "../Functions/showScreen.js";
import {getName} from "../Functions/getName.js";
import {popupName} from "../Functions/popupName.js";
import {chooseTheme} from "../Functions/1chooseTheme.js";
import {sportsQuestionsScreen} from "../Functions/sportsQuestionsScreen.js";
import {natureQuestionsScreen} from "../Functions/natureQuestionsScreen.js";
import {chuckJoke} from "../Functions/chuckJoke.js";
import {apiQuiz} from "../Functions/apiQuiz.js";
// import {getQuestion} from "../Functions/getQuestion.js";


document.addEventListener("DOMContentLoaded", function () {
    const root = document.getElementById('root');
    const nameScreen = showScreen();
    root.appendChild(nameScreen);

    const nameForm = document.getElementById('name-form');
    nameForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const playerName = getName(nameForm);
        if (playerName === "") {
            throw new Error('Name needed');
        }
        root.appendChild(popupName());
        root.removeChild(nameScreen);

        root.appendChild(chooseTheme());

        const sports = document.getElementById('sports');
        const nature = document.getElementById('nature');
        sports.addEventListener('click', function (){
            root.innerHTML= '';
            root.appendChild(chuckJoke());

            root.appendChild(sportsQuestionsScreen());
        });
        nature.addEventListener('click', function(){
            root.innerHTML='';
            root.appendChild(chuckJoke());
            root.appendChild(apiQuiz());

            // root.appendChild(natureQuestionsScreen(apiQuiz()));
        });
    });


});


