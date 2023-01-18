const rpsArray = ['rock', 'paper', 'scissors'];

function computerChoice(arr) {
    const choice = Math.floor(Math.random() * arr.length);
    return arr[choice];
}

function playRound(p1, p2) {
    if (p1 === 'rock') {
        if (p2 === 'scissors') {
            console.log("You win! Rock beats scissors!");
            return "win";
        } else if (p2 === 'paper') { 
            console.log("You lose! Paper beats rock!");
            return "lose";
        } else {
            console.log("It's a draw!");
            return "draw";
        }
    } else if (p1 === 'scissors') {
        if (p2 === 'scissors') {
            console.log("It's a draw!");
            return "draw";
        } else if (p2 === 'paper') {
            console.log("You win! Scissors beats paper!");
            return "win";
        } else {
            console.log("You lose! Rock beats scissors!");
            return "lose";
        }
    } else {
        if (p2 === 'paper') {
            console.log("It's a draw!");
            return "draw";
        } else if (p2 === 'scissors') {
            console.log("You lose! Scissors beats paper!");
            return "lose";
        } else {
            console.log("You win! Paper beats rock!");
            return "win";
        }
    }
};

function game() {
    let playerSelection;
    let computerSelection;
    let result;
    let wins = 0;
    let losses = 0;
    let draws = 0;

    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
        computerSelection = computerChoice(rpsArray);
        result = playRound(playerSelection, computerSelection);
        if (result === "win") {
            wins++;
        } else if (result === "draw") {
            draws++;
        } else {
            losses++;
        }
    }

    // console.log("Final Results: " + {wins} +" wins, " + {losses} + "losses and " + {draws} + "draws");
    return wins;
}

let wins = game().toString();
console.log("You won " + wins + " out of 5 games.");