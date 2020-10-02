let contain = document.querySelector('.container');
let move = document.querySelector('#move');
let t = document.querySelector('#time');

let m = 0;
let timer = 0;
function time(){
setInterval(function(){
     timer++
     t.innerText = timer;
    }, 1000)


}
  

let data = [1, 2, 3, 4, 5, 6, 7, 8];

let counter = 0;
let Value = [];
function createUi(data) {
     data.forEach(el => {
        let box = document.createElement('div');
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

function handler(event) {
    if (event.target.id == "hide") {
        m = m+1
        let el = event.target.childNodes[0];
        Value.push(el.dataset.in);
        counter++
        el.classList.remove('hidden');
        event.target.classList.add('selected');
        event.target.classList.add('evenRemover');

    }
    if (event.target.hasAttribute('data-in')) {
        m = m+1
        let el = event.target;
        Value.push(el.dataset.in);
        el.classList.remove('hidden')
        el.parentElement.classList.add('selected');
        el.classList.add('evenRemover');
        counter++
    }

     con(counter, event);
     move.innerText = m
     

}

function con(count){
    if(counter == 2){
     let Selected  = document.querySelectorAll('.selected');
     console.log(Selected);
     let hidden = document.querySelectorAll('#hide');
     [...hidden].forEach((item) => {
          item.classList.add('evenRemover');
      });

      if(Value[0] == Value[1]){
          [...Selected].forEach(item => {
            console.log(item.classList.add('evenRemover'));
            item.classList.add('match');
            item.classList.remove('selected');
            });
          [...hidden].forEach((item) => {
            item.classList.remove('evenRemover');
        });

      }else if(Value[0] != Value[1]){
         [...Selected].forEach(item => item.classList.add('notMatch'));
        setTimeout(function(){
            [...Selected].forEach(item => {
                item.classList.remove('notMatch');
                item.classList.remove('selected');
                item.childNodes[0].classList.add('hidden');
            });
        }, 1000);

        [...hidden].forEach((item) => {
            item.classList.remove('evenRemover');
        });
      }

    Value = [];
    counter = 0;
    }
}
   



contain.addEventListener('click', handler)
console.log(counter);
createUi(data.concat(data));