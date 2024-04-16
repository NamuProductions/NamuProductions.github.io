import {getName} from "./getName.js";

export function popupName () {
    const playerName = getName();

    const popupName = document.createElement('div');
    popupName.classList.add('popup');

    const wawText = document.createElement('p');
    wawText.textContent = `¡WaW!`;

    const playerNameText = document.createElement(`p`);
    playerNameText.textContent = playerName;
    playerNameText.style.display = 'none';

    const messageText = document.createElement(`p`);
    messageText.textContent = `is a StrangE NamE`;
    messageText.style.display = 'none';

    popupName.appendChild(wawText);
    popupName.appendChild(playerNameText);
    popupName.appendChild(messageText);

    popupName.style.display = 'block';

   setTimeout(()=>{
       wawText.style.display = 'none';
       playerNameText.style.display = `block`;
   }, 300);


    setTimeout(()=>{
        playerNameText.style.display = 'none';
        messageText.style.display = `block`;
    }, 600);


    setTimeout(function () {
        popupName.style.display = 'none';
    }, 1200);
    console.log(playerName);

    return popupName;
}