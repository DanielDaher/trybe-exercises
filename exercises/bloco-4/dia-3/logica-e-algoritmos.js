//exercicio 1

//Se n > 1, imprima um quadrado de asteriscos
//com n linhas e n asteriscos;

let n = 7;
let x = '*';
    
for (i = 1; i < n; i += 1) {  
    x += '*';
}
for (i = 0; i< n; i += 1) {
    console.log(x);
}
