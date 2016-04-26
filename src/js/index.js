import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Header from './Header'
import MovieListContainer from './MovieListContainer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { rootReducer } from './reducers'

var store = createStore(rootReducer)

var main = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App>
        <Header/>
        <MovieListContainer/>
      </App>
    </Provider>,
    document.getElementById('main')
  );
}

document.addEventListener('DOMContentLoaded', main);
