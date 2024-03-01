import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import Chip from '@mui/material/Chip';
const Content = () => {
  return (
      
            <Grid container spacing={2} sx={{}}>
            <Grid items lg={12} xs={12} sx={{}}> 
            <Card sx={{display:'flex',marginLeft:4,marginTop:4,marginBottom:2,marginRight:2,borderRadius:2,paddingTop:2,position: 'relative',boxShadow:1,backgroundColor:"#eff1f0"}}>
               <CardContent>
                <Box sx={{flexDirection:"row",display:'flex'}}>
                <Box sx={{display:'flex',}} >
                <Badge  >
                    <Typography variant='h6' sx={{color:"#373b3a"}}>
                        Components
                        <Chip label="0" sx={{marginLeft:1}} />
                    </Typography>
                </Badge>
                
                </Box>
                </Box>   
                <Box sx={{color:'#b2b7ba'}}>
                    <Typography variant='subtitle1'>
                        No items found
                    </Typography>
                </Box>                                                
                </CardContent> 
            </Card>
        </Grid>

    </Grid>
    
    
  )
}

export default Content