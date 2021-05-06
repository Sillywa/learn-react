import React, { Component } from "react"
import { createPortal } from "react-dom"

const withPortal = (WrappedComponent) => {
  return class extends Component {
    render() {
      // 在 body 下面渲染 Modal 组件
      return createPortal(
        <WrappedComponent {...this.props} />,
        document.querySelector("body")
      )
    }
  }
}

export default withPortal