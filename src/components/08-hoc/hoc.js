import React, { Component } from "react"

// hoc 函数接受一个组件，并返回一个组件
const hoc = (Comp) => {
  return class extends Component {
    render() {
      return (
        <Comp title="hello" {...this.props} />
      )
    }
    componentDidMount() {
      console.log(this)
    }
  }
}

export default hoc