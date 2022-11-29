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

function playRound(playerSelection, computerSelection) {
   if(playerSelection === 'Rock' && computerSelection === 'Scissors')  {
    return 'Rock DESTROYS Scissors, you are victorious!';
   } else if(playerSelection === 'Rock' && computerSelection === 'Paper') {
    return 'Paper covers Rock, you are defeated!';
   } else if(playerSelection === 'Rock' && computerSelection === 'Rock') {
    return 'It\'s a draw, get back in the ring!';
   } else if(playerSelection === 'Paper' && computerSelection === 'Rock') {
    return 'Paper covers Rock, you are victorious!';
   }else if(playerSelection === 'Paper' && computerSelection === 'Scissors') {
    return 'Scissors lacerates Paper, you are defeated!';
   } else if(playerSelection === 'Paper' && computerSelection === 'Paper') {
    return 'It\'s a draw, get back in the ring!';
   } else if(playerSelection === 'Scissors' && computerSelection === 'Paper') {
    return 'Scissors lacerates Paper, you are victorious!';
   } else if(playerSelection === 'Scissors' && computerSelection === 'Rock') {
    return 'Rock DESTROYS Scissors, you are defeated!';
   } else if(playerSelection === 'Scissors' && computerSelection === 'Scissors') {
    return 'Looks like the two of you are Scissoring, everybody wins! Giggity!';
   } else {
    return 'Something has went terribly wrong, try again!';
   }
}

const playerSelection = prompt("Choose Rock, Paper, or Scissors!");
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
