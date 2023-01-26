const rpsArray = ['rock', 'paper', 'scissors'];

const buttons = document.querySelectorAll('button');
const scoreboard = document.querySelector('.scoreboard');
let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => button.addEventListener('click', startRound));

function startRound(e) {
    let playerChoice = this.id;
    console.log(`Player Choice: ${playerChoice}`);
    let computerChoice = computerChoose(rpsArray);
    console.log(`Computer Choice: ${computerChoice}`);
    playRound(playerChoice, computerChoice);
}

function computerChoose(arr) {
    const choice = Math.floor(Math.random() * arr.length);
    return arr[choice];
}

function playRound(p1, p2) {
    if (p1 === 'rock') {
        if (p2 === 'scissors') {
            scoreboard.textContent = "You win! Rock beats scissors!\n";
            playerScore++;
            console.log(playerScore);
        } else if (p2 === 'paper') { 
            scoreboard.textContent = "You lose! Paper beats rock!\n";
            computerScore++;
            console.log(playerScore);
        } else {
            scoreboard.textContent = "It's a draw!\n";
            console.log(playerScore);
        }
    } else if (p1 === 'scissors') {
        if (p2 === 'scissors') {
            scoreboard.textContent = "It's a draw!\n";
            console.log(playerScore);
        } else if (p2 === 'paper') {
            scoreboard.textContent = "You win! Scissors beats paper!\n";
            console.log(playerScore);
            playerScore++;
        } else {
            scoreboard.textContent = "You lose! Rock beats scissors!\n";
            console.log(playerScore);
            computerScore++;
        }
    } else {
        if (p2 === 'paper') {
            scoreboard.textContent = "It's a draw!\n";
            console.log(playerScore);
        } else if (p2 === 'scissors') {
            scoreboard.textContent = "You lose! Scissors beats paper!\n";
            console.log(playerScore);
            computerScore++;
        } else {
            scoreboard.textContent = "You win! Paper beats rock!\n";
            console.log(playerScore);
            playerScore++;
        }
    }

    console.log(playerScore);
    scoreboard.textContent += `Scoreboard: You: ${playerScore}, Computer: ${computerScore}`;

    if (playerScore >= 5 || computerScore >= 5) {
        if (playerScore == 5) {
            console.log(playerScore);
            scoreboard.textContent += "\nYou won the best-of-5!";
        } else if (computerScore == 5) {
            console.log(playerScore);
            scoreboard.textContent += "\nYou lost the best-of-5!";
        }
        endGame();
    }
};

function endGame() {
    const playAgain = document.createElement('button');
    playAgain.textContent = "Play Again?";
    playAgain.addEventListener('click', function() {
        window.location.reload();
    });
    scoreboard.appendChild(playAgain);
}

// function game() {
//     let playerSelection;
//     let computerSelection;
//     let result;
//     let wins = 0;
//     let losses = 0;
//     let draws = 0;

//     for (let i = 0; i < 5; i++) {
//         playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
//         computerSelection = computerChoice(rpsArray);
//         result = playRound(playerSelection, computerSelection);
//         if (result === "win") {
//             wins++;
//         } else if (result === "draw") {
//             draws++;
//         } else {
//             losses++;
//         }
//     }

//     // console.log("Final Results: " + {wins} +" wins, " + {losses} + "losses and " + {draws} + "draws");
//     return wins;
// }

// let wins = game().toString();
// console.log("You won " + wins + " out of 5 games.");