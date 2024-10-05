import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UseEffectS = () => {
    const [data, setData] = useState("");
    const [count, setCount] = useState(0);

    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/albums')
        .then((res)=> {
            setData(res.data[1].title)
            console.log("Message Called")
        })
    },[])
  return (
    <section>
      <h1>Fetching data with UseEffect  <span>{data}</span></h1>
      <h2>{count}</h2>
      <button className='btn'
       onClick={()=> setCount( count + 1)}
      >UseEffect Btn</button>
    </section>
  )
}

export default UseEffectS
