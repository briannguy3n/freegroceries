"use client"

import { useState } from "react"

const Test = () => {

    const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div>
      <button
        onClick={handleClick}
        className="
      flex 
      flex-col 
      bg-white"
      >
        Clicked {count} times
      </button>
    </div>
  )
}

export default Test
