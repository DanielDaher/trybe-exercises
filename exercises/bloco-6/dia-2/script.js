const state = document.querySelector('#state');

function createStates() {
  const allStates = ['Selecione seu estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO']

  for (let index = 0; index < allStates.length; index += 1) {
    let option = document.createElement('option');
    state.appendChild(option);
    option.innerText = allStates[index];
  }
}
createStates();

function settingData() {
  let button = document.querySelector('button');
  button.addEventListener('click', function (event) {
    event.preventDefault();
    let consolidado = document.createElement('div');
    let result = document.querySelector('.results');
    consolidado.classList.add('nova');
    result.appendChild(consolidado);
    let inputs = document.querySelectorAll('input');
    for (let index = 0; index < inputs.length; index += 1) {
      let info = document.createElement('p');
      consolidado.appendChild(info);
      info.innerText = inputs[index].name + ': ' + inputs[index].value;
    }
  })
}
settingData();

function clearDiv() {
  const buttons = document.querySelector('.removedor');
  buttons.addEventListener('click', function () {
    const infos = document.querySelector('.nova');
    infos.remove();
  })
}
clearDiv();