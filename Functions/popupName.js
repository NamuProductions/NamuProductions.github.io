export function popupName () {
    const popupName = document.createElement('popup');
    popupName.textContent = `¡wAw! ${playerName} IS A STRANGE NAME`;
    popupName.style.display = 'block';
    setTimeout(function () {
        popupName.style.display = 'none';
    }, 1200);
    console.log(playerName);

    return popupName;
}