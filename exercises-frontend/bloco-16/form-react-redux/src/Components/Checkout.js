import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Checkout extends React.Component {
  render() {
    return (
      <div className="checkout-msg">
        <p>Parabéns {this.props.form.name}, seu cadastro foi registrado com sucesso!</p>
        <Link to='/' className="link-in-checkout">Voltar</Link>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  form: state.formReducer
});

export default connect(mapStateToProps, null)(Checkout);
