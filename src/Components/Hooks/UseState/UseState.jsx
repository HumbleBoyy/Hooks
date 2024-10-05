import React, { useState } from 'react'

const UseState = () => {

    const [count, setCount] = useState(0);

    const handleCount = () =>{
        setCount(count ++)
    }
  return (
    <>
      <button>{count}</button>
    </>
  )
}

export default UseState
