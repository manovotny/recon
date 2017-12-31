import React from 'react';
import styled from 'styled-components';

import Link from './Link';

const StyledNav = styled.nav`
    -webkit-app-region: drag;
    background-color: #262626;
    bottom: 0;
    left: 0;
    overflow: hidden;
    padding-top: 10px;
    position: fixed;
    top: 0;
    width: 75px;

    a {
        color: #fff;
        display: block;
        margin: 15px 0;
    }
`;

const Navigation = () =>
    <StyledNav className="navigation">
        <Link href="/notifications">{'Notifications'}</Link>
        <Link href="/music">{'Music'}</Link>
    </StyledNav>;

export default Navigation;
