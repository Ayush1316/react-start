
import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import { getAllData } from './features/todo/TodoSlice';


function App() {
  const dispatch = useDispatch();
  const data= useSelector((state)=>
    //console.log("state.." ,state.app)
  state.app)
  console.log(data.todos);
  return (
   <>
   <h1>Hello</h1>
   <button onClick={()=>dispatch(getAllData())}>get</button>
   <ul>
    {data.todos.map((todo)=>
    <li>
      {todo.id}
      {todo.title}
    </li>)}

   </ul>
   </>
  );
}

export default App;
