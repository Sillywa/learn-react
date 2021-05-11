import React from 'react'

import { connect } from "react-redux"

function Saga({addAction, state}) {
  return (
    <div>
      redux Saga
      <div>{state.count}</div>
      <button onClick={addAction}>Add</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addAction: () => {
    dispatch({type: "sagaAdd", data: 100})
  }
})

const mapStateToProps = (state) => ({
  state: {
    ...state,
    count: state.count
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Saga)
