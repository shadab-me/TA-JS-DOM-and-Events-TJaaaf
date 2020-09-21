let container = document.querySelector(".containerS");
let ul = document.querySelector('ul');
let all = document.querySelector('#all');

function filterHandler(event){

   let value = event.target.dataset.filter;
    let filterAr =  got.houses.filter((item) => item.name == value);
    console.log(filterAr)
    displayFilter(filterAr);
    
}
function displayFilter(data = got.houses){
    container.innerHTML = ''
    data.map(e => e.people.forEach(e => {
    let box = document.createElement("article");
    let flexContainer = document.createElement("div");
    let img = document.createElement("img");
    let name = document.createElement("h2");
    let details = document.createElement("p");
    let button = document.createElement("a");
     button.href = e.wikiLink;
    img.src = e.image;
    name.innerText = e.name;
    details.innerText = e.description;
    button.innerText = "Learn More!";
    box.classList.add("box");
    flexContainer.classList.add("flex");
    img.classList.add("img");
    details.classList.add("details");
    button.classList.add("button");
    flexContainer.append(img, name);
    box.append(flexContainer, details, button);
    container.append(box);
}))};

function FilterByHouse(){

    got.houses.forEach((item) => {  
     let li = document.createElement('li');
     let a = document.createElement('a');
     a.href = '#';
     a.innerText = item.name;
     a.setAttribute('data-filter', item.name);
     a.addEventListener('click', filterHandler);
     li.append(a)
     ul.append(li);
    });
    }
FilterByHouse();
displayFilter();