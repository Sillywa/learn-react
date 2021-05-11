import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'

function ChildInputComponent(props, ref) {
  const inputRef = useRef(null);
  // 将父级的 ref 赋值给 inputRef
  useImperativeHandle(ref, () => inputRef.current)
  return (
    <input type="text" name="child input" ref={inputRef} />
  )
}

// 因为 ref 不能作为 props 传递给子组件，所以需要使用 forwardRef 高阶组件将 ref 属性传递给字子建
const ChildInput = forwardRef(ChildInputComponent)

export default function UseImperativeHandle() {
  // 创建一个 input ref
  const inputRef = useRef(null)
  useEffect(() => {
    inputRef.current.focus()
  }, [])
  return (
    <div>
      <ChildInput ref={inputRef} />
    </div>
  )
}
