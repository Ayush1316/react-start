import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { fetchProducts,setCurrentPage,setItemsPerPage } from './features/todo/productsSlice'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
const CustomPagination = () => {
    const dispatch = useDispatch();
    const { items, currentPage, itemsPerPage, totalItems, isLoading, error } = useSelector((state) => state.products);
  
    useEffect(() => {
    
        dispatch(fetchProducts());
    
      
    }, [dispatch, currentPage, itemsPerPage]);
  
    const handlePageChange = (event, page) => {
      dispatch(setCurrentPage(page));
    };
  
    const totalPages = Math.ceil(totalItems / itemsPerPage);
  
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
  
    return (
      <div>
        <table border={2}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            
             {items.products ? (
        items.products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
          </tr>
        ))
      ) : (
        <div>No products found</div>
      )}
          </tbody>
        </table>
     
        <Stack spacing={2} direction="row">
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            showFirstButton
            showLastButton
          />
        </Stack>
        <div>
          Show
          <select value={itemsPerPage} onChange={(e) => dispatch(setItemsPerPage(parseInt(e.target.value,10)))}>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
          items per page
        </div>
      </div>
    );
  }


export default CustomPagination