import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

const SearchOptions = ({term}) => {
    if (!term.length) {
        return null;
    }

    return (
        <ul className="search-options">
            <li>
                <Link to="/search/music">{`Music Artists with "${term}"`}</Link>
            </li>
            <li>
                <Link to="/search/movies">{`Movies with "${term}"`}</Link>
            </li>
        </ul>
    );
};

SearchOptions.displayName = 'SearchOptions';

SearchOptions.propTypes = {
    term: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
    term: state.term
});

export default connect(
    mapStateToProps
)(SearchOptions);
