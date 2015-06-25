"use strict";

var React = require('react');

var App = React.createClass({

  getInitialState: function() {
    return {
      count: 1,
      controlledValue: ''
    }
  },

  render: function() {
    return <div>
      <h2>Hello {this.props.name}!</h2>
      <h4>Count: {this.state.count}</h4>
      <button type="button" className="btn btn-primary" onClick={this._incrementCount}>Increment Count</button>

      <form>
        <div className="form-group">
          <label for="uncontrolledInput">Uncontrolled Input</label>
          <input type="text" className="form-control" id="uncontrolledInput" />
        </div>
        <div className="form-group">
          <label for="controlled">Controlled Input 1</label>
          <input type="text" className="form-control" id="controlled" value="Hello!"/>
        </div>
        <div className="form-group">
          <label for="controlled">Controlled Input 2</label>
          <input type="text" className="form-control" id="controlled" value={this.state.controlledValue} onChange={this._updateValue}/>
        </div>
        <p>Uncontrolled value: {this.state.uncontrolledValue}</p>
        <p>Controlled value: {this.state.controlledValue}</p>
      </form>
    </div>;
  },

  _updateValue: function(e) {
    this.setState({
      controlledValue: e.target.value
    });
  },

  _incrementCount: function() {
    this.setState({
      count: this.state.count + 1
    });
  }
});

React.render(<App name='World' />, document.getElementById('main'));
