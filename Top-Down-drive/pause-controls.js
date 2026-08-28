const portfolioStartControl = document.getElementById('start-button');
const portfolioPauseButton = document.getElementById('back-to-portfolio');
let gameStarted = false;
let gamePaused = false;

portfolioStartControl.addEventListener('click', () => {
    gameStarted = true;
    gamePaused = false;
    portfolioPauseButton.classList.remove('is-visible');
});

window.addEventListener('keydown', event => {
    if (event.key !== ' ' || !gameStarted) {
        return;
    }

    gamePaused = !gamePaused;
    portfolioPauseButton.classList.toggle('is-visible', gamePaused);
});

portfolioPauseButton.addEventListener('click', () => {
    window.location.href = '../index.html';
});
