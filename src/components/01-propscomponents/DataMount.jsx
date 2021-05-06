import React, { Component } from 'react'

import Child from "./Child"
import PropTypesCom from "./PropTypesCom"

class DataMount extends Component {
  render() {
    return (
      <>
        <div>子组件</div>
        <Child>
          <div>slot</div>
        </Child>
        <PropTypesCom title="proptypes component" />
      </>
    )
  }
}

export default DataMount
