import Router from 'next/router';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Navigation from '../components/Navigation';

const StyledMain = styled.main`
    background-color: #f5f5f5;
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
