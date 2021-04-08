const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');




/*
 Copie esse arquivo e edite apenas ele;
 Crie uma função que adicione a classe 'tech' ao elemento selecionado;
 1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?*/
 function removeTech() {
    let element = document.querySelector('.tech');
    while (element) {
        element.classList.remove('tech');
        element = document.querySelector('.tech');
    }
}
 
 function addTech(event) {
    removeTech();
    event.target.classList.add('tech');
}

let container = document.querySelector('.container');
container.addEventListener('click', addTech);
/*
 Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';*/ 
input.addEventListener('keyup', substituteText);

function substituteText() {
    let subidinha = document.querySelector('.tech');
    let userText = input.value;
    subidinha.innerText = userText;
}

/*
 Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página; */

myWebpage.addEventListener('dblclick', portfolio);
function portfolio() {
    window.location.href = 'https://danieldaher.github.io';
}

/*1. Que tal redirecionar para seu portifólio?
Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;
*/
myWebpage.addEventListener('mouseover', function(){
    this.style.color = '#2fc18c';
})

myWebpage.addEventListener('mouseout', function() {
        this.style.color = 'white';
})

/*Segue abaixo um exemplo do uso de event.target:
*/

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.