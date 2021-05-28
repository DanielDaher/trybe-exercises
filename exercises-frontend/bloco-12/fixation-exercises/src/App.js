import React from "react";
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      backgroundColor: 'white',
      classNameClick1: 'colorGreen',
      classNameClick2: 'colorGreen',
      bodyClass: 'App'
    }
    this.countingClicks1 = this.countingClicks1.bind(this);
    this.countingClicks2 = this.countingClicks2.bind(this);
  }
  
  countingClicks1() {
    this.setState((estadoAnterior) => ({
      numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1,
    }))
    if ((this.state.numeroDeCliques1 + 1) % 2 === 0) {
      this.setState(() => ({
        classNameClick1: 'colorGreen'
      }))
    } else {
      this.setState(() => ({
        classNameClick1: 'colorGray'
      }))
    }
  }
  
  countingClicks2() {
    this.setState((estadoAnterior) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1
    }))
    if ((this.state.numeroDeCliques2 + 1) % 2 === 0) {
      this.setState(() => ({
        classNameClick2: 'colorGreen'
      }))
    } else {
      this.setState(() => ({
        classNameClick2: 'colorGray'
      }))
    }
  }

  
  changeColor = (event) => {
    if (this.state.backgroundColor === 'green') {
      this.setState(() => ({
        backgroundColor: 'white'
      }));
    } else {
      this.setState(() => ({
        backgroundColor: 'green'
      }))
    }
  }

  changeBodyColor = () => {
    if (this.state.bodyClass === 'App') {
      this.setState(() => ({
        bodyClass: 'App colorAquamarine'
      }))
    } else {
        this.setState(() => ({
          bodyClass: 'App'
        }))
    }
  }
  
  
  render() {
    const actualColor = {
      backgroundColor: this.state.backgroundColor
    };
    return (
    <div className={this.state.bodyClass}>
    <div className='personalizada'>
      <button className={this.state.classNameClick1} onClick={this.countingClicks1}>Botão {this.state.numeroDeCliques1}</button>
      <button className={this.state.classNameClick2} onClick={this.countingClicks2}>Outro Botão {this.state.numeroDeCliques2}</button>
      <button style={actualColor} onClick={(event) => this.changeColor(event)}>Mudar a cor</button>
      <button onClick={this.changeBodyColor}>Mude a cor da pagina </button>
    </div>
    </div>
  );
}
}

export default App;
