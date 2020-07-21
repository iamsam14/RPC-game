let  readlineSync  =  require('readline-sync');

const choices = ['rock', 'paper', 'scissors'];

let userWin = 0;
let userLoss = 0;

function compRPC() {
    let randNum = Math.floor(Math.random() * 3)
    switch (randNum) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}


function checkPlayerChoice(guess) {
    if (!choices.includes(guess)){
        console.log('that is not a valid tool \n please choose')
        startGame()
}
}

function logChoices(guess1, guess2) {
    console.log(`you have chosen ${guess1}`)
    console.log(`computer has chosen ${guess2}`)
}

function playGame(playerguess, computerguess) {
    if (playerguess === computerguess){
        console.log('it\'s a tie\nplay again'),
        compRPC(),
        readlineSync.question(`what tool shall you choose?\n rock, paper, or scissors?\n`)
        startGame()
    }
if ( playerguess === 'paper') {
    if (computerguess === 'rock') {
        console.log('paper beats rock\nyou win this round'), 
        userWin++
        // pointCheck(),
    } else {
        console.log('scissors beats paper\ncomputer wins this round')
        userLoss++
        // pointCheck()
    }
}
if (playerguess === 'rock') {
    if (computerguess === 'scissors') {
        console.log('rock beats scissors\nyou win this round'),
        userWin++
        // pointCheck()
    } else {
        console.log('paper beats rock\ncomputer wins this round'),
        userLoss++
        // pointCheck
    }
}   
if (playerguess === 'scissors') {
    if (computerguess === 'paper') {
        console.log('scissors beats paper\nyou win this round'),
        userWin++
    } else {
        console.log('rock beats scissors\ncomputer wins this round'),
        userLoss++
    }
}
}

function checkPoints() {
    console.log('wins: ' + userWin);
    console.log('losses: ' + userLoss)
    if (userWin === 2) {
        console.log('CONGRATULATIONS!!!!\nYOU HAVE WON!!!')
        process.exit();
    }
    if (userLoss === 2) {
        console.log('YOU LOSE TRY AGAIN')
        process.exit();
    }
}

function startGame() {
    let playerChoice = readlineSync.question('what tool shall you choose?\nrock, paper, or scissors?\n');
    checkPlayerChoice(playerChoice);
    compRPC();
    let computerChoice = compRPC();
    logChoices(playerChoice, computerChoice);
    playGame(playerChoice, computerChoice);
    checkPoints();
    startGame();
}

startGame()