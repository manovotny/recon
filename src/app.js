import React, {PropTypes} from 'react';
import Chance from 'chance';
import {connect} from 'react-redux';
import {remote} from 'electron';

const App = ({name, onClick}) => {
    return (
        <section>
            <h1>{'Hello React!'}</h1>
            <h2>{`User Data: ${remote.app.getPath('userData')}`}</h2>
            <button onClick={onClick}>
                {'Change Name'}
            </button>
            <p>{`Name: ${name}`}</p>
        </section>
    );
};

App.displayName = 'App';

App.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        name: state.name
    };
};

const mapDispatchToProps = (dispatch) => {
    const chance = new Chance();

    return {
        onClick: () => {
            dispatch({
                name: chance.name(),
                type: 'CHANGE_NAME'
            });
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
