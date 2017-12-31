import withRedux from 'next-redux-wrapper';
import PropTypes from 'prop-types';
import React from 'react';
import {bindActionCreators} from 'redux';

import {route} from '../actions';
import Layout from '../components/Layout';
import StyledTitle from '../components/StyledTitle';
import getInitialProps from '../services/get-initial-props';
import initStore from '../store';

const Error = (props) =>
    <Layout route={props.route}>
        <StyledTitle>
            {props.statusCode
                ? `An error ${props.statusCode} occurred on server`
                : 'An error occurred on client'}
        </StyledTitle>
    </Layout>;

Error.getInitialProps = (props) => {
    getInitialProps(props);

    const {err, res} = props;
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;

    return {statusCode}
};

Error.propTypes = {
    route: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
    route: bindActionCreators(route, dispatch)
});

export default withRedux(initStore, null, mapDispatchToProps)(Error);
