import React, { useState } from 'react'

/*
class UseStateApp extends Component {
  state = {
    count: 0
  }
  increment = () => {
    this.setState(preState => ({
      count: preState.count + 1
    }))
  }
  componentDidMount() {
    console.log("mounted");
  }
  render() {
    const {increment} = this
    return (
      <div>
        <span>{this.state.count}</span>
        <button onClick={increment}>+</button>
      </div>
    )
  }
}
*/

/*
const UseStateApp = () => {
  // 将 count 的初始值设为 0, setCount 为修改 count 的方法
  let [count, setCount] = useState(0)
  const handleClick = () => {
    // setCount(count + 1)
    setCount(count => count + 1)
  }
  return (
    <div>
      <span>{count}</span>
      <button onClick={handleClick}>Add</button>
    </div>
  )
}
*/
const UseStateApp = () => {
  // 将 count 的初始值设为 0, setCount 为修改 count 的方法
  let [obj, setObj] = useState({
    count: 0,
    name: "sillywa"
  })
  const handleClick = () => {
    // setCount(count + 1)
    setObj({
      ...obj,
      count: obj.count + 1
    })
  }
  return (
    <div>
      <span>{obj.name}: {obj.count}</span>
      <button onClick={handleClick}>Add</button>
    </div>
  )
}
export default UseStateApp