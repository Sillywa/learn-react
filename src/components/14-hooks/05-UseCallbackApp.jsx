import React, { useState, useCallback, memo } from 'react'

const Child = memo(({onAdd}) => {
  console.log("child render");
  return (
  
    <div>
      <h1>Hello</h1>
      <button onClick={onAdd}>Add</button>
    </div>
  )
} )

export default function UseCallbackApp() {
  console.log("parent render");

  let [ count, setCount] = useState(0)
// 使用 useCallback
  const handleAdd = useCallback(() => {
    console.log("click");
  }, []) 
  
  const handleClick = () => {
    setCount(2)
  }
  
  return (
    <div>
      <Child onAdd={handleAdd}/>
      <div>{count}</div>
      <button onClick={handleClick}>Change</button>
    </div>
  )
}

