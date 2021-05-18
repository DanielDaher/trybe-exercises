/* function testingScope(escopo) {
    if (escopo === true) {
      var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(ifScope);
    } else {
      var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
  }
*/


const testingScope = (escopo) => {
    if (escopo === true) {
        let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
        console.log(ifScope);
    } else {
        const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        console.log(elseScope);
    }
};

testingScope(true); 


// exercício 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const result = oddsAndEvens.sort((a, b) => a - b);

console.log(`Os números '${result}' se encontram ordenados de forma crescente`);

// Parte II

// Exercício 1

const fatorialNumber = (a) => {
  let total = 1;
  for (let index = 1; index <= a; index += 1) {
    total *= index;
}
return total;
}

console.log(fatorialNumber(5));


const longestWord = (frase) => {
  let word = frase.split(' ');
  let total = 0;
  let resultado = '';
  for (let index = 0; index < word.length; index += 1) {
    if (word[index].length > total) {
      total = word[index].length;
      resultado = word[index];
    }
  }
  return resultado;
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));