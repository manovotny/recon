import React from 'react';
import {applyMiddleware, createStore} from 'redux';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import createLogger from 'redux-logger';

import App from './app';

/* eslint-disable complexity */
const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name
            };
        case 'DO_SEARCH':
            return {
                ...state,
                isFetching: true
            };
        case 'SEARCH_COMPLETE':
            return {
                ...state,
                isFetching: false,
                response: action.response
            };
        case 'UPDATE_SEARCH_TERM':
            return {
                ...state,
                term: action.term
            };
        default:
            return state;
    }
};
/* eslint-disable complexity */

const middlewares = [];

if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
}

const store = createStore(reducer,
    {
        isFetching: false,
        name: 'Michael Novotny',
        term: ''
    },
    applyMiddleware(...middlewares)
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
