//exercicio 1

//Se n > 1, imprima um quadrado de asteriscos
//com n linhas e n asteriscos;

/* let n = 7;
let x = '*';
    
for (i = 1; i < n; i += 1) {  
    x += '*';
}
for (i = 0; i< n; i += 1) {
    console.log(x);
}
 */

//exercicio 2
// mesmo do 1, so que imprima um triângulo retângulo
//com 5 asteriscos de base
/* let n = 5;
let x = '*';

for (i = 0; i< n; i += 1) {
    console.log(x);
    x += '*';
} */

//exercicio 3
//inverta o lado do triângulo.
let n = 5;
let x = '*';
let y = ' ';
/* console.log(y+y+n); */

for (i = 1; i < n; i += 1) {
    if (i < n) {
        y += ' ';
    } else {
        n -= 1;
    }
}