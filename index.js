// Game score limit functionality

let scoreLimit = 7;

const selectScoreLimit = document.querySelector('#selectScoreLimit');

selectScoreLimit.addEventListener('change', () => {
    scoreLimit = selectScoreLimit.value;
    console.log(scoreLimit);
});

// End Game functionality

const disableButtons = () => {
    playerOneButton.setAttribute('disabled', true);
    playerTwoButton.setAttribute('disabled', true);
};

const enableButtons = () => {
    playerOneButton.removeAttribute('disabled');
    playerTwoButton.removeAttribute('disabled');
};

const removeColors = () => {
    player1ScoreSlot.classList.remove('winner');
    player1ScoreSlot.classList.remove('loser');
    player2ScoreSlot.classList.remove('winner');
    player2ScoreSlot.classList.remove('loser');
};

const checkGameOver = () => {
    if (playerOneScore == scoreLimit) {
        console.log('Player One Wins!');
        player1ScoreSlot.classList.add('winner');
        player2ScoreSlot.classList.add('loser');
        disableButtons();
    } else if (playerTwoScore == scoreLimit) {
        console.log('Player Two Wins!');
        player1ScoreSlot.classList.add('loser');
        player2ScoreSlot.classList.add('winner');
        disableButtons();
    };
};

// Main Functionality

const playerOneButton = document.querySelector('#playerOneButton');
const playerTwoButton = document.querySelector('#playerTwoButton');
const resetButton = document.querySelector('#resetButton');

const player1ScoreSlot = document.querySelector('#player1ScoreSlot');
const player2ScoreSlot = document.querySelector('#player2ScoreSlot');

let playerOneScore = 0;
let playerTwoScore = 0;

playerOneButton.addEventListener('click', () => {
    playerOneScore++;
    player1ScoreSlot.innerHTML = playerOneScore;
    checkGameOver();
});

playerTwoButton.addEventListener('click', () => {
    playerTwoScore++;
    player2ScoreSlot.innerHTML = playerTwoScore;
    checkGameOver();
});

resetButton.addEventListener('click', () => {
    playerOneScore = 0;
    playerTwoScore = 0;
    player1ScoreSlot.innerHTML = playerOneScore;
    player2ScoreSlot.innerHTML = playerTwoScore;
    removeColors();
    enableButtons();
});