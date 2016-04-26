export function addFile(name) {
  return {
    type: 'ADD_FILE',
    file: name
  }
}

export function clearDisplay() {
  return {
    type: 'CLEAR_DISPLAY'
  }
}

export function fetchAndUpdateData(movie) {
}
