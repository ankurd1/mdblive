var initialState = {
  movies: {},
  displayList: []
}

export function rootReducer(state = initialState, action) {
  console.log('recd action', action, 'state', state);
  return state;
}
