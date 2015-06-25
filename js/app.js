"use strict";

var React = require('react');

var App = React.createClass({

  getInitialState: function() {
    return {
      count: 1,
      item: '',
      items: []
    }
  },

  render: function() {
    return <div>
      <h2>Hello {this.props.name}!</h2>
      <h4>Count: {this.state.count}</h4>
      <button type="button" className="btn btn-primary" onClick={this._incrementCount}>Increment Count</button>

      <form onSubmit={this._submitForm}>
        <div className="form-group">
          <label htmlFor="item">Item</label>
          <input type="text" className="form-control" id="item" value={this.state.item} onChange={this._onItemChange}/>
        </div>
        <button type="submit" className="btn btn-secondary" disabled={this.state.item.length === 0}>Add Item</button>
      </form>
      <div>
        <ItemsTable items={this.state.items} appDeleteHandler={this._deleteItem}/>
      </div>
    </div>;
  },

  _submitForm:function(e) {
    e.preventDefault();
    this.setState({
      items: this.state.items.concat(this.state.item),
      item: ''
    });

  },

  _onItemChange: function(e) {
    this.setState({
      item: e.target.value
    });
  },

  _incrementCount: function() {
    this.setState({
      count: this.state.count + 1
    });
  },

  _deleteItem: function(item) {
    this.setState({
      items: this.state.items.filter(function(i) {
        return i !== item;
      })
    });
  }
});

var ItemsTable = React.createClass({
  getDefaultProps: function() {
    return {
      items: []
    }
  },

  render: function() {
    var rows = this.props.items.map(function(item, index) {
      return <ItemRow key={index} item={item} tableDeleteHandler={this._deleteRow}/>
    }.bind(this));

    return <div>
      <h4>Item count: {this.props.items.length}</h4>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>;
  },

  _deleteRow: function(item) {
    this.props.appDeleteHandler(item);
  }
});

var ItemRow = React.createClass({
  
  render: function() {
    return <tr>
      <td>{this.props.item}</td>
      <td>
        <button type="button" className="btn btn-link" onClick={this._onDeleteClick}>Delete</button>
      </td>
    </tr>;
  },

  _onDeleteClick: function() {
    this.props.tableDeleteHandler(this.props.item);
  }
});

React.render(<App name='World' />, document.getElementById('main'));
