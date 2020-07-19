let  readlineSync  =  require('readline-sync');

const choices = ['rock', 'paper', 'scissors'];

const gameWin = 2;
const compWin = 2;
let userWin = 0;
let userLoss = 0;
let gameTie = 0;

const computerChoice = 
() => "scissors"
// () => {
//    let randNum = Math.floor(Math.random() * 3)
//     switch (randNum) {
//         case 0:
//             return 'rock';
//         case 1:
//             return 'paper';
//         case 2:
//             return 'scissors';
//     }
// }

//declare a variable equalling computer's choice so it doesnt change every sinlge fucking time you call the function
const compRPC = computerChoice();

// console.log(computerChoice())

//game intro

//game question
let playerChoice = readlineSync.question(`what tool shall you choose?\n rock, paper, or scissors?\n`)

//check if player input of the choices



function checkPlayerChoice (guess) {
    if (!choices.includes(guess)){
        console.log('that is not a valid tool \n please choose')
        // playGame() causes IL dont run
    }
    // if (guess === compRPC){
    //     console.log('it\'s a tie\n play again')
       
    // }
}

function playGame() {
    console.log(`you chose ${playerChoice}`)
    console.log(`computer has chosen ${compRPC}`)
    checkPlayerChoice(playerChoice)
}
// //determine who wins, losses, draws

const whoWins = (playerguess, computerguess) => {
    if (playerguess === computerguess){
        gameTie++,
        console.log('it\'s a tie\nplay again'),
        computerChoice(),
        readlineSync.question(`what tool shall you choose?\n rock, paper, or scissors?\n`)
        playGame()
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
        console.log('scissors beats paper\ncomputer wins this round'),
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

// whoWins(playerChoice, compRPC)
// console.log(userWin)
// console.log(userLoss)


// run the game until winner

function playAgain() {
    computerChoice(),
    console.log('one more time!'),
    readlineSync.question(`what tool shall you choose?\n rock, paper, or scissors?\n`),
    playGame(),
    whoWins(playerChoice, compRPC)
}

const nextGame = (pointcheck1, pointcheck2) => {
do {
    if (pointcheck1 = 2) {
        console.log('CONGRATULATIONS!!!!\nYOU HAVE WON!!!')
        break;
    } else if (pointcheck2 = 2) {
        console.log('LMFAO YOU SUCK LOSER')
        break;
    } else {
       playAgain();
    }
} while (userWin <=1 || userLoss <= 1)
    //code would not run for some reason
    // if (pointcheck1 = 2) {
    //     return 'CONGRATULATIONS!!!!\nYOU HAVE WON!!!'
    // } else if (pointcheck2 = 2) {
    //     return 'LMFAO YOU SUCK LOSER'
    // }
    // else {
    //     computerChoice(),
    //     console.log('one more time!'),
    //     readlineSync.question(`what tool shall you choose?\n rock, paper, or scissors?\n`),
    //     playGame(),
    //     whoWins(playerChoice, compRPC);
    // } 
    //     if (pointcheck2 = 2) {
    //     return 'LMFAO YOU SUCK LOSER'
    // } else {
    //     computerChoice(),
    //     console.log('one more time!')
    //     readlineSync.question(`what tool shall you choose?\n rock, paper, or scissors?\n`),
    //     playGame(),
    //     whoWins(playerChoice, compRPC)
    // }
}



playGame()

whoWins(playerChoice, compRPC)
console.log(userWin)
console.log(userLoss)


nextGame(userWin, userLoss)