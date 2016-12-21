import React, {PropTypes} from 'react';

import TitleBarBackButton from './TitleBarBackButton';

const TitleBar = ({previous, previousTo, title}) =>
    <header className="header">
        <TitleBarBackButton
            previous={previous}
            previousTo={previousTo}
        />
        <h1 className="title-bar">{title}</h1>
    </header>;

TitleBar.displayName = 'TitleBar';

TitleBar.propTypes = {
    previous: PropTypes.string,
    previousTo: PropTypes.string,
    title: PropTypes.string.isRequired
};

export default TitleBar;
