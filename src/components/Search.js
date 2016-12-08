import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import {changeTerm, search} from '../actions';

import Navigation from './Navigation';
import SearchResults from './SearchResults';

const Search = ({term, isFetching, response, dispatch}) =>
    <section className="app">
        <Navigation />
        <main>
            <h2>{'Search'}</h2>
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
        </main>
    </section>;

Search.displayName = 'Search';

Search.propTypes = {
    dispatch: PropTypes.func.isRequired,
    isFetching: PropTypes.bool,
    response: PropTypes.object,
    term: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
    isFetching: state.isFetching,
    response: state.response,
    term: state.term
});

export default connect(
    mapStateToProps
)(Search);
