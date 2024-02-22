
import './App.css';
import {useDispatch, useSelector } from 'react-redux';
import { incAdd,incMin } from './actions';


function App() {
  const myState =useSelector((state)=>state.changeTheNumber);
  const dispatch = useDispatch()

  return (
    <>
  <h1> redux</h1>
  <div>
  <button title='increment' onClick={()=>dispatch(incAdd())} >
 <span>+</span></button> 
    <input name='quantity' value={myState}/>
    <button title='decrement' onClick={()=>dispatch(incMin())} >
 <span>-</span></button> 
  </div>
  </>);
}

export default App;
