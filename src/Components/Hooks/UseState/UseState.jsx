import React, { useState } from 'react'

const UseState = () => {

    const [count, setCount] = useState(0);

    const handleCount = () =>{
        setCount(count + 1)
    }
    const handleSecond = () =>{
      setCount(count - 1)
  }
  return (
    <>
      <div className="wrapper">
        <button onClick={handleSecond} className='btn btnRed'>-</button>
        <h2 className='counter'>{count}</h2>
        <button onClick={handleCount} className='btn'>+</button>
      </div>
    </>
  )
}

export default UseState
