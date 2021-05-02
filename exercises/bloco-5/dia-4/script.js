let heroTitle = document.querySelector('#title');
heroTitle.innerText = 'Lorem Ipsum';

/* let menu = document.querySelector('#menu');
menu.innerHTML = 'Menu' + '<br>' + '<p id="item1">Cor de Fundo</p>';

let item1 = document.querySelector('#item1');
item1.innerHTML = 'Cor de fundo'; */

let menu = document.querySelector('#menu');
let userElements = menu.children;
let body = document.querySelector('body');
let item1 = document.querySelector('#i1');
let colors = ['blue', 'yellow', 'white', 'black'];

body.style.backgroundColor = 'turquoise';

menu.children[1].addEventListener('click', function() {
    let total = 0;
  /*   if (body.style.backgroundColor === 'turquoise') {
        body.style.backgroundColor = colors[1];
    } else { */
       for (let i = total; i < colors.length; i += 1) {
        body.style.backgroundColor = colors[i];
        break;
       }
       total += 1;
       // esse total não está fazendo sentido nessa função, repensar;
})