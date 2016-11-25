import {combineReducers} from 'redux';

import {types} from '../actions';

const isFetching = (state = false, action) => {
    switch (action.type) {
        case types.DO_SEARCH:
            return true;
        case types.SEARCH_COMPLETE:
            return false;
        default:
            return state;
    }
};

const name = (state = 'Michael Novotny', action) => {
    switch (action.type) {
        case types.CHANGE_NAME:
            return action.name;
        default:
            return state;
    }
};

const response = (state = null, action) => {
    switch (action.type) {
        case types.SEARCH_COMPLETE:
            return action.response;
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
    isFetching,
    name,
    response,
    term
});

export default reducers;
