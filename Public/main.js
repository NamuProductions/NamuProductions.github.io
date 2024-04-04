import {showScreen} from "../Functions/showScreen";


document.addEventListener("DOMContentLoaded", function () {
    const root = document.getElementById('root');
    const nameScreen = showScreen();
    root.appendChild(nameScreen);
});


