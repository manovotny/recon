import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {connect} from 'react-redux';

import {changeTerm} from '../actions';

const StyledSection = styled.section`
    background-color: #eaeaea;
    padding: 6px;

    input {
        border: 1px solid #cdcdcd;
        border-radius: 2px;
        padding: 4px;
        width: 100%;
    }
`;

const SearchBar = ({dispatch, term}) =>
    <StyledSection>
        <input
            onChange={(event) => dispatch(changeTerm(event.target.value))}
            placeholder="Search iTunes"
            value={term}
        />
    </StyledSection>;

SearchBar.propTypes = {
    dispatch: PropTypes.func.isRequired,
    term: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
    term: state.term
});

export default connect(mapStateToProps)(SearchBar);
