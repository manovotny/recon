import React from 'react';
import Router from 'next/router';

class BasePage extends React.Component {
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
}

export default BasePage;
