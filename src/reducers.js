import {combineReducers} from 'redux';

import {types} from './actions';

const searchResults = (state = null, action) => {
    switch (action.type) {
        case types.SET_SEARCH_RESULTS:
            return action.searchResults;
        default:
            return state;
    }
};

const route = (state = '/notifications', action) => {
    switch (action.type) {
        case types.ROUTE:
            return action.route;
        default:
            return state;
    }
};

const term = (state = '', action) => {
    switch (action.type) {
        case types.UPDATE_SEARCH_TERM:
            return action.term;
        default:
            return state;
    }
};

const reducers = combineReducers({
    route,
    searchResults,
    term
});

export default reducers;
