let gameState = {
    playerName: "",
    currentScreen: "name-screen"
}







//
// let playerName = "";
//
// document.addEventListener("DOMContentLoaded", function () {
//     const nameScreen = document.getElementById('name-screen');
//     const nameForm = document.getElementById('name-form');
//     const gameScreen1 = document.getElementById('game-screen1');
//     const popupName = document.getElementById('popupName');
//     const sportsImage = document.getElementById('sports');
//     const natureImage = document.getElementById('nature');
//
//     nameForm.addEventListener('submit', function(event){
//         event.preventDefault();
//
//         const inputGamingName = document.getElementById('input-gaming-name').value;
//         if(inputGamingName.trim() !== "") {
//             playerName = inputGamingName.trim();
//             document.getElementById('input-gaming-name').value = "";
//             popupName.textContent = `¡wAw! ${playerName} IS A STRANGE NAME`;
//             popupName.style.display = 'block';
//             setTimeout(function() {
//                 popupName.style.display = 'none';
//             }, 1200);
//             console.log(playerName);
//             nameScreen.style.display = 'none';
//             gameScreen1.style.display = 'block';
//         }
//     })
//     sportsImage.addEventListener('click', function (){
//         console.log('Sports Image Chosen');
//         chuckJoke();
//         // gameScreen1.style.display = 'none';
//         // gameScreen2.style.display = 'block';
//     });
//
//     natureImage.addEventListener('click', function (){
//         console.log('Nature Image Chosen');
//         chuckJoke();
//         // gameScreen1.style.display = 'none';
//         // gameScreen2.style.display = 'block';
//     })
// });
//
