import React, { Component } from 'react'

export default class EventTest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }
  increment(step) {
    return (event) => {
      console.log(event);
      this.setState(preState => {
        return {
          count: preState.count + step
        }
      })
    }  
  }
  decrement() {
    this.setState(preState => {
      return {
        count: preState.count - 1
      }
    })
  }
  render() {
    const { count } = this.state
    return (
      <div>
        <p>{count}</p>
        <button onClick={this.increment(5)}>increment</button>
        <button onClick={this.decrement}>decrement</button>
      </div>
    )
  }
}
