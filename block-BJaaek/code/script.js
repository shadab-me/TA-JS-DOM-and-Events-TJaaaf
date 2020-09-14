function randomHsl() {
    var random = Math.random()* 500;
     return 'hsla(' + random + ', 100%, 50%, 1)';
} 
randomHsl();
let firstBox = document.querySelector('.first');
firstBox.addEventListener('click', function() {
    firstBox.style.backgroundColor = randomHsl();
});

let secondBox = document.querySelector('.second');
secondBox.addEventListener('mousemove', function(){
    secondBox.style.backgroundColor = randomHsl();
})

