import withRedux from 'next-redux-wrapper';
import PropTypes from 'prop-types';
import React from 'react';
import {bindActionCreators} from 'redux';

import {route} from '../actions';
import Layout, {getInitialProps} from '../components/Layout';
import StyledTitle from '../components/StyledTitle';
import initStore from '../store';

const Notifications = (props) =>
    <Layout route={props.route}>
        <StyledTitle>{'Notifications'}</StyledTitle>
    </Layout>;

Notifications.getInitialProps = getInitialProps;

Notifications.propTypes = {
    route: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
    route: bindActionCreators(route, dispatch)
});

export default withRedux(initStore, null, mapDispatchToProps)(Notifications);