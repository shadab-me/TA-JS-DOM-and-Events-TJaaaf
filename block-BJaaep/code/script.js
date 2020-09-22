let boxes = document.querySelectorAll('.boxes');
 console.log(boxes);

function handler(event){
  let value = event.target.dataset.index;
 event.target.classList.add('flip')

 event.target.innerHTML= `<h1>${Number(value)+1}</h1>`;
 setTimeout(
    function(){
       event.target.classList.remove('flip');
       event.target.innerHTML =''
    }, 5000)
 }

 [...boxes[0].children].forEach((box, index) => {
   box.setAttribute('data-index', index);
   box.addEventListener('click', handler);

   console.log(index)

});
// with event
function wHandler(event){
   let value = event.target.dataset.index;
if(event.target.hasAttribute('data-index')){
let value = event.target.dataset.index;
event.target.classList.add('flip')
event.target.innerHTML= `<h1>${Number(value)+1}</h1>`;
}
}
console.log(boxes[1]);
 boxes[1].addEventListener('click', wHandler)
