import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, NoMatch, browserHistory } from 'react-router'
import LandingPage from './LandingPage'
import MovieListPage from './MovieListPage'

var main = () => {
  ReactDOM.render(
	  <Router history={browserHistory}>
			<Route path="/" component={LandingPage}/>
      <Route path="list" component={MovieListPage}/>
		</Router>,
    document.getElementById('main')
  );
}

document.addEventListener('DOMContentLoaded', main);
