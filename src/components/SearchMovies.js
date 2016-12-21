import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import TitleBar from './TitleBar';

const SearchMovies = ({term}) =>
    <main>
        <TitleBar
            previous={'Search'}
            previousTo={'/search'}
            title={term}
        />
    </main>;

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
