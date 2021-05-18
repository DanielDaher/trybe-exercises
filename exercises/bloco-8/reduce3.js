const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

//exercício 2: Crie uma string com os nomes de todas as pessoas autoras.
function authorNames() {
    const names = books.map(element => element.author.name).join(', ');
    return `Nomes: ${names}.`;
}
/* console.log(authorNames(books)); */


/* const expectedResult = 43; */

//exercício 3: Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados. 

function averageAge() {
  const result = books.map(element => (element.releaseYear - element.author.birthYear)).reduce((a, b) => a + b);
  return result / books.length;
}
/* console.log(averageAge(books));
assert.strictEqual(averageAge(), expectedResult); */

//exercício 4: Encontre o livro com o maior nome.
function biggerNameBook(array) {
    return books.reduce((a, b) => {
        if (a.name.length > b.name.length) {
            return a;
        }
        return b;
});
}
/* console.log(biggerNameBook()); */

//exercício 5: Dado o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  const lowerCase = names.map(element => element.toLowerCase().split('')).reduce((a, b) => a.concat(b));
  const letterA = lowerCase.filter(element => element === 'a');
  /* console.log(names.map(element => element.toLowerCase().split('')));
  console.log(lowerCase); */
  /* console.log(letterA); */
  return letterA.length;
}
console.log(containsA());

const testando =  names.reduce((acc, element) => {
  return acc + element.toLowerCase().split('').filter(element => element === 'a').length}, 0);
/* console.log(testando);
 */
