import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import fetchTodo from './features/todoSlicer'
import { useEffect } from 'react';

const Todo = () => {
    const dispatch=useDispatch();
    const data = useSelector(state=>state)
    console.log(data);
    useEffect(()=>{
        dispatch(fetchTodo())
    },[])
  return (
    <div>

    </div>
    // <button onClick={()=>dispatch(fetchTodo)}>get</button>
  )
}

export default Todo

