import React, { Component } from 'react'

import store from "../store"
import { sendAction } from "../action"

export default class Home extends Component {
  handleClick = () => {
    store.dispatch(sendAction("按钮点击"))
  }
  render() {
    const { handleClick } = this
    return (
      <div>
        <button onClick={handleClick}>Click</button>
        <div>{store.getState().value}</div>
      </div>
    )
  }
  componentDidMount() {
    store.subscribe(() => {
      console.log(store.getState());
      this.setState({})
    })
  }
}
