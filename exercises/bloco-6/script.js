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