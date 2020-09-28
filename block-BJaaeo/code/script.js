let input = document.querySelector('.inputs');
let output = document.querySelector('.output');
let result = document.querySelector('.result');

function handler(event){
if(event.target.hasAttribute('data-number')){
     output.innerText = output.innerText + event.target.dataset.number
}
if(event.target.hasAttribute('data-operation')){
    output.innerText = output.innerText + event.target.dataset.operation;
}
 if(event.target.classList.contains("result")){
    console.log(`(${output.innerText})`);
     output.innerText = `${eval(output.innerText)}`
     console.log(output.innerText);
}
if(event.target.classList.contains("clear")){
    output.innerText = ''
}
}



input.addEventListener('click', handler);