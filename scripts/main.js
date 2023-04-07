'use strict'


let container = document.querySelector('.container');
let items = document.querySelectorAll('.item');

let current = 0;

function next() {
    current = current + 1;

    if (current > items.length - 1) {
        current = 0;
    }

    container.scrollTo({
        left: items[current].offsetLeft,
        top: 0,
        behavior: 'smooth'
    });
}

setInterval(next, 3000);