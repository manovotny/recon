import * as api from './api';

export const types = {
    DO_SEARCH: 'DO_SEARCH',
    ROUTE: 'ROUTE',
    SEARCH_COMPLETE: 'SEARCH_COMPLETE',
    UPDATE_SEARCH_TERM: 'UPDATE_SEARCH_TERM'
};

export const route = (value) => (dispatch) => {
    dispatch({
        route: value,
        type: types.ROUTE
    });
};

export const search = (term) => (dispatch) => {
    dispatch({
        type: types.DO_SEARCH
    });

    api.search(term).then((response) => {
        dispatch({
            response,
            type: types.SEARCH_COMPLETE
        });
    });
};

export const changeTerm = (term) => (dispatch) => {
    dispatch({
        term,
        type: types.UPDATE_SEARCH_TERM
    });
};
