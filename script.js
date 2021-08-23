let playerWin = 0;   
let computerWin = 0; 
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
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        playerWin += 1;
        computerWin += 1;
        return `TIE! You chose ${playerSelection} and computer chose ${computerSelection}!`;
    } else if ((playerSelection == 'Rock' && computerSelection == 'Scissors') || (playerSelection == 'Paper' && computerSelection == 'Rock') ||
    (playerSelection == 'Scissors' && computerSelection == 'Paper')) {
        playerWin += 1;
        return `YOU WON! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerWin += 1;
        return `YOU LOSE! ${computerSelection} beats ${playerSelection}`;
    }  
}
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