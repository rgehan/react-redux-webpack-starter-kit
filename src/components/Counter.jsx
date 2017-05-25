import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input type="text" value={this.props.counter} readOnly />
        <input type="button" onClick={this.props.incrementCounter} value="+" />
        <input type="button" onClick={this.props.decrementCounter} value="-" />
      </div>
    );
  }
}
