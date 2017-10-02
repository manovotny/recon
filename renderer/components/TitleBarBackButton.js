import React from 'react';
import PropTypes from 'prop-types';

const TitleBarBackButton = ({previous, previousTo}) => {
    if (!previous || !previousTo) {
        return null;
    }

    return (
        <a>{'BACK'}</a>
    );
};

TitleBarBackButton.propTypes = {
    previous: PropTypes.string,
    previousTo: PropTypes.string
};

export default TitleBarBackButton;
