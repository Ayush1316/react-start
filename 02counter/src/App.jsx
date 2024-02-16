import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter,setCounter]= useState(15)
  const addvalue=()=>{
    console.log("clicked",counter)
    if(counter<20){
    counter++;
    setCounter(counter);}
    //or we can do this way
    //setCounter(counter+1)
  }
  const removevalue =()=>{
    if(counter>0){
    setCounter(counter-1);
    }
  }

  return (
    <>
     <h1>React is library</h1>
     <h2>counter :{counter}</h2>
     <button onClick={addvalue}>Add value</button>
     <br />
     <button onClick={removevalue}>remove value</button>
    </>
  )
}

export default App
