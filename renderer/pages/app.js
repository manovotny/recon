import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import {bindActionCreators} from 'redux';
import {route} from '../actions';
import initStore from '../store';
import withRedux from 'next-redux-wrapper';
import styled from 'styled-components';

const StyledTitle = styled.h1`
    color: #f00;
    cursor: pointer;
    font-size: 50px;
`;

class App extends React.Component {
    static getInitialProps ({store, isServer, pathname, res}) {
        const r = store.getState().route;

        if (isServer && r !== pathname) {
            res.writeHead(301, {
                Location: r
            });
            res.end();
        }

        return store;
    }

    componentWillMount() {
        Router.onRouteChangeComplete = (url) => {
            this.props.route(url);
        };
    }

    componentWillUnmount() {
        Router.onRouteChangeComplete = null;
    }

    render() {
        return (
            <section>
                <StyledTitle>{'App'}</StyledTitle>
                <Link href="/about">
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
