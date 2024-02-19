import { useState,useCallback,useEffect,useRef } from 'react'
import './index.css'



function App() {
const[length,setLength]=useState(8)
const[numberallowed,setNumberAllowed]=useState(false);
const[charallowed,setCharAllowed]=useState(false);
const[password,setPassword]=useState("");
const passwordRef =useRef(null)

const passwordGenerator =useCallback(()=>{
  let pass="";
  let string="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberallowed)string+="0123456789"
  if(charallowed)string+="!@#$%&*"
  for (let i = 1; i <= length; i++) {
    let char=Math.floor(Math.random()*string.length+1)
    pass+=string.charAt(char)

    
  }
  setPassword(pass)
},[length,numberallowed,charallowed,setPassword])

const copypasswordtoclipboard = useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,20)
  window.navigator.clipboard.writeText(password)
},[password])

useEffect(()=>{passwordGenerator()},[length,numberallowed,charallowed,passwordGenerator])


  return (
  <div className='mt-10 pb-10 w-md justify-center  bg-gray-800'>
     <div className='text-white text-4xl text-center'>Password generator</div>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-700 bg-white text-md'>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef}
        />
        <button onClick={copypasswordtoclipboard} className='outline-none text-white bg-blue-800 px-3 py-0.5 shrink-0'>
          copy
        </button>
      </div>
      <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}
         />
         <label >length:{length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberallowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor='numberInput'>Numbers</label>
      </div>

      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charallowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
     </div>
     </div>
     </div>
  )
}


export default App
