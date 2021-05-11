import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

export default function UseLayoutEffect() {
  const [width, setWidth] = useState(0)
  const title = useRef()
  useLayoutEffect(() => {
    const titleWidth = title.clientWidth;
    console.log("useLayoutEffect");
    width !== titleWidth && setWidth(titleWidth)
  })
  useEffect(() => {
    console.log("useEffect");
  })
  return (
    <div>
      <h1 ref={title}>hello</h1>
      <h2>{width}</h2>
    </div>
  )
}
