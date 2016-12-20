import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import Navigation from './Navigation';
import TitleBar from './TitleBar';

const SearchMovies = ({term}) =>
    <section className="app">
        <Navigation />
        <main>
            <TitleBar
                previous={'Search'}
                previousTo={'/search'}
                title={term}
            />
        </main>
    </section>;

SearchMovies.displayName = 'SearchMovies';

SearchMovies.propTypes = {
    term: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
    term: state.term
});

export default connect(
    mapStateToProps
)(SearchMovies);
