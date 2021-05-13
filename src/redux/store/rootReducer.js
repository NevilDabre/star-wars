import { combineReducers } from 'redux';
import characters from '../characters/reducer';
import movies from '../movies/reducer'

export default combineReducers({
    characters,
    movies
});