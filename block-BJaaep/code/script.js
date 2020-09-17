let boxes = document.querySelector('.boxes');
console.log(boxes);

function handler(event ){
    
   event.target.innerText = '5';
}

boxes.addEventListener('click', handler);