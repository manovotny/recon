import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {searchMusic} from '../actions';

import SearchResults from './SearchResults';
import TitleBar from './TitleBar';

class SearchMusic extends Component {
    componentWillMount() {
        const {dispatch, term} = this.props;

        dispatch(searchMusic(term));
    }

    render() {
        return (
            <main>
                <TitleBar
                    previous={'Search'}
                    previousTo={'/search'}
                    title={this.props.term}
                />
                <SearchResults titleAttribute="artistName" />
            </main>
        );
    }
}

SearchMusic.displayName = 'SearchMusic';

SearchMusic.propTypes = {
    dispatch: PropTypes.func.isRequired,
    term: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
    term: state.term
});

export default connect(
    mapStateToProps
)(SearchMusic);
