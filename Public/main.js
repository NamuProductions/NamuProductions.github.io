import { render } from "../Functions/render.js";
import { gameState } from "../Functions/gameState.js";

export async function registerUser(email, password) {
    try {
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
        return userCredential.user;
    } catch (error) {
        console.error('Error registering user:', error);
        return null;
    }
}

export async function loginUser(email, password) {
    try {
        const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
        return userCredential.user;
    } catch (error) {
        console.error('Error logging in user:', error);
        return null;
    }
}
async function init() {
    try {
        render(gameState);
    } catch (error) {
        console.error('Error initializing game:', error);
    }
}

document.addEventListener('DOMContentLoaded', init);
