import React ,{useEffect} from 'react'
import { getAllProductsQuery } from './features/todo/productsApi';

const Products = () => {
    const { data, isError, isLoading,isFetching,isSuccess } = getAllProductsQuery()
    useEffect(()=>{
            getAllProductsQuery();
    },[])
 
    console.log(data);
    console.log(isError);
    console.log(isLoading);
    console.log(isFetching);
    console.log(isSuccess);
    return (
   <>
   <div>
    
   {data.products.map((product)=>
    <li>
      {product.id}
    </li>)}
   </div>
   </>
  )
}

export default Products