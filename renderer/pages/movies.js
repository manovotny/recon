import withRedux from 'next-redux-wrapper';
import PropTypes from 'prop-types';
import React from 'react';
import {bindActionCreators} from 'redux';

import {route} from '../actions';
import Layout, {getInitialProps} from '../components/Layout';
import StyledTitle from '../components/StyledTitle';
import initStore from '../store';

const Movies = (props) =>
    <Layout route={props.route}>
        <StyledTitle>{'Movies'}</StyledTitle>
    </Layout>;

Movies.getInitialProps = getInitialProps;

Movies.propTypes = {
    route: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
    route: bindActionCreators(route, dispatch)
});

export default withRedux(initStore, null, mapDispatchToProps)(Movies);
