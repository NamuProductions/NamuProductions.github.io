export function chuckJoke() {
    const popupChuck = document.getElementById('popupChuck');
    fetch(`https://api.chucknorris.io/jokes/random`)
        .then(response=>{
            if(response.ok) {
                return response.json()
            }
        })
        .then(data => {
            popupChuck.textContent = data.value;
        })
    popupChuck.style.display = 'block';
    popupChuck.addEventListener('click', function() {
        popupChuck.style.display = 'none';
    });
}