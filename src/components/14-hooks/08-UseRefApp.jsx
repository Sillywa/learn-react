import React, { useEffect, useRef } from 'react'

/*
export default function UseRefApp() {
  const btn = createRef()
  const handleClick = () => {
    console.log(btn.current.textContent);
  }
  return (
    <div>
      <div ref={btn}>sillywa</div>
      <button onClick={handleClick}>点击获取文字</button>
    </div>
  )
}
*/

/* 
// 基本使用
export default function UseRefApp() {
  const btn = useRef()
  const handleClick = () => {
    console.log(btn.current.textContent);
  }
  return (
    <div>
      <div ref={btn}>sillywa</div>
      <button onClick={handleClick}>点击获取文字</button>
    </div>
  )
}
*/

// 解决 Capture Value
export default function UseRefApp() {
  // 初始化 count.current = 0
  const count = useRef(0)

  const handleClick = (step) => {
    count.current += step
    setTimeout(() => {
      console.log(count.current);
    }, 3000)
  }
  return (
    <div>
      <p> you click {count.current} times </p>
      <button onClick={() => handleClick(1)}>增加 count</button>
      <button onClick={() => handleClick(-1)}>减少 count</button>
    </div>
  )
}

