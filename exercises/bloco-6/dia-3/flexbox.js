let main = document.querySelector('.main');
let body = document.querySelector('body');
let button = document.querySelector('button');


let count = 0;


button.addEventListener('click', changeColor)
function changeColor() {
  let colors = ['white', 'black', 'blue', 'red', 'yellow', 'orange']
  let newColor = '';
  for (let index = count; index < colors.length; index += 1) {
    newColor = colors[index];
    count += 1;
    break;
  }
  main.style.color = newColor;
  if (count >= colors.length) {
    count = 0;
  }
  }
  