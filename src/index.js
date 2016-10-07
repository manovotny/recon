import React from 'react';
import {createStore} from 'redux';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import App from './app';

const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            const obj = {
                ...state,
                name: action.name
            };

            return obj;
        default:
            return state;
    }
};
const store = createStore(reducer, {
    name: 'Michael Novotny'
});

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
