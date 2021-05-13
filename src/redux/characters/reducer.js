import { SET_CHARACTERS_LIST, SET_IS_CHARACTER_FETCHING } from './actionTypes'

const characterReducer = function (state = { isFetching: false }, action) {
  switch (action.type) {
    case SET_CHARACTERS_LIST:
      return { ...state, charactersList: action.payload, isFetching: false };
    case SET_IS_CHARACTER_FETCHING:
      console.log('Here for loading');
      return { ...state, isFetching: action.payload };
    default:
      return state;
  }
};

export default characterReducer;