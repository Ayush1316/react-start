import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Search from './Search'
import MainComponent from './MainComponent'
import Orders from './Orders'
import Content from './Content'
import HorizontalScrollCard from './HorizontalScrollCard';
import main1 from './main1';
import Main2 from './Main2';
import { useMediaQuery } from 'react-responsive';

const Home = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 601px) and (max-width: 1024px)' });
  return (
    <>
  
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} >
        <Grid item lg={4} sm={12}  xs={12} sx={{marginBottom:0,position:{
        lg:'relative',
        md:"relative",sm:"static",xs:"static"
      }}}>
        <div>
            <Search />
        </div>
        </Grid>
        <Grid item lg={8} sm={12} xs={12} sx={{ overflowY: 'auto', maxHeight: 'calc(100vh - 64px)'
      ,position:{
        lg:'relative',
        md:"relative",sm:"static",xs:"static"
      } }}>
        <div>
            <MainComponent/>
             <HorizontalScrollCard/>
        </div>
        </Grid>
        <Grid item lg={4} xs={12} sm={12} sx={{ overflowY: 'auto', maxHeight: 'calc(100vh - 320px)',position:{
        lg:'absolute',
        md:"relative",sm:"static",xs:"static"
      },bottom:0}}>
        <div>
            <Orders />
        </div>
        </Grid>
        {/* <Grid item lg={8} xs={12} sm={12} md={12}  sx={{ overflowY: 'auto', maxHeight: 'calc(100vh - 270px)',position:{
        lg:'relative',
        md:"relative",sm:"relative",xs:"static"
      }}}>
        <div>
          <Main2/>
        </div>
        </Grid> */}
      </Grid>
    </Box>
   
    </>
  )
}

export default Home