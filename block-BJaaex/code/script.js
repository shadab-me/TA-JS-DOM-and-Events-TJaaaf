let contain = document.querySelector('.container');



let data = [1, 2, 3, 4, 5, 6, 7, 8];
let counter = 0;
let value  = [];
function createUi(data){
   data.forEach(el => {
       let box  = document.createElement('div');
       box.setAttribute('class', 'box');
       box.setAttribute('id', 'hide')
       let i = document.createElement('i');
       i.innerText = el
       i.setAttribute('data-in', el)
       i.setAttribute('class', 'hidden')
       box.appendChild(i);
       contain.appendChild(box)    
    });
}
function handler(event){
     if(event.target.id == "hide"){
        let first = (event.target.childNodes[0].dataset.in);
         value.push(first)
         counter++
      i.classList.remove('hidden')   
    } 
     if(event.target.hasAttribute('data-in')){
         let second = (event.target.dataset.in);
         value.push(second);
         counter++
     }

     if(counter == 2){
    console.log(value)
    Match(value);
    counter = 0
     value = [];
     }
   
}
function Match(arr){
   if(arr[0] == arr[1]){
       console.log('Super Match')
   }
   else{
       console.log("Not Match")
   }
} 
contain.addEventListener('click', handler)
console.log(counter);
createUi(data.concat(data));