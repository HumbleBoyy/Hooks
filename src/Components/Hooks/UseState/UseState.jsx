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
      <div className='description_wrapper'>
        <p className='description'>
        What is the useState Hook? useState is React Hook that allows you to add state to a functional component. 
        It returns an array with two values: the current state and a function to update it. 
        The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.
        </p>
      </div>
      <div className="wrapper">
        <button onClick={handleSecond} className='btn btnRed'>-</button>
        <h2 className='counter'>{count}</h2>
        <button onClick={handleCount} className='btn'>+</button>
      </div>
    </>
  )
}

export default UseState
