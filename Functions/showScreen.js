function showScreen() {
    const nameScreen = document.createElement('div');
    nameScreen.innerHTML = `
    <div id="nameScreen" class="container">
        <h1>QUIZ GAME APP</h1>
        <div class="container">
            <h2>ENTER YOUR GAMING NAME</h2>
            <div class="container">
                <form id="name-form">
                    <label>
                        <input type="text" id="input-gaming-name" placeholder="Your Coolest Name Here">
                        <input id="nameButton" type="submit" value="I am READY">
                    </label>
                </form>
            </div>
        </div>
    </div>`;
    return nameScreen;
}