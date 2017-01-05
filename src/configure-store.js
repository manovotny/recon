import throttle from 'lodash.throttle';
import {applyMiddleware, createStore} from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './reducers';
import {loadState, saveState} from './local-storage';

const configureStore = () => {
    const middlewares = [thunk];

    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(createLogger());
    }

    const store = createStore(
        reducers,
        loadState(),
        applyMiddleware(...middlewares)
    );

    store.subscribe(throttle(() => {
        const state = store.getState();
        const {route, term} = state;

        saveState({
            route,
            term
        });
    }, 1000));

    return store;
};

export default configureStore;
