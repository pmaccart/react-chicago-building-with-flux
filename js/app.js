"use strict";

var React = require('react');

var App = React.createClass({
  
  render: function() {
    return <div>
      <h2>Hello {this.props.name}!</h2>
    </div>;
  }
});

React.render(<App name='World' />, document.getElementById('main'));
