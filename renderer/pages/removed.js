import withRedux from 'next-redux-wrapper';
import PropTypes from 'prop-types';
import React from 'react';
import {bindActionCreators} from 'redux';

import {route} from '../actions';
import Layout from '../components/Layout';
import StyledTitle from '../components/StyledTitle';
import getInitialProps from '../services/get-initial-props';
import initStore from '../store';

const Removed = (props) =>
    <Layout route={props.route}>
        <StyledTitle>{'Removed'}</StyledTitle>
    </Layout>;

Removed.getInitialProps = getInitialProps;

Removed.propTypes = {
    route: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
    route: bindActionCreators(route, dispatch)
});

export default withRedux(initStore, null, mapDispatchToProps)(Removed);
