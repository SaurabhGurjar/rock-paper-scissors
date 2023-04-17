const max = 10;
let counter = 0;
let computerScoreCounter = 0;
let playerScoreCounter = 0;

// When user enter the choice
const text = document.querySelector('.text');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const imgLeft = document.querySelector('#left-img');
const imgRight = document.querySelector('#right-img');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const winner = document.querySelector('.winner');

// Computer choice 
function getComputerChoice() {
    const num = Math.floor(Math.random() * 10);
    if (num < (Math.floor(max / 3))) {
        return "ROCK";
    } else if (num > (Math.floor(max / 3)) && num < (Math.floor(max / 3) + Math.floor(max / 3))) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

// Check who wins 
function playRound(playerSelection, computerSelection) {

    if ((playerSelection === "ROCK" && computerSelection === "PAPER") || (playerSelection === "PAPER" && computerSelection === "SCISSORS") || (playerSelection === "SCISSORS" && computerSelection === "ROCK")) {
        text.textContent = "You Lose! Paper beats Rock";
        computerScoreCounter = computerScoreCounter + 1;
        return;
    } else if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") || (playerSelection === "PAPER" && computerSelection === "ROCK") || (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
        text.textContent = "You Win! Rock beats Scissors";
        playerScoreCounter++;
        return;
    } else {
        text.textContent = "Tie! No one Win";
        return;
    }

}

// Game function call playRound function 5 times to play 5 round
function game(playerSelection, counter) {


    const computerSelection = getComputerChoice();
    // console.log(computerSelection);
    // console.log(playerSelection);
    displayChoice(playerSelection, computerSelection);

    playRound(playerSelection, computerSelection);

    console.log({ computerScoreCounter, playerScoreCounter });
    updateScore();

    if (playerScoreCounter >= 6) {
        winner.textContent = "You win the Game!";
        playerScoreCounter = 0;
        computerScoreCounter = 0;
    } else if (computerScoreCounter >= 5) {
        winner.textContent = "You loss the Game!";
        playerScoreCounter = 0;
        computerScoreCounter = 0;
    }
    else if ((playerScoreCounter === computerScoreCounter) && (playerSelection === 5 || computerScoreCounter === 5)) {
        winner.textContent = "Its a tie!";
        
    }
}

function updateScore () {
    playerScore.textContent = playerScoreCounter;
}


function getPlayerChoice() {

    // Get click event from buttons

    rock.addEventListener('click', () => {
        game('ROCK');
        counter++;
    });

    paper.addEventListener('click', () => {
        game('PAPER');
        counter++;
    });

    scissors.addEventListener('click', () => {
        game('SCISSORS');
        counter++;
    });



}

function displayChoice(playerChoice, computerChoice) {

    console.log({ playerChoice, computerChoice });

    // display user's choice
    if (playerChoice === 'ROCK') {
        imgLeft.src = `media/${playerChoice}.png`;

    } else if (playerChoice === 'PAPER') {
        imgLeft.src = `media/${playerChoice}.png`;
    } else {
        imgLeft.src = `media/${playerChoice}.png`;
    }

    // Display computer's choice
    if (computerChoice === 'Rock') {
        imgRight.src = `media/${computerChoice}.png`;
    } else if (computerChoice === 'PAPER') {
        imgRight.src = `media/${computerChoice}.png`;
    } else {
        imgRight.src = `media/${computerChoice}.png`;
    }
}


getPlayerChoice();