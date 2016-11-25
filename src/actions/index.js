import * as api from '../api';

export const changeName = (name) => (dispatch) => {
    dispatch({
        name,
        type: 'CHANGE_NAME'
    });
};

export const search = (term) => (dispatch) => {
    dispatch({
        type: 'DO_SEARCH'
    });

    api.search(term).then((response) => {
        dispatch({
            response,
            type: 'SEARCH_COMPLETE'
        });
    });
};

export const changeTerm = (term) => (dispatch) => {
    dispatch({
        term,
        type: 'UPDATE_SEARCH_TERM'
    });
};
