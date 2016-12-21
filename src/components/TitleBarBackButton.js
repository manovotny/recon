import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const TitleBarBackButton = ({previous, previousTo}) => {
    if (!previous || !previousTo) {
        return null;
    }

    return (
        <Link to={previousTo}>{previous}</Link>
    );
};

TitleBarBackButton.displayName = 'TitleBarBackButton';

TitleBarBackButton.propTypes = {
    previous: PropTypes.string,
    previousTo: PropTypes.string
};

export default TitleBarBackButton;
