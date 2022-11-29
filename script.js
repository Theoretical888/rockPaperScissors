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
    if(playerSelection === 'Scissors' && computerSelection === 'Scissors') {
        return 'Everybody wins when you\'re scissoring ;)';
    } else if(playerSelection === computerSelection) {
        return 'It\'s a tie, get back in the ring!';
    } else if(playerSelection === 'Rock' && computerSelection === 'Scissors')  {
        return 'Rock DESTROYS Scissors, you are victorious!';
    } else if(playerSelection === 'Paper' && computerSelection === 'Rock') {
        return 'Paper covers Rock, you are victorious!';
    } else if(playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return 'Scissors lacerates Paper, you are victorious!';
    } else if(playerSelection === 'Rock' && computerSelection === 'Paper') {
        return 'Paper covers Rock, you are defeated!';
    } else if(playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return 'Scissors lacerates Paper, you are defeated!';
    } else if(playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return 'Rock DESTROYS Scissors, you are defeated!';
    } else {
        return 'Something has gone terribly wrong, try again!';
    }
}

const playerSelection = prompt("Choose Rock, Paper, or Scissors!");
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
