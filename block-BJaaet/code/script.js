let form = document.querySelector('form');
let movieList = document.querySelector('.movie-list');
let removeItmbtn = document.querySelector('#remove');

function ui(text){
   let li = document.createElement('li');
   li.setAttribute('class', "list-group-item d-flex justify-content-between align-items-center")
   let span = document.createElement('span');
   span.setAttribute('class', 'badge badge-primary badge-pill');
   span.setAttribute('id', 'remove')
   span.innerText = 'X';
  li.innerText = text;
  li.appendChild(span);
  movieList.appendChild(li);
  form.reset();
  }

function handler(event){
    event.preventDefault();
   let movie = form.elements.movie.value;
   if(movie == ''){
       alert('You Can Not Leave Movie Name Blank');
   }else{
    ui(movie);

   }
 }

function removeitm(event){
     console.log(event.target)
     let e = event.target.parentElement.remove()
  }
movieList.addEventListener('click', removeitm);
form.addEventListener('submit', handler)