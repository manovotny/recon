import withRedux from 'next-redux-wrapper';
import PropTypes from 'prop-types';
import React from 'react';
import {bindActionCreators} from 'redux';

import {route} from '../actions';
import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';
import TitleBar from '../components/TitleBar';
import getInitialProps from '../services/get-initial-props';
import initStore from '../store';

const Search = (props) =>
    <Layout route={props.route}>
        <TitleBar title={'Search'} />
        <SearchBar />
    </Layout>;

Search.getInitialProps = getInitialProps;

Search.propTypes = {
    route: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
    route: bindActionCreators(route, dispatch)
});

export default withRedux(initStore, null, mapDispatchToProps)(Search);
