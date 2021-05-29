import React from 'react';
import './App.css';


class Pokefile extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      item: this.props.pokemons[0],
      number: 0
      }
      this.next = this.next.bind(this);
      this.preview = this.preview.bind(this);
    }

    next() {
      const lastPok = this.props.pokemons.length - 1;
      if (this.state.number === lastPok) this.setState({
          item: this.props.pokemons[0],
          number: 0
        });
       else this.setState((estadoAnterior) => ({
          item: this.props.pokemons[this.state.number + 1],
          number: estadoAnterior.number + 1
        }));
    };

    preview() {
      if (this.state.number === 0) {
        const index = this.props.pokemons.length - 1
        this.setState(() => ({
          item: this.props.pokemons[index],
          number: index

        }))
      } else {

      this.setState((estadoAnterior) => ({
        item: this.props.pokemons[this.state.number - 1],
        number: estadoAnterior.number - 1
      }))
    }
    };

    render() {
      const { name, type, averageWeight, image } = this.state.item;
        return (
          <div className='center'>
            <span className="esquerda" onClick={this.preview}></span>
            <div className='Poks'>
            <p>{name}</p>
            <p>{type}</p>
            <p>{averageWeight.value}{averageWeight.measurementUnit}</p>
            <img src={image} alt='Imagem do pokemon' />
          </div>
          <span className='direita' onClick={this.next}></span>
          </div>
      )
}
}

export default Pokefile;