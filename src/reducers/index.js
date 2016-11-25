import {combineReducers} from 'redux';

const isFetching = (state = false, action) => {
    switch (action.type) {
        case 'DO_SEARCH':
            return true;
        case 'SEARCH_COMPLETE':
            return false;
        default:
            return state;
    }
};

const name = (state = 'Michael Novotny', action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return action.name;
        default:
            return state;
    }
};

const response = (state = null, action) => {
    switch (action.type) {
        case 'SEARCH_COMPLETE':
            return action.response;
        default:
            return state;
    }
};

const term = (state = '', action) => {
    switch (action.type) {
        case 'UPDATE_SEARCH_TERM':
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
