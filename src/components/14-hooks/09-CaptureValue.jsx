import React, {Component, useEffect, useState} from 'react'


export default function CaptureValue() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      console.log("count:", count);
    }, 3000)
  }, [count])
  return (
    <div>
      <p> you click {count} times </p>
      <button onClick={() => setCount(count + 1)}>增加 count</button>
      <button onClick={() => setCount(count - 1)}>减少 count</button>
    </div>
  )
}


// 如果用类组件呢？
/*
export default class CaptureValue extends Component {
  state = {
    count: 0
  }
  setCount = (step) => {
    setTimeout(() => {
      console.log(this.state.count);
    }, 3000)
    this.setState(preState => ({
      count: preState.count + step
    }))
  }
  render() {
    return (
      <div>
        <p> you click {this.state.count} times </p>
        <button onClick={() => this.setCount(1)}>增加 count</button>
        <button onClick={() => this.setCount(-1)}>减少 count</button>
    </div>
    )
  }
}
*/
