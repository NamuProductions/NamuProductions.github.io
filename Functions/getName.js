let playerName = "";

function getName() {

        const inputGamingName = document.getElementById('input-gaming-name').value;
        if (inputGamingName.trim() !== "") {
            playerName = inputGamingName.trim();
            document.getElementById('input-gaming-name').value = "";


        }
        return playerName;
}


