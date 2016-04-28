import fetch from 'isomorphic-fetch'
import URI from 'urijs'

export function addFile(file) {
  return (dispatch, getState) => {
    // TODO maybe we can use some more properties of file here?
    var sanitized = sanitize(file.name)
    if (sanitized.length != 0) {
      dispatch(addMovie(sanitized))
      if (!getState().movies[sanitized]) {
        // not in store, we need to fetch this
        var uri = URI('http://www.omdbapi.com')
          .query({'t': sanitized})
          .toString()
        return fetch(uri)
          // TODO error handling
          .then(response => {
            if (response.ok) {
              response.json().then(json => {
                if (json.Response === "True") {
                  dispatch(updateMovieData(sanitized, json))
                }
              })
            }
          })
      }
    }
  }
}

function sanitize(fileName) {
  return fileName;
}

function addMovie(movie) {
  return {
    type: 'ADD_MOVIE',
    movie: movie
  }
}

export function clearDisplay() {
  return {
    type: 'CLEAR_DISPLAY'
  }
}

function updateMovieData(movie, data) {
  return {
    type: 'UPDATE_MOVIE_DATA',
    data: data,
    movie: movie
  }
}
