import axios from 'axios';
import { SET_CHARACTERS_LIST, SET_IS_CHARACTER_FETCHING } from './actionTypes';

export const fetchCharactersFromApi = async () => {
    const charactersResult = await axios.get(`https://swapi.dev/api/people/`);
    return charactersResult && charactersResult.data ? charactersResult.data.results: null;
}

export const setCharactersList = data => dispatch => {
    return dispatch({
        type: SET_CHARACTERS_LIST,
        payload: data
    });
}

export const setIsFetching = data => dispatch =>{
    return dispatch({
        type: SET_IS_CHARACTER_FETCHING,
        payload: data
    });
}

