import React, { useState, useEffect } from "react";

export default function UseEffectApp() {
  let [data, setData] = useState({count: 0})

  function loadData() {
    return fetch("http://152.136.185.210:7878/api/m5/home/data?type=pop&page=1")
      .then(res => res.json())
      .then(result => result)
  }

  // 如果不传递第二个参数，相当于 DidMounted 和 DidUpdated
  // 加上 [] 表示不依赖于任何值，只执行一次，相当于 DidMounted
  // 加上 [data] 表示依赖于 data，当 data 发生变化的时候就会执行函数
  // useEffect 可以定义多个
  useEffect(() => {
    console.log("effect");
  }, [data])

  // 不依赖任何值，并且返回一个函数，表示在 unmounted 的时候执行
  useEffect(() => {
    console.log("mounted");
    // 在 mounted 的时候获取数据
    (async () => {
      let result = await loadData()
      console.log(result);
    })()
    


    // return () => {
    //   console.log("unmounted");
    // }
  }, [])
  return (
    <div>
      <span>{data.count}</span>
      <button onClick={() => setData({count: 2})}>Change</button>
    </div>
  )
}
