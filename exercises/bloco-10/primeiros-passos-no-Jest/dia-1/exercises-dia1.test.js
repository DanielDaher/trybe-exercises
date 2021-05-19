const { sum } = require('./exercises-dia1.js');
const { myRemove } = require('./exercises-dia1.js');

describe('Testar a função sum', () => {
    it('Testa se o retorno de sum(4, 5) é 9', () => {
        expect(sum(4, 5)).toEqual(9);
    });
    it('Testa se o retorno de sum(0, 0) é 0', () => {
        expect(sum(0, 0)).toEqual(0);
    });
    it('Testa se o retorno de sum(4, "5") é um erro', () => {
        expect(() => {sum(4, "5")}).toThrow('parameters must be numbers');
    });
});

describe('Testa a função myRemove', () => {
    it('Testa se myRemove([1, 2, 3, 4], 3) retorna [1, 2, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });
    it('Testa se myRemove([1, 2, 3, 4], 3) NÃO retorna [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });
});