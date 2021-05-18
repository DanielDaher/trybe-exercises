const infoUser = (param) => {
  const em = param.toLowerCase().split(' ').join('_');
  return { nomeCompleto: param, email: `${em}@trybe.com` };
};

const newEmployees = () => {
    const employees = {
      id1: infoUser('Pedro Guerra'),
      id2: infoUser('Luiza Drumond'),
      id3: infoUser('Carla Paiva')
    }
    return employees;
  };

  console.log(newEmployees());


//exercício 2

const validateNumbers = (number, randomNumber) => {
  if (number === randomNumber) {
    return true;
}
};

const sorteio = (number, validateNumbers) => {
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  console.log(randomNumber);
  if (validateNumbers(number, randomNumber) === true ) {
    return 'Parabéns, vocẽ ganhou!';
  } else {
    return 'Tente Novamente';
  }
};


console.log(sorteio(3, validateNumbers));