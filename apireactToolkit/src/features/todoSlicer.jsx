import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

export const fetchTodo=createAsyncThunk("fetchTodo",async()=>{
    const data = await fetch("https://jsonplaceholder.typicode.com/todos")
    return data.json();
})

const todoSlice=createSlice({
    name:'todos',
    initialState:{
        isloading:false,
        data:null,
        error:false
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchTodo.pending,(state,action)=>{
            state.isloading=true;
        });
        builder.addCase(fetchTodo.fulfilled,(state,action)=>{
            state.isloading=false;
            state.data=action.payload;
        });
        builder.addCase(fetchTodo.rejected,(state,action)=>{
            state.error=true;

        })
    }

})

export default todoSlice.reducer;