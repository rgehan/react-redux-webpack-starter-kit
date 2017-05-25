import * as types from '../constants/actions-types';

const ActionCreators = {
  incrementCounter: () => ({
    type: types.INCREMENT_COUNTER,
  }),

  decrementCounter: () => ({
    type: types.DECREMENT_COUNTER,
  }),
};

export default ActionCreators;
