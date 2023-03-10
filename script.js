const max = 10;
// When user enter the choice


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

// Check who is win
function playRound(playerSelection, computerSelection, playerWinCounter) {
    if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        console.log("You Lose! Paper beats Rock");
        playerWinCounter--;
        return playerWinCounter;
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        console.log("You Lose! Scissors beats Paper");
        playerWinCounter--;
        return playerWinCounter;
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        console.log("You Lose! Rock beats Scissors");
        playerWinCounter--;
        return playerWinCounter;
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        console.log("You Win! Rock beats Scissors");
        playerWinCounter++;
        return playerWinCounter;
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        console.log("You Win! Paper beats Rock");
        playerWinCounter++;
        return playerWinCounter;
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        console.log("You Win! Scissors beats Paper");
        playerWinCounter++;
        return playerWinCounter;
    } else {
        console.log("Tie! No one Win")
        return playerWinCounter;
    }
}

// Game function call playRound function 5 times to play 5 round
function game() {
    let playerWinCounter = null;
    let i;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("What do you choose? ").toUpperCase();
        if (!(playerSelection === "ROCK" || playerSelection === "PAPER" || playerSelection === "SCISSORS")) {
            alert('Chocies are "Rock", "Paper", "Scissor"');
            break;
        }
        const computerSelection = getComputerChoice();
        playerWinCounter = playRound(playerSelection, computerSelection, playerWinCounter);
    }
    if (i === 4) {
        if (playerWinCounter > 0) {
            console.log("You win the Game!");
        } else if (playerWinCounter < 0) {
            console.log("You loss the Game!");
        }
        else if (playerWinCounter === 0) {
            console.log("Its a tie!");
        }
    } else {
        console.log("Refresh the page to Play again!")
    }
}

game();
