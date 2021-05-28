import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      favorite: 0
    }

    this.textInsertion = this.textInsertion.bind(this);
  }

  textInsertion(event) {
    console.log(event.target.name);
    const { name, value } = event.target;
    this.setState(() => ({
      [name]: value
    }));

  }

  render() {
    
    return (
      <div className="App">
        <h1>Formulário</h1>
        <form>
          <select></select>
          <input></input>
          <input></input>
          <textarea name='favoriteBook' value={this.state.favoriteBook} onChange={this.textInsertion}></textarea>
        </form>
    </div>
  );
}
}

export default App;
