import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import SearchResults from './SearchResults';
import TitleBar from './TitleBar';
import {searchMovies} from '../actions';

class SearchMovies extends Component {
    componentWillMount() {
        const {dispatch, term} = this.props;

        dispatch(searchMovies(term));
    }

    render() {
        return (
            <main>
                <TitleBar
                    previous={'Search'}
                    previousTo={'/search'}
                    title={this.props.term}
                />
                <SearchResults titleAttribute="trackName" />
            </main>
        );
    }
}

SearchMovies.displayName = 'SearchMovies';

SearchMovies.propTypes = {
    dispatch: PropTypes.func.isRequired,
    term: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
    term: state.term
});

export default connect(
    mapStateToProps
)(SearchMovies);
