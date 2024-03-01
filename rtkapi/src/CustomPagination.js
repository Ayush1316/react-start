import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { fetchProducts,setCurrentPage,setItemsPerPage } from './features/todo/productsSlice'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
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
        {/* <table border={2}>
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
        </table> */}
     
        <TableContainer sx={{display:"flex",justifyContent:'center',alignItems:"center",marginTop:5}} component={Paper}>
      <Table sx={{ minWidth: 650,width:"auto" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {items.products ? (
        items.products.map((product) => (
            <TableRow
              key={product.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              {product.id}
              </TableCell>
              <TableCell align="center">{product.title}</TableCell>
              <TableCell align="center">{product.description}</TableCell>
              <TableCell align="center">{product.price}</TableCell>
              {/* <TableCell align="right">{product.price}</TableCell> */}
            </TableRow>
          ))): (
            <div>No products found</div>
          )};
        </TableBody>
      </Table>
    </TableContainer>

        <Stack spacing={2} direction="row" sx={{display:"flex",justifyContent:'center',alignItems:"center"}}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            showFirstButton
            showLastButton
          />
        </Stack>
        <div style={{display:'flex',justifyContent:"center",alignItems:"center"}}>
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