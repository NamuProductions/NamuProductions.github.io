import {showScreen} from "../Functions/showScreen.js";
import {getName} from "../Functions/getName.js";
import {popupName} from "../Functions/popupName.js";
import {chooseTheme} from "../Functions/1chooseTheme.js";
import {sportsQuestionsScreen} from "../Functions/sportsQuestionsScreen.js";
import {natureQuestionsScreen} from "../Functions/natureQuestionsScreen.js";


document.addEventListener("DOMContentLoaded", function () {
    const root = document.getElementById('root');
    const nameScreen = showScreen();
    root.appendChild(nameScreen);

    const nameForm = document.getElementById('name-form');
    nameForm.addEventListener('submit', function (event) {
        event.preventDefault();
        getName(nameForm);

        root.appendChild(popupName());
        root.removeChild(nameScreen);

        root.appendChild(chooseTheme());

        const sports = document.getElementById('sports');
        const nature = document.getElementById('nature');
        sports.addEventListener('click', function (){
            root.innerHTML= '';
            root.appendChild(sportsQuestionsScreen());
        });
        nature.addEventListener('click', function(){
            root.innerHTML='';
            root.appendChild(natureQuestionsScreen());
        });
    });


});


