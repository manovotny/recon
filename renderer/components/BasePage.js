import React from 'react';
import Router from 'next/router';
import reset from 'styled-reset'
import {injectGlobal} from 'styled-components';

export const getInitialProps = ({store, isServer, pathname, res}) => {
    if (isServer) {
        const r = store.getState().route;

        if (r !== pathname) {
            res.writeHead(301, {
                Location: r
            });
            res.end();
        }

        injectGlobal`
            ${reset}

            html {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
            }
        `;
    }

    return store;
};

class BasePage extends React.Component {
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
                {this.props.children}
            </section>
        )
    }
}

export default BasePage;
