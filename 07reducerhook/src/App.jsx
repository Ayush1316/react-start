import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


 
  const initialstate =0

  const reducer =(state,action)=>{
    console.log(state,action);
    if(action.type==="increment"){
      return state+1
    }
    if(action.type==="decrement"){
      return state-1
    }

  }

   const App=()=>{

  const[state,dispatch]=useReducer(reducer,initialstate)
  return (
    <>
    <div>
      <p>{state}</p>
      <div className='btn-blue'>
          <button onClick={()=>dispatch({type:"increment"})}>inc</button>
          <button onClick={()=>dispatch({type:"decrement"})}>dec</button>
      </div>
    </div>

    </>
  )
}

export default App
