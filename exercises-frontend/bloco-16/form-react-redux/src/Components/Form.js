import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { submitting } from '../actions/submitAction';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submit: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const { name } = event.target;
    this.setState({ [name]: event.target.value });
  }

  handleClick() {
    /* const { submit, name, email, CPF, adress, city } = this.state; */
    const { toSubmit } = this.props;
    toSubmit(this.state);
    this.setState({
      submit: true
    });
  }

  render() {
    const { submit } = this.state;
    if (submit) {
      return (<Redirect to="/checkout" />)
    }
    return (
      <div>
        <form className='formulario'>
          <Link to='/' className='links'>Voltar</Link>
          <label>
            Nome:
            <input type="text" name='name' onChange={this.handleChange} />
          </label>
          <label>
            Email:
            <input type="text" name='email' onChange={this.handleChange} />
          </label>
          <label>
            CPF:
            <input type="text" name="CPF" onChange={this.handleChange} />
          </label>
          <label>
            Endereço:
            <input type="text" name="adress" onChange={this.handleChange} />
          </label>
          <label>
            Cidade:
            <input type="text" name="city" onChange={this.handleChange} />
          </label>
          <button type='button' onClick={this.handleClick}>Cadastrar</button>
        </form>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => ({
  toSubmit: (state) => dispatch(submitting(state))
});

export default connect(null, mapDispatchToProps)(Form);
