import React, { useLayoutEffect, useRef } from 'react'

import "./style.css"

export default function UseLayoutEffect2() {
  const square = useRef()
  useLayoutEffect(() => {
    console.log(square);
    square.current.style.left = "600px"
  }, [])
  return (
    <div className="animation">
      <div ref={square} className="square">Square</div>
    </div>
  )
}
