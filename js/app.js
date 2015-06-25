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
      <button type="button" className="btn btn-primary" onClick={this._incrementCount}>Increment Count</button>
    </div>;
  },

  _incrementCount: function() {
    this.setState({
      count: this.state.count + 1
    });
  }
});

React.render(<App name='World' />, document.getElementById('main'));
