let form = document.querySelector("form");
 let userInfo = {};
function ui(sel, message){
  let id = document.querySelector('#'+sel);
  id.innerText = message;
}
function handleSubmit(event) {
  event.preventDefault();
  userInfo.username = form.elements.username.value;

  userInfo.name = form.elements.name.value;

  if(userInfo.name.split('').length < 4){
    ui('name-message', `Name can't be less than 4 characters`);
  }
  if(userInfo.name.split('').filter(e => !isNaN(+e))){
    // ui('name-message', `Can not use number in name field`);
  }
  
  userInfo.email = form.elements.email.value;
  console.log(userInfo.email.includes('@'));

  if(!userInfo.email.includes('@')){
   ui('email-message', `Not A Valid Email`)
  }
  userInfo.password = form.elements.password.value;
 
 
  // send data to server
  console.log(userInfo);
}

form.addEventListener("submit", handleSubmit);
