export function unStartedScreen() {
    const screen = document.createElement('div');
    const messageElement = document.createElement('p');
    messageElement.textContent = 'Welcome Again';
    screen.appendChild(messageElement);
    return screen;
}
