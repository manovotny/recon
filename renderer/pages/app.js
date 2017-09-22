import React from 'react';
import Link from 'next/link';
import {bindActionCreators} from 'redux';
import {route} from '../actions';
import initStore from '../store';
import withRedux from 'next-redux-wrapper';

import BasePage from '../components/BasePage';
import StyledTitle from '../components/StyledTitle';

class App extends BasePage {
    render() {
        return (
            <section>
                <StyledTitle>{'App'}</StyledTitle>
                <Link
                    href="/about"
                    prefetch
                >
                    <a href="/about">{'About'}</a>
                </Link>
            </section>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    route: bindActionCreators(route, dispatch)
});

export default withRedux(initStore, null, mapDispatchToProps)(App)
