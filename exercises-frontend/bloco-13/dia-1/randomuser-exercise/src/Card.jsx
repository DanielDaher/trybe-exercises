import React from 'react';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    const { info } = this.props;
    this.state = {
      information: info,
    }
    this.buildCard = this.buildCard.bind(this);
    this.verifyAge = this.verifyAge.bind(this);
  }

  buildCard() {
    const { information: { email, picture: { large }, name: { first, last, title }, dob: { age } } } = this.state;
    return (
      <div className='card'>
        <img alt="Foto do usuario" src={ large } />
        <p>{title} {first}  {last} </p>
        <p>{ email }</p>
        <p>{this.verifyAge()}</p>
      </div>
    );
  }

  verifyAge() {
    const { information: { dob: { age } } } = this.state;
    console.log(age);
    const ageOfUser = age < 50 ? `${age} anos` : ``;
    return ageOfUser;
  }

  render() {
    return (
      <div>
        {this.buildCard()}
      </div>
    );
  }
}
