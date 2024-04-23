export function chooseDifficulty(){
    const difficulty = document.createElement('div');
    difficulty.innerHTML= `
    <div id="difficulties" class="container1">
        <h1>CHOOSE DIFFICULTY</h1>
        <button id="easy">Easy</button>
        <button id="medium">Medium</button>
        <button id="hard">Hard</button>
    </div>`;
    return difficulty;
}
