import React from 'react';
import {bindActionCreators} from 'redux';
import {route} from '../actions';
import initStore from '../store';
import withRedux from 'next-redux-wrapper';
import styled from 'styled-components';

const StyledSpan = styled.span`
    color: #f00;
    cursor: pointer;
    font-size: 50px;
`;

const App = ({route}) =>
    <StyledSpan onClick={() => {
        route('asdf');
    }}>
        {'This is Next.js speaking'}
    </StyledSpan>;

const mapDispatchToProps = (dispatch) => ({
    route: bindActionCreators(route, dispatch)
});

export default withRedux(initStore, null, mapDispatchToProps)(App)

