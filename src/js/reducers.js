import { combineReducers } from 'redux'

function movies(state = {}, action) {
  switch (action.type) {
    case 'UPDATE_MOVIE_DATA':
      return { ...state, [action.movie]: action.data }
    default:
      return state
  }
}

function displayList(state = [], action) {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [ ...state, action.movie ]
    case 'CLEAR_DISPLAY':
      return []
    default:
      return state
  }
}

function popups(state = {}, action) {
  switch (action.type) {
    case 'SHOW_POPUP':
      return { ...state, [action.name]: true }
    case 'HIDE_POPUP':
      return { ...state, [action.name]: false }
    default:
      return state
  }
}

export const rootReducer = combineReducers({
  movies,
  displayList,
  popups
});
