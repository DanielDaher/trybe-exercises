let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// exercício 1
/* for (let index = 0; index < numbers.length; index+= 1) {
    console.log(numbers[index]);
    } */

//exercicio 2
/* 
total = 0; 
for (let index = 0; index < numbers.length; index+= 1) {
    total = total + numbers[index];
}
console.log(total); */

//exercicio 3

/* total = 0; 
for (let index = 0; index < numbers.length; index+= 1) {
    total = total + numbers[index];
}
total = total / numbers.length;
console.log(total);
 */
//exercicio 4
/* 
total = 0; 
for (let index = 0; index < numbers.length; index+= 1) {
    total = total + numbers[index];
}
total = total / numbers.length;
if (total > 20) {
    console.log('valor maior que 20');
} else {
    console.log('valor menor ou igual a 20');
} */

//exercicio 5
let bigger = 0;
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > bigger) {
        bigger = numbers[index];
    }
    
}
console.log(bigger);