import React from 'react'
import ReactDOM from 'react-dom'

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
  }
});

module.exports = LandingPage;
