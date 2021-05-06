// 纯函数 pure function
/*
  1. 相同的实参会得到相同的输出
  2. 不能修改实参

*/
const reducer = (state, action = { type: "" }) => {
  switch(action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1
      }
    case "decrement":
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state
  }
}

export {
  reducer
}