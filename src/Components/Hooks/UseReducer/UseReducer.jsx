import React, { useReducer, useState } from 'react'

const reducer = (state, action) => {
  switch(action.type){
    case "Increament":
      return {sana: state.sana + 1, matinninKorsat: state.matinninKorsat}
      case "toggleText":
        return {sana: state.sana, matinninKorsat: !state.matinninKorsat}
        default:
          return state
  }
}
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, 
    {sana: 0, matinninKorsat: true });

  const [count, setCount] = useState(0)
  const [showText, setShowText] = useState(true)
  return (
    <>
    <section>
      <h1>Reducer</h1>
      <div className='description_wrapper'>
        <p className='description'>
         useReducer is a React Hook that lets you add a reducer to your component.
          It helps aggregate multiple states of a component in one place, particularly in scenarios that involve the state's changes at multiple nesting levels, and originating from multiple action types and sources. useReducer() gives access to data and actions defined in a React reducer.
        </p>
      </div>
      <div className="wrapperReducer">
         <h2>{state.sana}</h2>
         <button className='btn'
          onClick={()=> {
            dispatch({ type: "Increament"})
            dispatch({type:"toggleText"})
          }}>
           Click 
         </button>
         {state.matinninKorsat && "Here is The UseReducer"}
      </div>
      <div className="wrapperReducer">
         <h2>{count}</h2>
         <button className='btn'
          onClick={()=> {setCount(count + 1)
            setShowText(!showText)
          }}
          
         >
           Click 
         </button>
         {showText && "Here is The UseState"}
      </div>
    </section>
    </>
  )
}

export default UseReducer
