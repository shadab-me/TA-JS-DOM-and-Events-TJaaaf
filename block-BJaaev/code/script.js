let userInput = document.querySelector('#userInput');
let ul = document.querySelector('.list-group');


let allTodo = [];

function handler(event){
let value = event.target.value;
   if(event.keyCode === 13 && value !== ""){
    let todo = {
        name: value,
        isDone: false
    };
    allTodo.push(todo);
    event.target.value = ""
    ui();
}
}
function deleteHandler(event){
    let ind = event.target.dataset.index;
    console.log(ind)
    allTodo.splice(ind, 1);
    
    ui();
}
function handlerDone(event){
    let id = event.target.dataset.id;
    allTodo[id].isDone = !allTodo[id].isDone;
    ui();

 }
 function ui(){
      ul.innerHTML = '';
       allTodo.forEach((item, index) => {
        let li = document.createElement('li');
        li.setAttribute('class', 'list-group-item d-flex justify-content-between align-items-center')
        var input = document.createElement("INPUT");
        input.setAttribute("type", "checkbox");
        input.checked = item.isDone;
        input.setAttribute('data-id', index);
        input.addEventListener('input', handlerDone);
        let p = document.createElement('p');
        p.innerText = item.name;
        let span = document.createElement('span');
        span.setAttribute('class', 'badge badge-primary badge-pill');
        span.setAttribute('data-index', index)
        span.innerText = 'X';
        span.addEventListener('click', deleteHandler)
        li.append(input, p, span);
        ul.appendChild(li);
    });
 }
 userInput.addEventListener("keyup", handler);
 