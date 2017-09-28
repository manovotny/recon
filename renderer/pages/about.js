import React from 'react';
import Link from 'next/link';
import {bindActionCreators} from 'redux';
import {route} from '../actions';
import initStore from '../store';
import withRedux from 'next-redux-wrapper';

import BasePage from '../components/BasePage';
import StyledTitle from '../components/StyledTitle';

const About = ({route}) =>
    <BasePage route={route}>
        <StyledTitle>{'About'}</StyledTitle>
        <Link
            href="/app"
            prefetch
        >
            <a href="/app">{'App'}</a>
        </Link>
    </BasePage>;

const mapDispatchToProps = (dispatch) => ({
    route: bindActionCreators(route, dispatch)
});

export default withRedux(initStore, null, mapDispatchToProps)(About)
