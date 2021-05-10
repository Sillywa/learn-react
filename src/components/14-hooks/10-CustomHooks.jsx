import React from 'react'

import useCount from './useCount'

export default function CustomHooks() {
  let count = useCount(9)
  console.log(count);
  return (
    <div>
      count: {count===0 ? "loading" : "success"}
    </div>
  )
}
