var $ = require("jquery");
var React = require("react");
var ReactDOM = require("react-dom");

var main = function() {
  ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('main')
  );
}

$(main);
