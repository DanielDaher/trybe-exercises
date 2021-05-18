/* const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

assert.strictEqual(sum(4, 5), 9, 'a soma deve ser 9');
assert.strictEqual(sum(0, 0), 0, 'a soma deve ser 0;');
assert.strictEqual(sum(4, '5'), 5, 'a soma deve ser 9 e só aceita números'); */


//exercicio 2
const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
console.log(myRemove([1, 2, 3, 4], 3));
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4], 'ERROR'); 
 
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4], 'ERROR 2');