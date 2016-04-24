import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'

var LandingPage = React.createClass({
  render() {
    return (
      <div class="selector-box-container">
        <SelectorBox/>
      </div>
    );
  }
});

var SelectorBox = React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },

  componentDidMount() {
    // Hack because react's <input> doesn't support this yet
    var dom = ReactDOM.findDOMNode(this);
    dom.firstChild.setAttribute("webkitdirectory", "");
    dom.firstChild.setAttribute("mozdirectory", "");
  },

  render() {
    return (
      <div>
        <input type="file" name="selector-box" webkitdirectory/>
        <button onClick={this.goButtonClicked}>Go!</button>
      </div>
    );
  },

  goButtonClicked() {
    this.context.router.push("/mdblive/list");
  }
});

module.exports = LandingPage;
