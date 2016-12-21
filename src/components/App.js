import React, {PropTypes} from 'react';

import Navigation from './Navigation';

const App = ({children}) =>
    <section className="app">
        <Navigation />
        {children}
    </section>;

App.displayName = 'App';

App.propTypes = {
    children: PropTypes.object
};

export default App;
