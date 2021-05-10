import React, { Component, Suspense } from 'react'

const Child = React.lazy(() => import("./Child"))

class App extends Component {
  state = {
    show: false
  }
  handleClick = () => {
    console.log("click");
    this.setState({
      show: true
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>show</button>
        
        <Suspense fallback={<div>loading...</div>}>
          {this.state.show && <Child />} 
        </Suspense>
      </div>
    )
  }
}

export default App
