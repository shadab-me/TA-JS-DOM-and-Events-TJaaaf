function computer(){
let arr = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
return arr[Math.floor(Math.random()*arr.length)]
}


function select(e){
    return e;

}

function conditions(choice1, choice2){
    if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins";
        } else {
            if (choice2 === "scissors") {
                return "scissors wins";
            }
        }
        if (choice1 === "scissors") {
            if (choice2 === "rock") {
                return "rock wins";
            } else {
                if (choice2 === "paper") {
                    return "scissors wins";
                }
            }
        }
    } 
}
console.log(conditions(computer(), select()))


function win(){
   let div =  document.createElement('div');
   let container  = document.querySelector('.container');
   div.setAttribute('class', 'win');
   div.innerHTML = '<h1>You Win</h1>'
  container.appendChild(div);
  console.log(container)
   let playerScore = document.querySelector('#playerScore');
   let count = 0;
   playerScore.innerText = count;
   count = count+1
} 