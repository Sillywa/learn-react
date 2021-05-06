const { createStore } = require("redux");
const reducer = require("./reducer");

const store = createStore(reducer);

/*
store = {
  dispatch: Function,
  subscribe: Function,
  getState: Function,
  replaceReducer: Function
}
*/

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: "increment",
});

store.dispatch({
  type: "increment",
});
