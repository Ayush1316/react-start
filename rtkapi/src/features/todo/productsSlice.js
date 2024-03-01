import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async(_,{getState})=>{
    const state = getState();
    const currentPage = state.products.currentPage;
    const itemsPerPage = state.products.itemsPerPage;
    const skip = (currentPage-1) * itemsPerPage;
    const limit = itemsPerPage;
    const response = await fetch(`https://dummyjson.com/products?skip=${skip}&limit=${limit}`);
    const totalCountResponse = await fetch(`https://dummyjson.com/products`);

  
    const result = await response.json();
    const totalCount = result.total;
    // console.log(totalCountResponse.total,"header");
    console.log(result,"response");
// const totalCount=totalCountResponse.length;
    console.log(totalCount,"count");
    
    return{
       result,
         totalCount: parseInt(totalCount),
         
        
    };

}
)

const productsSlice = createSlice({
    name:'products',
    initialState:{
        items: [],
        currentPage:1,
        itemsPerPage:10,
        totalItems:0,
        isLoading:false,
        error:null
    },
    reducers:{
        setCurrentPage(state, action) {
            state.currentPage = action.payload;
          },
          setItemsPerPage(state, action) {
            state.itemsPerPage = action.payload;
            state.currentPage = 1; // Reset to first page when items per page changes
          },
    },

    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state,action)=>{
           state.isLoading=true;
           state.error = null;
           
        });
        builder.addCase(fetchProducts.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.items =  action.payload.result;
            // const products = action.payload.products;
            // if (Array.isArray(products)) {
            //     state.items.push(...products);
            //   } else {
            //     // Handle non-array cases (e.g., single object or other types)
            //     state.items.push(products);
            //   }
            
            console.log(state.items,"after pushed");
            console.log(action.payload,"action")
            // console.log(action.payload.products,"action");
            state.totalItems = action.payload.totalCount;
        });
        builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = action.error.message;
        })
    }
})

export const {setCurrentPage,setItemsPerPage}=productsSlice.actions;

export default productsSlice.reducer;
