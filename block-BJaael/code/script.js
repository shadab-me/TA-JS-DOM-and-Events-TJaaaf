 function createBox(){
    let boxes = document.querySelector('.boxes')
    for(let i = 1; i<=500; i++){
        let box = document.createElement('div');
        box.setAttribute('class', "box");
        box.innerText = i;
        boxes.append(box);
    
     }
}
createBox();
function Color (){
   let box = document.querySelectorAll('.box');
     box.forEach((item) => {
    var random = Math.floor(Math.random()*500);
    let color = 'hsla('+ random +',100%, 50%, 1 )';

     item.innerText = random
     item.style.backgroundColor  = color;
  })
}

 let boxes = document.querySelector('.boxes');
 console.log(boxes)
 boxes.addEventListener('mousemove', Color)