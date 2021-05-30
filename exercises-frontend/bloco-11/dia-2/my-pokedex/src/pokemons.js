import React from 'react';
import './App.css';
import PropTypes from 'prop-types';


class Pokefile extends React.Component {
    render() {
        return (
            <div className='blocos'>
                {this.props.pokemons.map((pokemon) => (<div key={ pokemon.id } className='Poks'>
                <p>{pokemon.name}</p>
                <p>{pokemon.type}</p>
                <p>{pokemon.averageWeight.value}{pokemon.averageWeight.measurementUnit}</p>
                <img src={pokemon.image} alt='Imagem do pokemon' />
                </div>))}
            </div>
        )
    }
}

Pokefile.propTypes = {
    pokemons: PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
        averageWeight: PropTypes.shape({
            value: PropTypes.number,
            measurementUnit: PropTypes.string
        }),
        image: PropTypes.string
    })
}

export default Pokefile;