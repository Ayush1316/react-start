import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"

export const getAllData=createAsyncThunk("todos",async()=>{
    const response =await fetch("https://jsonplaceholder.typicode.com/todos")
    const result = response.json()
    return result
})

// export const todddoSlice =createSlice({
//     name:'todo',
//     initialState:{
//         todos:[],
//         loading:false,
//         error:null
//     },
// extraReducers:{
//     [getAllData.pending]:(state)=>{
//         state.loading=true
//     },
//     [getAllData.fulfilled]:(state,action)=>{
//         state.loading=false;
//         state.todos=action.payload;
//     },
//     [getAllData.rejected]:(state,action)=>{
//         state.loading=false;
//         state.error=action.payload;
//     }
// }
// })

 const TodoSlice=createSlice({
    name:'todo',
    initialState:{
        todos:[],
        loading:false,
        error:null
    },
    extraReducers:(builder)=>{
        builder.addCase(getAllData.pending,(state,action)=>{
           state.loading=true;
           
        });
        builder.addCase(getAllData.fulfilled,(state,action)=>{
            state.loading=false;
            state.todos=action.payload;
        });
        builder.addCase(getAllData.rejected,(state,action)=>{
            state.error=true;

        })
    }
})
// export default todddoSlice.reducer;

export default TodoSlice.reducer;
//export default todoSlice.reducer;