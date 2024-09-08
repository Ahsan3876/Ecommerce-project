export function myCreateStore(reducer) {
  let state;
  const store = {
    getState() {
      return state;
    },
    dispatch(reducer) {
      state = reducer(state, action);
    },
    subscribe() {},
  };
  return store;
}
