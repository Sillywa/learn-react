import React, { useState, useMemo } from 'react'

const ChildHood = () => {
  console.log("childhood");
  return (
    <div>child hood</div>
  )
}

const Child = ({onAdd, a, b}) => {
  console.log("child render");

  const Child1 = useMemo(() => <ChildHood a={a} />, [a])
  const Child2 = useMemo(() => <ChildHood b={b} />, [b])

  return (
  
    <div>
      <h1>Hello</h1>
      <button onClick={onAdd}>Add</button>
      {Child1}
      {Child2}
    </div>
  )
}

export default function UseMemoApp() {
  console.log("parent render");

  let [ count, setCount] = useState(0)
  // 使用 useCallback
  const handleAdd = useMemo(() => () => {
    console.log("click");
  }, []) 
  
  const handleClick = () => {
    setCount(2)
  }
  
  return (
    <div>
      <Child onAdd={handleAdd} a={"abc"} b={"dec"} />
      <div>{count}</div>
      <button onClick={handleClick}>Change</button>
    </div>
  )
}

