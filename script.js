function getComputerChoice() {
    let  randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber == 0) {
        return 'rock';
    } else if (randomNumber == 1) {
        return 'paper';
    } else {
        return 'scissors'
    } 
}

function startGame() {
    let images = document.querySelectorAll('img');
    images.forEach((img) =>
    img.addEventListener('click', () =>{
        if(img.id) {
            playRound(img.id)
        }
    })
  );
}

function checkScore () {
    if (playerScore === 5) {
        title.innerText = 'You have won the game';
        document.getElementById('reset').style.display = 'block'
    } else if (computerScore === 5) {
        title.innerText = 'You have lost the game';
        document.getElementById('reset').style.display = 'block'
    } else  {
        return;
    }
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
    playerScore.innerText = 'Player Score: 0'
    computerScore.innerText = 'Computer Score: 0'
    result.innerText = ''
    title.innerText = 'Rock Paper Scissors'
}
    

let playerScore = 0;
let computerScore = 0;
let reset = document.getElementById('reset');
let title = document.getElementById('title');
let result = document.getElementById('result');
let pScore = document.getElementById('pscore');
let cScore = document.getElementById('cscore');
let computerImage = document.getElementById('enemy-weapon');

reset.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    pScore.innerText = 'Player Score: 0'
    cScore.innerText = 'Computer Score: 0'
    result.innerText = 'Result: '
    title.innerText = 'Rock Paper Scissors'
    computerImage.src = 'images/question-mark.png'
    document.getElementById('reset').style.display = 'none';
} );

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    if (computerSelection === 'rock') {
        computerImage.src = 'images/rock.png'
    } else if (computerSelection === 'paper') {
        computerImage.src = 'images/paper.png'
    } else if (computerSelection === 'scissors') {
        computerImage.src = 'images/scissors.png'
    } else (computeImage.src = 'images/question-mark.png');

    if (playerSelection === computerSelection) {
        result.innerText = 'It\s a draw!'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        result.innerText = 'You are victorious!';
        playerScore++;
        pScore.innerText = `Player Score: ${playerScore}`
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        result.innerText = 'You are victorious!';
        playerScore++;
        pScore.innerText = `Player Score: ${playerScore}`
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        result.innerText = 'You are victorious!';
        playerScore++;
        pScore.innerText = `Player Score: ${playerScore}`
    } else {
        result.innerText = 'You are Defeated';
        computerScore++;
        cScore.innerText = `Opponent Score: ${computerScore}`
    };

    checkScore();
}

startGame();




    
    




