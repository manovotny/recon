import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const getBackButton = (previous, previousTo) => {
    if (!previous || !previousTo) {
        return null;
    }

    return (
        <Link to={previousTo}>{previous}</Link>
    );
};

const TitleBar = ({previous, previousTo, title}) => {
    const backButton = getBackButton(previous, previousTo);

    return (
        <header className="header">
            {backButton}
            <h1 className="title-bar">{title}</h1>
        </header>
    );
};

TitleBar.displayName = 'TitleBar';

TitleBar.propTypes = {
    previous: PropTypes.string,
    previousTo: PropTypes.string,
    title: PropTypes.string.isRequired
};

export default TitleBar;
