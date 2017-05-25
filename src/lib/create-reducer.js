export default function createReducer(initialState, handlers) {
  return function(state = initialState, action) {
    if(handlers.hasOwnProperty(action.type))
      return handlers[action.type](state, action);
    return state;
  };
}