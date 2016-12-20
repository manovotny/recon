import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import {changeTerm} from '../actions';

import Navigation from './Navigation';
import SearchOptions from './SearchOptions';
import TitleBar from './TitleBar';

const Search = ({term, dispatch}) =>
    <section className="app">
        <Navigation />
        <main>
            <TitleBar title={'Search'} />
            <section className="search-bar">
                <input
                    onChange={(event) => dispatch(changeTerm(event.target.value))}
                    placeholder="Search iTunes"
                    value={term}
                />
            </section>
            <SearchOptions />
        </main>
    </section>;

Search.displayName = 'Search';

Search.propTypes = {
    dispatch: PropTypes.func.isRequired,
    term: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
    term: state.term
});

export default connect(
    mapStateToProps
)(Search);
