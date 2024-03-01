import{configureStore} from '@reduxjs/toolkit'
import    TodoReducer    from '../features/todo/TodoSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import productsReducer from '../features/todo/productsSlice'
import { productsApi } from '../features/todo/productsApi'
export const store = configureStore({
    reducer:{
        products:productsReducer,  
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
})

// configure listeners using the provided defaults
setupListeners(store.dispatch);

        
        
    
