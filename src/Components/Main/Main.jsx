import React from 'react'
import UseState from '../Hooks/UseState/UseState'
import UseEffect from '../Hooks/UseEffect/UseEffect'
import UseReducer from '../Hooks/UseReducer/UseReducer'

const Main = () => {
  return (
    <>
    <div className='main_title_wrapper'>
        <h2 className='title'>HOOKS</h2>
    </div>
      <UseState/>
      <UseEffect/>
      <UseReducer/>
    </>
  )
}

export default Main
