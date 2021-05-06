import { reducer } from "./reducer";
// 自己实现 redux
let state = {
  count: 0
}

const createStore = () => {
  // get state 获取状态
  const getState = () => state

  // 观察者模式
  const listeners = [];
  // 订阅
  const subscribe = (listener) => listeners.push(listener);

  const dispatch = (action) => {
    state = reducer(state, action);
    // 发布
    listeners.map(listener => listener())
  };

  return {
    dispatch,
    getState,
    subscribe,
  };
};

const store = createStore();

const render = () => document.querySelector("#count").innerHTML = store.getState().count;

store.subscribe(render)

export default store;
