const max = 10;
// When user enter the choice


// Computer choice 
function getComputerChoice () {
    const num = Math.floor(Math.random () * 10);
    if (num < (Math.floor(max / 3))) {
        return "ROCK";
    } else if (num > (Math.floor(max / 3)) && num < (Math.floor(max / 3) + Math.floor(max / 3))) {
        return "PAPER";
    }  else {
        return "SCISSORS";
    }
}

// Check who is win
function playRound(playerSelection, computerSelection, playerWinCounter) {
    if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        console.log("You Lose! Paper cover Rock");
        playerWinCounter--;
        return playerWinCounter;
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        console.log("You Lose! Scissors cuts Paper");
        playerWinCounter--;
        return playerWinCounter;
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        console.log("You Lose! Rock break Scissors");
        playerWinCounter--;
        return playerWinCounter;
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        console.log("You Win! Rock break Scissors");
        playerWinCounter++;
        return playerWinCounter;
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        console.log("You Win! Paper covers Rock");
        playerWinCounter++;
        return playerWinCounter;
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        console.log("You Win! Scissors cuts Paper");
        playerWinCounter++;
        return playerWinCounter;
    } else {
        console.log("Tie! No one Win")
        return playerWinCounter;
    }
}

// Game function call playRound function 5 times to play 5 round
function game () {
    let playerWinCounter = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("What do you choose? ").toUpperCase();

        const computerSelection = getComputerChoice();
        playerWinCounter = playRound(playerSelection, computerSelection, playerWinCounter);
    }
    if (playerWinCounter > 0) {
        console.log("You win the Game!");
    } else if (playerWinCounter < 0) {
        console.log("You loss the Game!");
    }
    else {
        console.log("Its a tie!");
    }
}

game ();