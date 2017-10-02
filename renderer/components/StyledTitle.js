import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    color: #f00;
    cursor: pointer;
    font-size: 50px;
`;

const StyledTitle = ({children}) =>
    <Title>
        {children}
    </Title>;

StyledTitle.propTypes = {
    children: PropTypes.string
};

export default StyledTitle;
