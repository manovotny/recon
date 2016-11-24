import React, {PropTypes} from 'react';
import Chance from 'chance';
import {connect} from 'react-redux';
import {remote} from 'electron';

import SearchResults from './SearchResults';

const App = ({name, isFetching, response, term, onChangeName, onSearchChange, onSearch}) =>
    <section>
        <h1>{'Hello React!'}</h1>
        <h2>{`User Data: ${remote.app.getPath('userData')}`}</h2>
        <button onClick={onChangeName}>
            {'Change Name'}
        </button>
        <p>{`Name: ${name}`}</p>
        <input
            onChange={onSearchChange}
            value={term}
        />
        <button onClick={onSearch}>
            {'Search'}
        </button>
        <SearchResults
            isFetching={isFetching}
            response={response}
        />
    </section>;

App.displayName = 'App';

App.propTypes = {
    isFetching: PropTypes.bool,
    name: PropTypes.string.isRequired,
    onChangeName: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired,
    onSearchChange: PropTypes.func.isRequired,
    response: PropTypes.object,
    term: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
    isFetching: state.isFetching,
    name: state.name,
    response: state.response,
    term: state.term
});

const mapDispatchToProps = (dispatch) => {
    const chance = new Chance();

    return {
        onChangeName: () => {
            dispatch({
                name: chance.name(),
                type: 'CHANGE_NAME'
            });
        },
        onSearch: () => {
            dispatch({
                type: 'DO_SEARCH'
            });

            window.fetch('https://itunes.apple.com/search?term=hillsong&media=music&entity=musicArtist&attribute=artistTerm')
                .then((response) => response.json())
                .then((json) => {
                    dispatch({
                        response: json,
                        type: 'SEARCH_COMPLETE'
                    });
                }).catch((error) => {
                    throw error;
                });
        },
        onSearchChange: (event) => {
            dispatch({
                term: event.target.value,
                type: 'UPDATE_SEARCH_TERM'
            });
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
