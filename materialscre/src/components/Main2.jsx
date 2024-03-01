import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import Content from './Content';
import CardDetails from './CardDetails';
import Suppliers from './Suppliers';
import Container from '@mui/material/Container'
import { useMediaQuery } from 'react-responsive';

const Main2 = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
  return (
    <Grid container>
        <Grid items xs={12} sx={{overflowY: 'auto', maxHeight: 'calc(100vh - 270px)',position:{
        lg:'relative',
        md:"relative",sm:"static",xs:"relative"
      },padding:{xs:0}}}>
        <Card sx={{backgroundColor:"#f5f5f5",boxShadow:1,marginTop:0,}}>
           
           <Content />
            <CardDetails />
           <Suppliers />
            </Card>
        </Grid>
         </Grid>
   

   


       
       
  )
}

export default Main2