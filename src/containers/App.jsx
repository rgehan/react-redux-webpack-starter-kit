import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ActionCreators from '../actions';
import Counter from '../components/Counter.jsx';

import '../styles/App.scss';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="app-container">
        <h1>react-redux-starter-kit</h1>
        <Counter
          {...this.props}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
