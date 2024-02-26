import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import Content from './Content';
import CardDetails from './CardDetails';
import Suppliers from './Suppliers';

const Main2 = () => {
  return (
    <Card sx={{backgroundColor:"#f5f5f5",boxShadow:1,marginTop:0}}>
             <Content/>
             <CardDetails/>
             <Suppliers/>
    </Card>
   
  )
}

export default Main2