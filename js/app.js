"use strict";

var React = require('react');

var App = React.createClass({
   render: function() {
    return <h2>Hello Slalom!</h2>;
  }
});

React.render(<App />, document.getElementById('main'));
