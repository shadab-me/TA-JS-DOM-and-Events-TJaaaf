let uiName = document.querySelector('#Display-name');
let uiEmail = document.querySelector('#Display-email');
let uiMovies = document.querySelector('#Display-movie');
let uiColor = document.querySelector('#Display-color');
let uiRatting = document.querySelector('#Display-rating');
let uiGenre = document.querySelector('#Display-genre');
let modal = document.querySelector('.modal');
let close = document.querySelector('#close');


 
let userInfo = {
}
function submitHandler(event){
    event.preventDefault();
   userInfo.name = form.elements.name.value;
   userInfo.email = form.elements.email.value;
   userInfo.movie = form.elements.gender.value;
   userInfo.color  = form.elements.color.value;
   userInfo.rating = form.elements.rating.value;
   userInfo.drone = form.elements.drone.value;
   userInfo.terms = form.elements.terms.value;
   console.log(userInfo);
  }

function ui(){
   uiName.innerText = `Hello ${userInfo.name}`
   uiEmail.innerText = `Email: ${userInfo.email}`
   uiColor.innerText = `Color: ${userInfo.color}`
   uiRatting.innerText = `Ratting: ${userInfo.rating}`
   uiGenre.innerText = `Book Genre: ${userInfo.drone}`
   modal.style.display = 'block'
}

function closeHandler(){
    modal.style.display = 'none'
}

let form = document.querySelector('form');
form.addEventListener('submit', submitHandler);
form.addEventListener('submit', ui);
close.addEventListener('click', closeHandler);
 