const INITIAL_STATE = {
  name: '',
  email: '',
  CPF: '',
  Endereço: '',
  Cidade: ''
};

export default function formReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SUBMIT':
      return {
        name: action.form.name,
        email: action.form.email,
        CPF: action.form.cpf,
        Endereço: action.form.adress,
        Cidade: action.form.city
      };
    default:
      return state;
  }
};
