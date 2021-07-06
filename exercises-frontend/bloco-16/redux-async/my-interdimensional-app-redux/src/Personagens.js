import React from 'react';
import { connect } from 'react-redux';

class Personagens extends React.Component {
    cards(character) {
        return (
            <div>
                <img src={character.image} alt='imagem do personagem'/>
                <p>{character.name}</p>
            </div>
        );
    };
    
    render() {
        console.log(this.props.osCria);
        return (
            <div>
                {this.props.osCria.map((character) => this.cards(character))}
            </div>
        );
    };
};

const mapStateToProps = (state) => ({
    osCria: state.portalReducer.characters,
});

export default connect(mapStateToProps)(Personagens);