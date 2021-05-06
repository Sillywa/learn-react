const initState = {
  value: "默认值"
}
const reducer = (state=initState, action) => {
  switch(action.type) {
    case "send_type":
      return {
        ...state,
        value: action.value
      }
    default:
      return state
  }
}

export default reducer