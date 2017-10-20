import { createReducer } from 'redux-create-reducer';

export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";

export function incrementCounter() {
  return {
    type: INCREMENT_COUNTER,
  };
}

export function decrementCounter() {
  return {
    type: DECREMENT_COUNTER,
  };
}

export default createReducer(0, {
  [INCREMENT_COUNTER](state, action) {
    return state + 1;
  },

  [DECREMENT_COUNTER](state, action) {
    return state - 1;
  },
});
