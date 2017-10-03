import Router from 'next/router';
import PropTypes from 'prop-types';
import React from 'react';
import styled, {injectGlobal} from 'styled-components';
import reset from 'styled-reset';

import Navigation from '../components/Navigation';

export const getInitialProps = ({store, isServer, pathname, res}) => {
    if (isServer) {
        const route = store.getState().route;

        if (route !== pathname) {
            res.writeHead(301, {
                Location: route
            });
            res.end();
        }

        // eslint-disable-next-line no-unused-expressions
        injectGlobal`
            ${reset}

            html {
                box-sizing: border-box;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
                line-height: 1.25;
            }
            
            *,
            *::before,
            *::after {
                box-sizing: inherit;
            }
        `;
    }

    return store;
};

const StyledMain = styled.main`
    background-color: #F5F5F5;
    bottom: 0;
    left: 75px;
    position: absolute;
    right: 0;
    top: 0;
    word-break: break-word;
`;

class Layout extends React.Component {
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
                <Navigation />
                <StyledMain>
                    {this.props.children}
                </StyledMain>
            </section>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element
    ]).isRequired,
    route: PropTypes.func
};

export default Layout;
