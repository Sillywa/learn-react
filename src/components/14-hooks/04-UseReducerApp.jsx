import React, { useReducer } from 'react'

const initState = {
  count: 0
}

const reducer = (state=initState, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
}

export default function UseReducerApp() {
  const [state, dispatch] = useReducer(reducer, initState)
  return (
    <div>
      <button onClick={() => dispatch({type: "increment"})}>+</button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({type: "decrement"})}>-</button>
    </div>
  )
}
