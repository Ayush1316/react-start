import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <h1 className='text-bold bg-slate-300'>tailwind</h1>
   <Card username="chaiaurcode" btntext="visit"/>
   <Card username="chai"  btntext="click"/>
    </>
  )
}

export default App
