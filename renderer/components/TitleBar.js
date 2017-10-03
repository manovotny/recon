import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeader = styled.header`
    -webkit-app-region: drag;
    background-image: linear-gradient(to bottom, #eeecee 0%, #d5d3d5 100%);
    border-bottom: 1px solid #bbb;
    color: #2d2d2d;
    margin: 0;
    padding: 10px 0;
    position: relative;
`;

const StyledTitle = styled.h1`
    font-size: 13px;
    font-weight: lighter;
    margin: 0;
    text-align: center;
`;

const TitleBar = ({title}) =>
    <StyledHeader>
        <StyledTitle>{title}</StyledTitle>
    </StyledHeader>;

TitleBar.propTypes = {
    title: PropTypes.string.isRequired
};

export default TitleBar;
