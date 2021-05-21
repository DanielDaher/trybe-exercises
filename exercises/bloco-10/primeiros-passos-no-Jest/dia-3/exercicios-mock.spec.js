let randomNumber = require('./exercicios-mock');

afterEach(() => {
    randomNumber.mockClear();
})
describe('Exercício 1', () => {
    test('Testa randomNumber com retorno 10 e quantas vezes foi chamada', () => {
        randomNumber = jest.fn();
        randomNumber();
        expect(randomNumber).toHaveBeenCalled();
    });
});

describe('Exercicio 2,', () => {
    it('utilizando mock, randomNumber deve receber dois parâmetros e dividir o primeiro pelo segundo', () => {
        randomNumber.mockImplementation((a, b) => a/b);
        expect(randomNumber(10, 5)).toEqual(2);
        expect(randomNumber).toHaveBeenCalled();
        expect(randomNumber).toHaveBeenCalledTimes(1);
        expect(randomNumber).toHaveBeenCalledWith(10, 5);
    });
});

describe('Exercício 3', () => {
    it('Utilizando mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes, resete a implementação e crie uma nova, que receba um parâmetro e retorne o seu dobro.', () => {
        randomNumber.mockImplementation((a, b, c) => a * b * c);
        expect(randomNumber(2, 3, 4)).toEqual(24);
        expect(randomNumber).toHaveBeenCalled();
        expect(randomNumber).toHaveBeenCalledTimes(1);
        expect(randomNumber).toHaveBeenCalledWith(2, 3, 4);
        randomNumber.mockClear();
        randomNumber.mockImplementation((a) => a * 2);
        expect(randomNumber(4)).toEqual(8);
        expect(randomNumber).toHaveBeenCalledTimes(1);
        expect(randomNumber).toHaveBeenCalledWith(4);
    });
});


