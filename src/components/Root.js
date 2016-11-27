import React, {PropTypes} from 'react';
import {Provider} from 'react-redux';

import App from './App';

class Root extends React.Component {
    componentDidMount() {
        require('./Root.scss');
    }

    render() {
        return (
            <Provider store={this.props.store}>
                <App />
            </Provider>
        );
    }
}

Root.displayName = 'Root';

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;
