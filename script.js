const max = 10;
let roundCounter = 0;
let playerWinCounter = null;
let playerScoreCounter = 0;
let computerScoreCounter = 0;

// When user enter the choice
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const winner = document.querySelector('.winner');
const imgLeft = document.querySelector('#left-img');
const imgRight = document.querySelector('#right-img');
const scissors = document.querySelector('#scissors');
const resultText = document.querySelector('.result-text');
const playerScore = document.querySelector('.player-score');
const roundNumber = document.querySelector('.round')
const computerScore = document.querySelector('.computer-score');
const playerRoundOne = document.querySelector('.pr-1');
const playerRoundTwo = document.querySelector('.pr-2');
const playerRoundThree = document.querySelector('.pr-3');
const computerRoundOne = document.querySelector('.cr-1');
const computerRoundTwo = document.querySelector('.cr-2');
const computerRoundThree = document.querySelector('.cr-3');
const playerChoiceContainer = document.querySelector('.left');
const computerChoiceContainer = document.querySelector('.right');


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
        resultText.textContent = "Paper beats Rock";
        winner.textContent = "AI win!";
        computerChoiceContainer.classList.remove('active-lose');
        computerChoiceContainer.classList.add('active-win');
        playerChoiceContainer.classList.add('active-lose');
        computerScoreCounter += 1;
        return;
    } else if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") || (playerSelection === "PAPER" && computerSelection === "ROCK") || (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
        resultText.textContent = "Rock beats Scissors";
        winner.textContent = "Human win";
        playerChoiceContainer.classList.remove('active-lose');
        playerChoiceContainer.classList.add('active-win');
        computerChoiceContainer.classList.add('active-lose');
        playerScoreCounter++;
        return;
    } else {
        resultText.textContent = "No one Win";
        winner.textContent = "Its a Tie!";
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

    updateScore();

    if (playerScoreCounter === 5) {
        winner.textContent = "Human wins this Round!";
        playerScoreCounter = 0;
        computerScoreCounter = 0;
        computerChoiceContainer.classList.remove('active-lose');
        playerChoiceContainer.classList.remove('active-lose');
        computerChoiceContainer.classList.remove('active-win');
        playerChoiceContainer.classList.remove('active-win');
        roundCounter++;
        if (roundCounter === 1) {
            playerRoundOne.classList.add('rounds-win');
            computerRoundOne.classList.add('rounds-lose');
        } else if (roundCounter === 2) {
            playerRoundTwo.classList.add('rounds-win');
            computerRoundTwo.classList.add('rounds-lose');
        } else if (roundCounter === 3) {
            playerRoundThree.classList.add('rounds-win');
            computerRoundThree.classList.add('rounds-lose');
            
        }
    }
    else if (computerScoreCounter === 5) {
        winner.textContent = "AI wins this Round!";
        playerScoreCounter = 0;
        computerScoreCounter = 0;
        computerChoiceContainer.classList.remove('active-lose');
        playerChoiceContainer.classList.remove('active-lose');
        computerChoiceContainer.classList.remove('active-win');
        playerChoiceContainer.classList.remove('active-win');
        roundCounter++;

        if (roundCounter === 1) {
            playerRoundOne.classList.add('rounds-lose');
            computerRoundOne.classList.add('rounds-win');
        } else if (roundCounter === 2) {
            playerRoundTwo.classList.add('rounds-lose');
            computerRoundTwo.classList.add('rounds-win');
        } else if (roundCounter === 3) {
            playerRoundThree.classList.add('rounds-lose');
            computerRoundThree.classList.add('rounds-win');
        
        }
    }
    else if ((playerScoreCounter === computerScoreCounter) && (playerSelection === 5 || computerScoreCounter === 5)) {
        winner.textContent = "Its a tie!";

    }

    if (roundCounter < 3) {
        roundNumber.textContent = `Round ${roundCounter + 1}`;
    } else {
        roundNumber.textContent = `Round ${roundCounter}`;
        reset();
    }

    
}

function updateScore() {
    playerScore.textContent = playerScoreCounter;
    computerScore.textContent = computerScoreCounter;
}


function getPlayerChoice() {

    // Get click event from buttons

    rock.addEventListener('click', () => {
        game('ROCK');
    });

    paper.addEventListener('click', () => {
        game('PAPER');
    });

    scissors.addEventListener('click', () => {
        game('SCISSORS');
    });
}

function displayChoice(playerChoice, computerChoice) {

    // console.log({ playerChoice, computerChoice });

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

function reset() {
    roundCounter = 0;
    playerScoreCounter = 0;
    computerScoreCounter = 0;
    playerRoundOne.classList.remove('rounds-win');
    playerRoundOne.classList.remove('rounds-lose');
    computerRoundOne.classList.remove('rounds-win');
    computerRoundOne.classList.remove('rounds-lose');
    playerRoundTwo.classList.remove('rounds-win');
    playerRoundTwo.classList.remove('rounds-lose');
    computerRoundTwo.classList.remove('rounds-win');
    computerRoundTwo.classList.remove('rounds-lose');
    playerRoundThree.classList.remove('rounds-win');
    playerRoundThree.classList.remove('rounds-lose');
    computerRoundThree.classList.remove('rounds-win');
    computerRoundThree.classList.remove('rounds-lose');
    playerChoiceContainer.classList.remove('active-win');
    playerChoiceContainer.classList.remove('active-lose');
    computerChoiceContainer.classList.remove('active-win');
    computerChoiceContainer.classList.remove('active-lose');
}

getPlayerChoice();