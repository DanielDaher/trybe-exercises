import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      favorite: 0
    }

    this.textInsertion = this.textInsertion.bind(this);
    this.submitInfo = this.submitInfo.bind(this);
  }

  textInsertion(event) {
    console.log(event.target.name);
    const { name, value } = event.target;
    this.setState(() => ({
      [name]: value
    }));

  }

  selection = ['MG', 'RJ', 'SP', 'BA', 'AM'];

  submitInfo(event) {
    const { completeName, favoriteBook, age, brazilianState } = this.state;
    this.setState(() => ({
      paragraph: `${completeName}, que mora em ${brazilianState}, tem ${age} anos e seu livro favorito é ${favoriteBook}!`
    }));
  }

  render() {
    
    return (
      <div className="App">
        <h1>Formulário</h1>
        <form>
          <select name='brazilianState' value={this.state.brazilianState} onChange={this.textInsertion}>
            <option>Selecione seu estado</option>
            {this.selection.sort().map((element) => <option key={element}>{element}</option>)}
          </select>
          <input name='completeName' onChange={this.textInsertion} value={this.state.completeName} placeholder='insira seu nome completo'></input>
          <input name='age' type='number' onChange={this.textInsertion} value={this.state.age} placeholder='Digite sua idade'></input>
          <textarea name='favoriteBook' value={this.state.favoriteBook} onChange={this.textInsertion} placeholder='qual seu livro favorito?'></textarea>
        </form>
        <button onClick={this.submitInfo}>Submit</button>
        <p>{this.state.paragraph}</p>
    </div>
  );
}
}

export default App;
