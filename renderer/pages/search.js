import React from 'react';
import {bindActionCreators} from 'redux';
import {route} from '../actions';
import initStore from '../store';
import withRedux from 'next-redux-wrapper';

import Layout, {getInitialProps} from '../components/Layout';
import TitleBar from '../components/TitleBar';
import SearchBar from '../components/SearchBar';

const Search = ({route}) =>
    <Layout route={route}>
        <TitleBar title={'Search'} />
        <SearchBar />
    </Layout>;

Search.getInitialProps = getInitialProps;

const mapDispatchToProps = (dispatch) => ({
    route: bindActionCreators(route, dispatch)
});

export default withRedux(initStore, null, mapDispatchToProps)(Search)
