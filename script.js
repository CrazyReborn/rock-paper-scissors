const computerSelection = computerPlay();
function computerPlay(string) {
    let randomNumber = Math.floor(Math.random() * 3 + 1);   
    if (randomNumber === 1) {
        string = 'Rock';
        return string;
    } else if (randomNumber === 2) {
        string = 'Paper';
        return string;
    } else {
        string = 'Scissors';
        return string;
    }
}
const playerSelection = 'Rock';  /*  NEEDS TO NE CASE INSENTIVITE*/
function gamePlay(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
    console.log(`TIE! You chose ${playerSelection} and computer chose ${computerSelection}!`);
    } else if ((playerSelection == 'Rock' && computerSelection == 'Scissors') || (playerSelection == 'Paper' && computerSelection == 'Rock') ||
    (playerSelection == 'Scissors' && computerSelection == 'Paper')) {
    console.log(`YOU WON! ${playerSelection} beats ${computerSelection}`);
    } else {
    console.log(`YOU LOSE! ${computerSelection} beats ${playerSelection}`);
    }
}
console.log(gamePlay(playerSelection, computerSelection));