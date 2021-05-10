import React, { useState } from 'react'

// 用于缓存计算结果
import memoize from "memoize-one"

// 计算属性，如果值 str 没有发生变化，则不会进行计算
const getNewStr = memoize((str) => {
  console.log("computed");
  return str + "world"
})

const Child = ({title}) => {
  const handleClick = () => {
    getNewStr(title)
  }
  return (
    <div>
      <div>Child: {getNewStr(title)}</div>
      <button onClick={handleClick}>测试memoize</button>
    </div>
    
  )
}

export default function Memoization() {
  let [title] = useState("hello")
  return (
    <div>
      <Child title={title} />
    </div>
  )
}
