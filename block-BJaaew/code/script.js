let container = document.querySelector(".containerS");
let ul = document.querySelector('ul');
let all = document.querySelector('#all');
let search = document.querySelector('#search');



function filterHandler(event){
   let value = event.target.dataset.filter;
   event.target.classList.add('active')
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
     a.setAttribute('class', 'flex-sm-fill text-sm-center nav-link')
     a.innerText = item.name.toUpperCase();
     a.setAttribute('data-filter', item.name);
     a.addEventListener('click', filterHandler);
     li.append(a)
     ul.append(li);
    });
    }


    let allPeople = got.houses.map(house => house.people).flat().filter((item) => item.name.includes('s'));
    
    console.log([...allPeople]);

    function InputSearch(e){
        let allPeople = got.houses.map(house => house.people).flat().filter((item) => item.name.toLowerCase().includes(e.target.value.toLowerCase().trim()));
         let p = [{people: allPeople}];
         console.log(p);
          displayFilter(p);         
     }

FilterByHouse();
displayFilter();
search.addEventListener('keyup', InputSearch)