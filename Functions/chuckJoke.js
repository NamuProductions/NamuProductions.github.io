export function chuckJoke() {
    const popupChuck = document.createElement('div');
    popupChuck.classList.add('popup');

    const chuckSentence = document.createElement('p');

    fetch(`https://api.chucknorris.io/jokes/random`)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            chuckSentence.textContent = data.value;
            popupChuck.appendChild(chuckSentence);
            console.log(chuckSentence.textContent);
        });

    return popupChuck;
}