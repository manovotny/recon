import fs from 'fs-extra';
import {join} from 'path';

import {composeWithDevTools} from 'redux-devtools-extension'

import throttle from 'lodash.throttle';
import thunk from 'redux-thunk';
import {app, remote} from 'electron';
import {applyMiddleware, createStore} from 'redux';

import reducers from './reducers';

const getStatePath = () => {
    const userDataPath = app ? app.getPath('userData') : remote.app.getPath('userData');

    return join(userDataPath, 'state.json');
};

const getInitialState = () => {
    const defaultState = {
        route: '/search'
    };
    const path = getStatePath();
    const state = fs.readJsonSync(path, {throws: false});

    return state || defaultState;
};

export const saveState = (state) => {
    const path = getStatePath();

    fs.writeJsonSync(path, state);
};

const initStore = () => {
    const store = createStore(
        reducers,
        getInitialState(),
        composeWithDevTools(applyMiddleware(thunk))
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

export default initStore;
