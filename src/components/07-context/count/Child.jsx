import React, { Component } from 'react'

import { CountConsumer } from "./Count"
import ChildHood from "./ChildHood"

export class Child extends Component {
  render() {
    return (
      <div>
        <CountConsumer>
          {
            ({count}) => <div>{count}</div>
          }
        </CountConsumer>
        <ChildHood />
      </div>
    )
  }
}

export default Child
