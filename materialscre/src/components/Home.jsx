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


const Home = () => {
  return (
    <>
  
    <Box sx={{ flexGrow: 1, }}>
      <Grid container spacing={2} >
        <Grid item xs={4} >
        <div>
            <Search />
        </div>
        </Grid>
        <Grid item xs={8} sx={{ overflowY: 'auto', maxHeight: 'calc(100vh - 64px)' }}>
        <div>
            <MainComponent/>
            <HorizontalScrollCard/>
        </div>
        </Grid>
        <Grid item xs={4} sx={{ overflowY: 'auto', maxHeight: 'calc(100vh - 320px)' }}>
        <div>
            <Orders />
        </div>
        </Grid>
        <Grid item xs={8} sx={{ overflowY: 'auto', maxHeight: 'calc(100vh - 270px)' }}>
        <div>
           <Main2/>
        </div>
        </Grid>
      </Grid>
    </Box>
   
    </>
  )
}

export default Home