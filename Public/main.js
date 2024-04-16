import {showScreen} from "../Functions/showScreen.js";
import {getName} from "../Functions/getName.js";
import {popupName} from "../Functions/popupName.js";


document.addEventListener("DOMContentLoaded", function () {
    const root = document.getElementById('root');
    const nameScreen = showScreen();
    root.appendChild(nameScreen);

    const nameForm = document.getElementById('name-form');
    nameForm.addEventListener('submit', function (event) {
        event.preventDefault();
        getName(nameForm);

        root.appendChild(popupName());
    });
});


