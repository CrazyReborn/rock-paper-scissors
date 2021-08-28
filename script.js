let playerWin = 0;   
let computerWin = 0; 
const buttonRock = document.getElementById('rock');
const buttonPaper = document.getElementById('paper');
const buttonScissors = document.getElementById('scissors');
const divResults = document.getElementById('results');
const para = document.createElement('p');
let playerScore = document.getElementById('player-score');
let computerScore = document.getElementById('computer-score');
let gameRounds = 0;


function computerPlay(string) {                         
    let randomNumber = Math.random();   
    if (randomNumber <= 1/3) {
        string = 'rock';
        return string;
    } else if (randomNumber <= 2/3) {
        string = 'paper';
        return string;
    } else {
        string = 'scissors';
        return string;
    }
}

function playGame(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        para.textContent = `Round ${gameRounds + 1}: TIE! You chose ${playerSelection} and computer chose ${computerSelection}!`;
        divResults.appendChild(para);
    } else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'paper')) {
        playerWin += 1;
        para.textContent = `Round ${gameRounds + 1}: YOU WON! ${playerSelection} beats ${computerSelection}!`;
        divResults.appendChild(para);
    } else {
        computerWin += 1;
        para.textContent = `Round ${gameRounds +1}: YOU LOSE! ${computerSelection} beats ${playerSelection}!`;
        divResults.appendChild(para);
    }
    playerScore.textContent = 'Player score: ' + playerWin;
    computerScore.textContent = 'Computer score: ' +computerWin;
    gameRounds ++;
    if (gameRounds == 5) {
        if (playerWin > computerWin) {
            para.textContent = 'YOU WIN!';
        } else if (playerWin < computerWin) {
            para.textContent = 'COMPUTER WINS!';
        } else {
            para.textContent = 'TIE!';
        }
        playerWin = 0;
        computerWin = 0;
        gameRounds = 0;
        playerScore.textContent = 'Player score: ' + 0;
        computerScore.textContent = 'Computer score: ' + 0; 
    }
}

buttonRock.addEventListener('click', function(e) {
    let computerSelection = computerPlay();
    playGame('rock', computerSelection);
});

buttonPaper.addEventListener('click', function(e) {
    let computerSelection = computerPlay();
    playGame('paper', computerSelection);
    
});

buttonScissors.addEventListener('click', function(e) {
    let computerSelection = computerPlay();
    playGame('scissors', computerSelection);
    
});


/*
buttonPaper.addEventListener('click', playRound('Paper', computerSelection));
buttonScissors.addEventListener('click', playRound('Scissors', computerSelection));

/*
function game() {
    for (let i = 0; i< 5; i++) {
        let playerSelection = prompt('Choose between Rock, Paper, and Scissors!').toLowerCase();
        computerSelection = computerPlay(); 
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log(`After 5 rounds you have ${playerWin} wins and computer has ${computerWin}` );
    if (playerWin > computerWin) {
        console.log('You are the winner!');
    } else if (playerWin < computerWin) {
        console.log('Computer is the winnner!');
    } else if (playerWin === computerWin) {
        console.log('IT\'S A TIE!!!');
    } else {
        console.log('OH NOOO> SOMETHING DID BROKE!!!');
    }
}
game();
*/