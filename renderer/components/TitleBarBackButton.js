import React from 'react';
import PropTypes from 'prop-types';

const TitleBarBackButton = ({previous, previousTo}) => {
    if (!previous || !previousTo) {
        return null;
    }

    return (
        <button type="button">{'BACK'}</button>
    );
};

TitleBarBackButton.propTypes = {
    previous: PropTypes.string,
    previousTo: PropTypes.string
};

export default TitleBarBackButton;
