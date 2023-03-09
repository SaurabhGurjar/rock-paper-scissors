const max = 100;
// When user enter the choice
const playerSelection = prompt("What do you choice? ").toUpperCase();
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


console.log(userChoice);
console.log(getComputerChoice ());