import React, {PropTypes} from 'react';

const SearchResults = ({isFetching, response}) => {
    if (!response) {
        return null;
    }

    if (isFetching) {
        return (
            <p>{'Loading...'}</p>
        );
    }

    return (
        <ul>
            {response.results.map((result, index) => <li key={index}>{result.artistName}</li>)}
        </ul>
    );
};

SearchResults.displayName = 'SearchResults';

SearchResults.propTypes = {
    isFetching: PropTypes.bool,
    response: PropTypes.object
};

export default SearchResults;
