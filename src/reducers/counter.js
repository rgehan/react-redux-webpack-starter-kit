import { createReducer } from 'redux-create-reducer';
import * as types from '../constants/actions-types';

export default createReducer(0, {
  [types.INCREMENT_COUNTER](state, action) {
    return state + 1;
  },
  [types.DECREMENT_COUNTER](state, action) {
    return state - 1;
  },
});
