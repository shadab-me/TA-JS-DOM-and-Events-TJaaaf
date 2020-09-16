let playerScore = document.querySelector('#playerScore');
let PlayerCount = 0;
let computerScore = document.querySelector('#computerScore')
let ComputerCount = 0;

function game(u, c) {
    if (u === c) {
        tie();
    } else if ((u === "scissors" && c === "paper") || (u === "paper" && c === "rock") || (u === "rock" && c === "lizard") || (u === "lizard" && c === "spock") || (u === "spock" && c === "scirrors") || (u === "scissors" && c === "lizard") || (u === "lizard" && c === "paper") || (u === "paper" && c === "spock") || (u === "spock" && c === "rock") || (u === "rock" && c === "scissors")) {
        won();
    } else {
        loss();
    }

}



function computer() {
    let ar = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    return ar[Math.floor(Math.random() * ar.length)];
}

function select(e) {
    game(e, computer());
}

function won() {

    let div = document.querySelector('.result');
    div.innerText = 'You Win';
    PlayerCount++;
    playerScore.innerText = PlayerCount;
    div.classList.add("win")

}

function loss() {
    let div = document.querySelector('.result');
    div.innerText = 'You Loss';
    ComputerCount++;
    computerScore.innerText = ComputerCount;
}

function tie() {
    let div = document.querySelector('.result');
    div.innerText = 'It is a tie'
}