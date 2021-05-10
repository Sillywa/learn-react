import { useState, useEffect } from "react";
const useCount = (num) => {
  let [count, setCount] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      num > count && setCount(1)
    }, 4000)
  }, [])
  return count
};

export default useCount