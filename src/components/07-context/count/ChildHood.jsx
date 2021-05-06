import React, { Component } from 'react'

import { CountConsumer } from "./Count"

export class ChildHood extends Component {
  render() {
    return (
      <div>
        <CountConsumer>
          {
            ({count, increment, decrement}) => {
              return (
                <>
                  <div>{count}</div>
                  <div>
                    <button onClick={increment(3)}>+</button>
                    <button onClick={decrement(2)}>-</button>
                  </div>
                </>           
              )
            }
          }
        </CountConsumer>
        
      </div>
    )
  }
}

export default ChildHood

