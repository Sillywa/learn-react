import React, { Component } from 'react'

import { CountProvider } from "./Count"
import Child from "./Child"

export class App extends Component {
  render() {
    return (
      <CountProvider>
        <Child />
      </CountProvider>
    )
  }
}

export default App
