import React from 'react';
import { Link } from 'react-router-dom';
import { fetchAction } from './actions/fetchAction';
import { connect } from 'react-redux';

class Home extends React.Component {
    render() {
        const { toFetch } = this.props;
        return (
            <div>
                <Link to='/characters'>Personagens</Link>
                <button onClick={toFetch}>Fazer requisição</button>
            </div>
        );
    };
};

const mapDispatchToProps = (dispatch) => ({
    toFetch: () => dispatch(fetchAction()), 
});

export default connect(null, mapDispatchToProps)(Home);