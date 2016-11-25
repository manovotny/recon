import React, {PropTypes} from 'react';
import Chance from 'chance';
import {connect} from 'react-redux';
import {remote} from 'electron';

import {changeName, changeTerm, search} from '../actions';

import SearchResults from './SearchResults';

const chance = new Chance();

const App = ({name, isFetching, response, term, dispatch}) =>
    <section>
        <h1>{'Hello React!'}</h1>
        <h2>{`User Data: ${remote.app.getPath('userData')}`}</h2>
        <button onClick={() => dispatch(changeName(chance.name()))}>
            {'Change Name'}
        </button>
        <p>{`Name: ${name}`}</p>
        <input
            onChange={(event) => dispatch(changeTerm(event.target.value))}
            value={term}
        />
        <button onClick={() => dispatch(search(term))}>
            {'Search'}
        </button>
        <SearchResults
            isFetching={isFetching}
            response={response}
        />
    </section>;

App.displayName = 'App';

App.propTypes = {
    dispatch: PropTypes.func.isRequired,
    isFetching: PropTypes.bool,
    name: PropTypes.string.isRequired,
    response: PropTypes.object,
    term: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
    isFetching: state.isFetching,
    name: state.name,
    response: state.response,
    term: state.term
});

export default connect(
    mapStateToProps
)(App);
