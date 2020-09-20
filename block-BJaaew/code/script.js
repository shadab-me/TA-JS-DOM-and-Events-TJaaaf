let container = document.querySelector(".container");


got.houses.map(e => e.people.forEach(e => {
    let box = document.createElement("article");
    let flexContainer = document.createElement("div");
    let img = document.createElement("img");
    let name = document.createElement("h2");
    let details = document.createElement("p");
    let button = document.createElement("a");

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
}));