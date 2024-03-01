// ProductList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, setCurrentPage, setItemsPerPage } from './features/todo/productsSlice';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function ProductsList() {
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
        {items.products.map((product) => (
          <div key={product.id}>{product.id}</div>
        ))}
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
          <select onChange={(e) => dispatch(setItemsPerPage(parseInt(e.target.value, 10)))}>
            <option value={20}>20</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
          items per page
        </div>
      </div>
    );
  
  
}

    
    

  

export default ProductsList;
