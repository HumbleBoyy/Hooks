import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [counter, setCounter] = useState(0);

    useEffect(()=> {
        const count = setInterval(()=> {
            setCounter(count => count + 1)
        }, 3000)

        return () => clearInterval(count)
    },[counter]);

  return (
    <section>
    <h1>UseEffect</h1>
      <div className='description_wrapper'>
         <p className='description'>
         useEffect is one of the most important hooks in react and is a way to handle life cycle of the component in which it is present. 
         useEffect runs on every render of the component (i.e when a state variable changes) and can also run every time a specific value changes that is mentioned in it's dependency array.
         </p>
      </div>
      <div className='wrapper'>
         <h2>Counter: {counter}</h2>
      </div>
    </section>
  )
}

export default UseEffect
