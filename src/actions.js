import * as api from './api';

export const types = {
    SET_SEARCH_RESULTS: 'SET_SEARCH_RESULTS',
    ROUTE: 'ROUTE',
    UPDATE_SEARCH_TERM: 'UPDATE_SEARCH_TERM'
};

export const route = (value) => (dispatch) => {
    dispatch({
        route: value,
        type: types.ROUTE
    });
};

export const searchMovies = (term) => (dispatch) => {
    dispatch({
        searchResults: null,
        type: types.SET_SEARCH_RESULTS
    });

    api.searchMovies(term).then((response) => {
        dispatch({
            searchResults: response,
            type: types.SET_SEARCH_RESULTS
        });
    });
};

export const searchMusic = (term) => (dispatch) => {
    dispatch({
        searchResults: null,
        type: types.SET_SEARCH_RESULTS
    });

    api.searchMusic(term).then((response) => {
        dispatch({
            searchResults: response,
            type: types.SET_SEARCH_RESULTS
        });
    });
};

export const changeTerm = (term) => (dispatch) => {
    dispatch({
        term,
        type: types.UPDATE_SEARCH_TERM
    });
};
