import * as types from '../constants/actions-types';

const ActionCreators = {
  // Action creators go here

  incrementCounter: () => ({
    type: types.INCREMENT_COUNTER,
  }),

  decrementCounter: () => ({
    type: types.DECREMENT_COUNTER,
  }),
};

export default ActionCreators;
