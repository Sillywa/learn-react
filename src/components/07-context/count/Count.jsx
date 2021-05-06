import React, { Component, createContext } from "react";

const {
  Provider,
  Consumer: CountConsumer
} = createContext()

class CountProvider extends Component {
  state = {
    count: 0
  }

  increment = (step) => {
    return () => {
      this.setState(preState => ({
        count: preState.count + step
      }))
    } 
  }
  decrement = (step) => {
    return () => {
      this.setState(preState => ({
        count: preState.count - step
      }))
    } 
  }
  render() {
    const { count } = this.state
    const { increment, decrement } = this
    return (
      <Provider value={{
        count,
        increment,
        decrement
      }}>
        {this.props.children}
      </Provider>
    )
  }
}

export {
  CountProvider,
  CountConsumer
} 