import * as api from '../api';

export const types = {
    CHANGE_NAME: 'CHANGE_NAME',
    DO_SEARCH: 'DO_SEARCH',
    SEARCH_COMPLETE: 'SEARCH_COMPLETE',
    UPDATE_SEARCH_TERM: 'UPDATE_SEARCH_TERM'
};

export const changeName = (name) => (dispatch) => {
    dispatch({
        name,
        type: types.CHANGE_NAME
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
