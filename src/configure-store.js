import {applyMiddleware, createStore} from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './reducers';

const configureStore = () => {
    const middlewares = [thunk];

    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(createLogger());
    }

    return createStore(
        reducers,
        applyMiddleware(...middlewares)
    );
};

export default configureStore;
