const max = 100;
// When user enter the choice


// Computer choice 
function getComputerChoice () {
    const num = Math.floor(Math.random () * 100);
    console.log(num);
    if (num < (Math.floor(max / 3))) {
        return "ROCK";
    } else if (num > (Math.floor(max / 3)) && num < (Math.floor(max / 3) + Math.floor(max / 3))) {
        return "PAPER";
    }  else {
        return "SCISSORS";
    }
}

// Check who is win
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "ROCK" && computerSelection === "PAPER") {
    return ("You Lose! Paper cover Rock");
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        return ("You Lose! Scissors cuts Paper");
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        return ("You Lose! Rock break Scissors");
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        return ("You Win! Rock break Scissors");
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        return ("You Win! Paper covers Rock");
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        return ("You Win! Scissors cuts Paper");
    } else {
        return ("Tie! No one Win")
    }
} 

// Game function call playRound function 5 times to play 5 round
function game () {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("What do you choose? ").toUpperCase();
        const computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));
        console.log(playerSelection);
        console.log(computerSelection);
    }
}

game ();