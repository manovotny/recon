import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chance from 'chance';
import {remote} from 'electron';

const App = ({name, onClick}) => {
    return (
        <section>
            <h1>Hello React!</h1>
            <h2>User Data: {remote.app.getPath('userData')}</h2>
            <button onClick={onClick}>
                Change Name
            </button>
            <p>Name: {name}</p>
        </section>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        name: state.name,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const chance = new Chance();

    return {
        onClick: () => {
            dispatch({
                type: 'CHANGE_NAME',
                name: chance.name()
            });
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
