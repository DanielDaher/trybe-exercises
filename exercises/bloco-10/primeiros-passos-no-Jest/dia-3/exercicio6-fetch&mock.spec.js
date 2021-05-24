const fetch = require("node-fetch");

let dogImage = () => {
    return fetch('https://dog.ceo/api/breeds/image/random')
    .then((dog) => dog.json()
    .then((json) =>
        dog.ok ? Promise.resolve(json) : Promise.reject(json)))
};

describe('Exercício 6', () => {
    dogImage = jest.fn();
    it('Testa se a requisição se resolveu como valor request sucess', async () => {
        dogImage.mockResolvedValue('request sucess');
        expect(dogImage()).resolves.toEqual('request sucess');
    })
})
