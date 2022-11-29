function getComputerChoice() {
    let  randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber == 0) {
        return 'Rock';
    } else if (randomNumber == 1) {
        return 'Paper';
    } else {
        return 'Scissors'
    } 
} 

function playRound(playerSelection,computerSelection ) {
    if(playerSelection.toUpperCase() === 'SCISSORS' && computerSelection.toUpperCase() === 'SCISSORS') {
       return 'Everybody wins when you\'re scissoring ;)';
    } else if(playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        return 'It\'s a tie, get back in the ring!';
    } else if(playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase() === 'SCISSORS')  {
        return 'Rock DESTROYS Scissors, you are victorious!';
    } else if(playerSelection.toUpperCase() === 'PAPER' && computerSelection.toUpperCase() === 'ROCK') {
        return 'Paper covers Rock, you are victorious!';
    } else if(playerSelection.toUpperCase() === 'SCISSORS' && computerSelection.toUpperCase() === 'PAPER') {
        return 'Scissors lacerates Paper, you are victorious!';
    } else if(playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase() === 'PAPER') {
        return 'Paper covers Rock, you are defeated!';
    } else if(playerSelection.toUpperCase() === 'PAPER' && computerSelection.toUpperCase() === 'SCISSORS') {
        return 'Scissors lacerates Paper, you are defeated!';
    } else if(playerSelection.toUpperCase() === 'SCISSORS' && computerSelection.toUpperCase() === 'ROCK') {
        return 'Rock DESTROYS Scissors, you are defeated!';
    } else {
        return 'Something has gone terribly wrong, try again!';
    } 
}


const playerSelection = prompt("Choose Rock, Paper, or Scissors!");
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection,computerSelection));




