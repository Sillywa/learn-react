import React, { Component } from "react";

import store from "./store";

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  decrement = () => {
    store.dispatch({
      type: "decrement"
    })
  };
  increment = () => {
    store.dispatch({
      type: "increment"
    })
  };
  render() {
    const { decrement, increment } = this
    return (
      <div>
        <button onClick={decrement}>-</button>
        <span>{store.getState().count}</span>
        <button onClick={increment}>+</button>
      </div>
    );
  }
  componentDidMount() {
    store.subscribe(() => {
      this.setState({})
    })
  }
}