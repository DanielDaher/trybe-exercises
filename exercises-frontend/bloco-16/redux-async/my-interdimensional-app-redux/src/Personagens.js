import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

class Personagens extends React.Component {
    cards(character) {
        return (
            <div className='each-one'>
                <img src={character.image} alt='imagem do personagem'/>
                <p>{character.name}</p>
            </div>
        );
    };
    
    render() {
        console.log(this.props.osCria);
        if (this.props.osCria.length > 0) {
            return (
                <div className='personagens-div'>
                    <Link to="/" className="return">Voltar</Link>
                    <div className="main-personagens-div">
                        {this.props.osCria.map((character) => this.cards(character))}
                    </div>
                </div>
            );
        } return <Redirect to='/empty' />
        }
};

const mapStateToProps = (state) => ({
    osCria: state.portalReducer.characters,
});

export default connect(mapStateToProps)(Personagens);