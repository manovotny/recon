import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

const SearchResults = ({searchResults, titleAttribute}) => {
    if (!searchResults) {
        return (
            <p>{'Loading...'}</p>
        );
    }

    return (
        <ul>
            {searchResults.results.map((result, index) => <li key={index}>{result[titleAttribute]}</li>)}
        </ul>
    );
};

SearchResults.displayName = 'SearchResults';

SearchResults.propTypes = {
    searchResults: PropTypes.object,
    titleAttribute: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
    searchResults: state.searchResults
});

export default connect(
    mapStateToProps
)(SearchResults);
