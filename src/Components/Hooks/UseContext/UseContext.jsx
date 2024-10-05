import React, { createContext, useState } from 'react'
import Login from './Login'
import User from './User'

export const AppContext = createContext(null)

const UseContext = () => {
    const [username, setUsername] = useState("")
  return (
    <section>
      <h1>UseContext</h1>
      <div className='description_wrapper'>
         <p className='description'>
         useContext returns the context value for the calling component. It is determined as the value passed to the closest SomeContext.Provider above the calling component in the tree. If there is no such provider, then the returned value will be the defaultValue you have passed to createContext for that context.
         </p>
      </div>

     <AppContext.Provider value={{username, setUsername}}>
       <Login/><User/>
     </AppContext.Provider>
    </section>
  )
}

export default UseContext
