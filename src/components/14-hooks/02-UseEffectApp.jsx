import React, { useState, useEffect } from "react";

export default function UseEffectApp() {
  let [data, setData] = useState({count: 0})

  // 如果不传递第二个参数，相当于 DidMounted 和 DidUpdated
  // 加上 [] 表示不依赖于任何值，只执行一次
  // 加上 [data] 表示依赖于 data，当 data 发生变化的时候就会执行函数
  // useEffect 可以定义多个
  useEffect(() => {
    console.log("effect");
  }, [data])

  // 不依赖任何值，并且返回一个函数，表示在 unmounted 的时候执行
  useEffect(() => {
    return () => {
      console.log("unmounted");
    }
  }, [])
  return (
    <div>
      <span>{data.count}</span>
      <button onClick={() => setData({count: 2})}>Change</button>
    </div>
  )
}
