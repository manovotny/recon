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

export default StyledTitle;
