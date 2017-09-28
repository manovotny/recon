import React from 'react';
import {bindActionCreators} from 'redux';
import {route} from '../actions';
import initStore from '../store';
import withRedux from 'next-redux-wrapper';

import Layout, {getInitialProps} from "../components/Layout";
import StyledTitle from '../components/StyledTitle';

const App = ({route}) =>
    <Layout route={route}>
        <StyledTitle>{'Search'}</StyledTitle>
    </Layout>;

App.getInitialProps = getInitialProps;

const mapDispatchToProps = (dispatch) => ({
    route: bindActionCreators(route, dispatch)
});

export default withRedux(initStore, null, mapDispatchToProps)(App)
