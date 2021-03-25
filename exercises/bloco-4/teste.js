let pizzas = ['4 queijos', 'Frango', 'Marguerita', 'Palmito'];

pizzas.push('Peito de Peru'); //adiciona item ao final do array;

pizzas.unshift('chocolate'); //adiciona item ao começo do array;

pizzas.pop(); //remove o ultimo item do array;

pizzas.shift(); //remove o primeiro item do array;

console.log(pizzas.indexOf('Frango')); // retorna o índice de um item do array;

for (let index = 0; index < pizzas.length; index++) {
    console.log(pizzas[index]);   
}