import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

class Personagens extends React.Component {
    cards(character) {
        return (
            <Link to={`/details/${character.id}`} className="details-link">
                <div className='each-one'>
                    <img src={character.image} alt='imagem do personagem'/>
                    <p>{character.name}</p>
                </div>
            </Link>
        );
    };
    
    render() {
        console.log(this.props.personagens);
        if (this.props.personagens.length > 0) {
            return (
                <div className='personagens-div'>
                    <Link to="/" className="return">Voltar</Link>
                    <div className="main-personagens-div">
                        {this.props.personagens.map((character) => this.cards(character))}
                    </div>
                </div>
            );
        } return <Redirect to='/empty' />
        }
};

const mapStateToProps = (state) => ({
    personagens: state.portalReducer.characters,
});

export default connect(mapStateToProps)(Personagens);