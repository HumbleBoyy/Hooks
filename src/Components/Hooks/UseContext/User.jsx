import React, {useContext} from 'react'
import { AppContext } from './UseContext'
const User = () => {
    const {username} = useContext(AppContext)
  return (
    <section>
      User{username}
    </section>
  )
}

export default User
