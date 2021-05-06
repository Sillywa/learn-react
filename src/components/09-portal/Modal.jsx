import React, { Component } from 'react'
import withPortal from "./withPortal"

import "./style.css"

class Modal extends Component {
  render() {
    return (
      <div className="portal">
        <h1>Portal header</h1>
        <button>Add</button>
      </div>
    )
  }
}

export default withPortal(Modal)
