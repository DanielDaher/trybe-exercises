//exercicio 1
/* function viceVersa (nome) {
    let soletrando = nome.split('');
    let verification = true;
    for (let index in soletrando) {
        if (soletrando[index] != nome[(nome.length - 1) - index]) {
            verification = false;
        } else {
            verification = true;
        }
    }
    return verification;
}

let teste = viceVersa('arara');
console.log(teste);

let teste2 = viceVersa('ana');
let teste3 = viceVersa('virginia');
let teste4 = viceVersa('tenet');

console.log(teste2);
console.log(teste3);
console.log(teste4); */

let teste = [10, 20, 30];
total = 0;
for (let index in teste) {
    if (teste[index] > total) {
        total = total + teste[index];
    }
    console.log(total);
    
}