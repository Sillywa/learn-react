const initState = {
  count: 0
}

const reducer = (state=initState, action) => {
  switch (action.type) {
    case "add":
      console.log("add")
      return {
        ...state,
        count: action.data
      }
    default:
     return state
  }
}

export default reducer