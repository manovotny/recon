import React from 'react';
import {bindActionCreators} from 'redux';
import {route} from '../actions';
import initStore from '../store';
import withRedux from 'next-redux-wrapper';

import BasePage, {getInitialProps} from "../components/BasePage";
import Link from '../components/Link';
import StyledTitle from '../components/StyledTitle';

const App = ({route}) =>
    <BasePage route={route}>
        <StyledTitle>{'App'}</StyledTitle>
        <Link href="/about">{'About'}</Link>
    </BasePage>;

App.getInitialProps = getInitialProps;

const mapDispatchToProps = (dispatch) => ({
    route: bindActionCreators(route, dispatch)
});

export default withRedux(initStore, null, mapDispatchToProps)(App)
