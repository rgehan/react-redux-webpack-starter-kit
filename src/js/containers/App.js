import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Counter from '../components/Counter';
import { incrementCounter, decrementCounter } from '../redux/counter';

import './App.scss';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="app-container">
        <h1>react-redux-webpack-starter-kit</h1>
        <Counter
          {...this.props}
        />
      </div>
    );
  }
}

export default connect(({ counter }) => ({
  counter,
}), (dispatch) => bindActionCreators({
  incrementCounter,
  decrementCounter
}, dispatch))(App);
