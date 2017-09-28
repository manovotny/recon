import React from 'react';
import Router from 'next/router';
import reset from 'styled-reset'
import styled, {injectGlobal} from 'styled-components';

import Navigation from '../components/Navigation';

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
                <Navigation/>
                <StyledMain>
                    {this.props.children}
                </StyledMain>
            </section>
        )
    }
}

export default Layout;
