import React, {useContext} from 'react'
import { AppContext } from './UseContext'

const Login = () => {
    const {setUsername} = useContext(AppContext);
  return (
    <section>
      <input type="text" 
          onChange={(event)=> {
            setUsername(event.target.value)
          }}
      />
    </section>
  )
}

export default Login
