let contain = document.querySelector('.container');
let move = document.querySelector('#move');
let t = document.querySelector('#time');
let body = document.querySelector('body')
let m = 0;
let timer = 0;
let counter = 0;
let Value = [];

let characters = [1, 2, 3, 4, 5, 6, 7, 8];
function random(char) {
    let data = characters.concat(characters);
    data.sort(() => Math.random() - 0.5);
    return data;
}


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

createUi(random());


function handler(event) {

    if (event.target.id == "hide") {
        m = m + 1
        let el = event.target.childNodes[0];
        Value.push(el.dataset.in);
        counter++
        el.classList.remove('hidden');
        event.target.classList.add('selected');
        event.target.classList.add('evenRemover');

    }
    if (event.target.hasAttribute('data-in')) {
        m = m + 1
        let el = event.target;
        Value.push(el.dataset.in);
        el.classList.remove('hidden')
        el.parentElement.classList.add('selected');
        el.classList.add('evenRemover');
        counter++
    }

    compare(counter, event);
    move.innerText = m;
    completed();

}

function compare(count) {
    if (counter == 2) {
        let Selected = document.querySelectorAll('.selected');
        let hidden = document.querySelectorAll('#hide');
        [...hidden].forEach((item) => {
            item.classList.add('evenRemover');
        });

        if (Value[0] == Value[1]) {
            [...Selected].forEach(item => {
                item.classList.add('match');
                item.classList.remove('selected');
            });
            [...hidden].forEach((item) => {
                item.classList.remove('evenRemover');
            });

        } else if (Value[0] != Value[1]) {
            [...Selected].forEach(item => {
                item.classList.add('notMatch');
            });
            setTimeout(function () {
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
    allBoxes.forEach((item) => {
        if (item.classList.contains('match')) {
            item.classList.add('evenRemover');
        }
    });
}

function time() {
    let second = -1;
    let minute = 0;
    setInterval(() => {
        second = second + 1;
        finalSecond = parseInt((second + 1) % 60);
        minute = Math.trunc(second / 60);
        document.querySelector("#min").innerText = `${minute}`;
        document.querySelector("#sec").innerText = `${finalSecond}`;
    }, 1000);
};

function reset() {
    let win = document.querySelector('.win');
    win.style.display = 'none';
    move.innerHTML = 0
    m = 0;
    Value = [];
    allBoxes.forEach((item) => {
        item.classList.remove('match');
        item.classList.remove('evenRemover');
        item.childNodes[0].classList.add('hidden');
    });
    contain.addEventListener('click', handler);
}

function createModeUi() {
    body.style.backgroundColor = 'rgba(0, 0, 0, 0.6);'
    let section = document.createElement('section');
    section.setAttribute('class', 'win');
    let i = document.createElement('i');
    i.innerHTML = ' <h1>You Won😍</h1>'
    let detail = document.createElement('div');
    detail.setAttribute('class', 'detail');
    let move = document.createElement('span');
    move.innerHTML = `<h2>Move👆 ${m}`;
    let t = document.createElement('span');
    t.innerHTML = `<h2>Time⏲ : 00`;
    let playAgain = document.createElement('i');
    playAgain.setAttribute('class', 'playAgain')
    playAgain.innerHTML = `Play Again 🖐 Click Here`;
    playAgain.addEventListener('click', reset)
    detail.append(move, t);
    section.append(i, detail, playAgain);
    contain.append(section);

}

contain.addEventListener('click', handler);

let allBoxes = [...document.querySelectorAll('.box')];

function completed() {
    if (allBoxes.every((item) => item.classList.contains("match"))) {
        createModeUi();
        contain.removeEventListener('click', handler);
    }
};