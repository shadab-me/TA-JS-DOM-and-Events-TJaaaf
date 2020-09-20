let form = document.querySelector("form");
 let userInfo = {};
function ui(sel, message){
  let id = document.querySelector('#'+sel);
  id.innerText = message;
}
function handleSubmit(event) {
  event.preventDefault();
  userInfo.username = form.elements.username.value;
  if(userInfo.username.split('').length < 4){
    ui('username-message', `Name can't be less than 4 characters`);
  }
  userInfo.name = form.elements.name.value;

  if(userInfo.name.split('').filter(e => !isNaN(+e))){
    // ui('name-message', `Can not use number in name field`);
  }
userInfo.email = form.elements.email.value;
  if(!userInfo.email.includes('@') || userInfo.email == ''){
   ui('email-message', `Not A Valid Email`)
  }
  userInfo.phone = form.elements.phone.value;
    if(isNaN(Number(userInfo.phone)) || userInfo.phone == ''){
    ui('phone-message', `Phone Number is Not valid`);
 }
 if(userInfo.phone.split('').length < 7){
   ui('phone-message', `Phone number less then 7 numbers is not allowed`)
 }
userInfo.password = form.elements.password.value;
userInfo.passwordCheck = form.elements.passwordCheck.value;   
if(userInfo.password != userInfo.passwordCheck){
  ui('password-message', `Password is not same`)
}
// send data to server
console.log(userInfo);
}

form.addEventListener("submit", handleSubmit);
