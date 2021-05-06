import React, { Component } from 'react'
import hoc from "./hoc"

class App extends Component {
  render() {
    return (
      <div>
        HOC
      </div>
    )
  }
  componentDidMount() {
    console.log(this);
  }
}

export default hoc(App)
