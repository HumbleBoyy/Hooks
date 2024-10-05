import React, { useEffect, useLayoutEffect } from 'react'

const UseLayoutEffect = () => {


    useEffect(()=> {
        alert("UseEffect") 
    }, []);

    useLayoutEffect(()=> {
        alert("UseLayout")
    },[])
  return (
    <section>
       <h1>UseLayout</h1>
      <div className='description_wrapper'>
         <p className='description'>
         The purpose of useLayoutEffect is to let your component use layout information for rendering: Render the initial content. Measure the layout before the browser repaints the screen. Render the final content using the layout information you've read.
         </p>
      </div>
    </section>
  )
}

export default UseLayoutEffect
