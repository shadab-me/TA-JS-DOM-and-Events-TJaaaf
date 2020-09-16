let playerScore = document.querySelector('#playerScore');
let PlayerCount = 0;
let computerScore = document.querySelector('#computerScore')
let ComputerCount = 0;


function reset(){
   let div = document.querySelector('.result');
   div.innerText = '';
   PlayerCount = 0;
   ComputerCount = 0;
  }

function game(Player, computer){
     console.log(e, computer)
     won();
switch(player,computer){
    case player == 'scissors' && computer == 'paper':
    case player == 'paper' && computer == 'rock':
    case player == 'rock' && computer == 'lizard':
    case player == 'lizard' && computer == 'spock':
    case player == 'spock' && computer == 'scissors':
    case player == 'scissors' && computer == 'lizard':
    case player == 'lizard' && computer == 'paper':
    case player == 'paper' && computer == 'spock':
    
}


}
function computer(){
    let ar = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    return ar[Math.floor(Math.random()*ar.length)];
}
function select(e){
      game(e, computer());
 }
function won(){
     
   let div = document.querySelector('.result');
    div.innerText = 'You Win';
    PlayerCount++;
    playerScore.innerText = PlayerCount;
    div.classList.add("win")

}

function loss(){
    let div = document.querySelector('.result');
    div.innerText = 'You Loss';
    ComputerCount++;
    computerScore.innerText = ComputerCount;
    div.classList.add("loss")
}

let player = document.querySelector('#player');
 
console.log(computer());



 
 