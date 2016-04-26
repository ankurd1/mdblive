import React from 'react'
import ReactDOM from 'react-dom'
import LandingPage from './LandingPage'
import MovieListPage from './MovieListPage'

var main = () => {
  ReactDOM.render(
    <LandingPage/>,
    document.getElementById('main')
  );
}

document.addEventListener('DOMContentLoaded', main);
