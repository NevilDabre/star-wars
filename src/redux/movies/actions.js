import { SET_MOVIES_LIST, SET_MOVIES_INFO } from "./actionTypes";
import axios from 'axios';

export const fetchMovieInfoFromApi = async (url) => {
    url = url.replace(/^http:\/\//i, 'https://'); //Netlify issue for http links
    console.log('url ', url)
    const movieInfo = await axios.get(url);
    return movieInfo && movieInfo.data;
}

export const setMoviesList = moviesList => dispatch => {
    return dispatch({
        type: SET_MOVIES_LIST,
        payload: moviesList
    });
}

export const setMovieInfo = movieInfo => dispatch => {
    console.log('movieInfo ', movieInfo)
    return dispatch({
        type: SET_MOVIES_INFO,
        payload: movieInfo
    });
}
