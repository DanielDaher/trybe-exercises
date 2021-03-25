//exercício 1
/* let a = 10;
let b = 5;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
 */
//exercício 2
/* let a = 10;
let b = 5;

if (a > b) {
    console.log(a);
}
else {
    console.log(b);
} */

//exercício 3
/* let a = 10;
let b = 5;
let c = 1;

if (a > b && a > c) {
    console.log('o maior número é: ' +a+ ' (a) ');
} else if (b > a && b > c) {
    console.log('o maior número é: ' +b+ ' (a) ');
} else {
    console.log('o maior número é: ' +c+ ' (a) ');
}
 */
//exercício 4
/* let a = -1;

if (a > 0) {
    console.log('positive');
} else if (a < 0) {
    console.log('negative');
} else {
    console.log('zero');
} */

//exercício 5
/* let a = 90;
let b = 50;
let c = 50;
let soma = a + b + c;
let positiveAngles = a > 0 && b > 0 && c > 0;

if (positiveAngles){
    if (soma ===180) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log ('angulo inválido');
} */

//exercício 6
let peçaDeXadrez = 'RAINHA';
switch (peçaDeXadrez.toLowerCase()) {
    case 'rei':
        console.log('horizontal,vertical e diagonal - uma casa de cada vez');
        break;
    case 'rainha':
        console.log('horizonta, vertical e diagonal - não pode pular outras peças');
        break;
    case 'bispo':
        console.log('somente diagonal - não pode pular outras peças');
        break;
    case 'cavalo':
        console.log('pode pular outras peças - se move em "L", duas horizontais e uma vertical, ou vice-versa');
        break;
    case 'torre':
        console.log('toda a horizontal ou vertical - não pode pular outras peças');
        break;
    case 'peão':
        console.log('apenas uma casa para frente, exceto em seu primeiro movimento no jogo, quando PODE avançar duas casas');
        break;
        default:
        console.log('error - peça inválida');
        break;
}