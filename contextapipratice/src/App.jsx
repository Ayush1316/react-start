import React,{ createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import B from './b'
const BioData = createContext()
function App() {
 
  return (
  
    <BioData.Provider value={"Ayush"}>
      <B />
      </BioData.Provider>    
    
  )
}
export {BioData};
export default App
