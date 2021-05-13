import { SET_MOVIES_LIST, SET_MOVIES_INFO } from './actionTypes'

export const moviesReducer = function (state = {}, action) {
    switch (action.type) {
        case SET_MOVIES_LIST:
            return { ...state, moviesList: action.payload, movieInfo: null };
        case SET_MOVIES_INFO:
            return { ...state, movieInfo: action.payload };
        default:
            return state;
    }
};

export default moviesReducer;