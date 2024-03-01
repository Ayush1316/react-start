
import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { getAllData } from './features/todo/TodoSlice';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box'
import Products from './Products';
import ProductsList from './ProductsList';

const columns = [
  { field: 'userId', headerName: 'userId', width: 70 },
  { field: 'id', headerName: 'id', width: 130 },
  { field: 'title', headerName: 'title', width: 400 }]

  // const rows=[
  // data.todos.map((todo)=>

  // {userId:todo.userId,id:todo.id,title:todo.title}
  // )]

function App() {
  // const dispatch = useDispatch();
  // const data= useSelector((state)=>
  //   //console.log("state.." ,state.app)
  // state.app)
  // console.log(data.todos);
  // useEffect(()=>{
  //   dispatch(getAllData())
  // },[])
  
  return (
   <>
   {/* <h1>Hello</h1>
   <button onClick={()=>dispatch(getAllData())}>get</button>
   <ul>
    {data.todos.map((todo)=>
    <li>
      {todo.id}
      {todo.title}
    </li>)}

   </ul> */}
  <ProductsList/>
     {/* <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:5}}>
     <div style={{ height: 400 }}>
      <DataGrid
        rows={data.todos.products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        
      />
    </div>
    </Box> */}
   {/* <Products/> */}
   </>
  );
}

export default App;
