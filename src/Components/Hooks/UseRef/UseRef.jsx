import React, { useRef } from 'react'

const UseRef = () => {
    const ref = useRef(null)

    const handleClick = () => {
        ref.current.focus();
        console.log(ref.current.value)
        ref.current.value = ''
    }
  return (
    <section>
        <h1>UseRef</h1>
      <div className="description_wrapper">
        <p className='description'>
          useRef is a React Hook that lets you reference a value that's not needed for rendering. const ref = useRef(initialValue) useRef(initialValue)
        </p>
      </div>

       <div className="wrapper">
         <input type="text"  placeholder='Type something' ref={ref}/>
         <button className='btn' onClick={handleClick}>Changer</button>
       </div>
    </section>
  )
}

export default UseRef
