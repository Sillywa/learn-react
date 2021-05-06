// 定义初始状态
const defaultState = {
  count: 0,
};

// 修改状态
const changeState = (action = { type: "" }) => {
  switch (action.type) {
    case "increment":
      defaultState.count++;
      break;
    case "decrement":
      defaultState.count--;
      break;
    default:
  }
};

// DOM 操作
const renderDOM = () => {
  let countEl = document.querySelector("#count");
  countEl.innerHTML = defaultState.count;
};

const dispatch = (action) => {
  changeState(action);
  renderDOM();
};

export { dispatch };
