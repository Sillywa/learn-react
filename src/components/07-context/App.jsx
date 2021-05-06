import React, { Component } from 'react'

// import { Provider, Consumer, testContext } from "./testContext"
import { createContext } from "react"

const testContext = createContext()

const { Provider, Consumer } = testContext

class ChildA extends Component {
  // 类组件使用如下方式获取 Provider 的 value 属性
  static contextType = testContext
  render() {
    console.log(this);
    return (
      <div>ChildA: {this.context}</div>
    )
  }
}

class ChildB extends Component {
  render() {
    return (
      <div>
        <ChildC />
      </div>
    )
  }
}

const ChildD = props => {
  return (
    <div>
      ChildD: 
      <Consumer>
        {
          value => <span>{value}</span>
        }
      </Consumer>
    </div>
  )
}

const ChildC = props => {
  return (
    <div>
      <ChildD />
    </div>
  )
}



export class App extends Component {
  render() {
    return (
      <Provider value="hello">
        <ChildA />
        <ChildB />
      </Provider>
    )
  }
}

export default App
