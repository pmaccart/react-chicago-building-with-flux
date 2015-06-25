"use strict";

var React = require('react');

var App = React.createClass({

  getInitialState: function() {
    return {
      count: 1
    }
  },

  render: function() {
    return <div>
      <h2>Hello {this.props.name}!</h2>
      <h4>Count: {this.state.count}</h4>
    </div>;
  }
});

React.render(<App name='World' />, document.getElementById('main'));
