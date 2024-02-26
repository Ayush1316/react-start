import React from 'react'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box';
import PushPinIcon from '@mui/icons-material/PushPin';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import SaveAsRoundedIcon from '@mui/icons-material/SaveAsRounded';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
const Navbar = () => {
  return (
   
                <Grid container spacing={2} sx={{backgroundColor:''}}>
                   <Grid item xs={12}>
                     <Card sx={{ backgroundColor: "#f5f5f5", position: 'relative',borderRadius:0,boxShadow:1,height:50,marginBottom:0,paddingTop:0}}>
                            <CardContent>
                                    <Button   startIcon={<SaveAsRoundedIcon/>} style={{color:'#066c4a'}}>
                                           <Typography variant='h8'>
                                           Loren ipsum
                                           </Typography>
                                    </Button>
                                    <Button sx={{paddingLeft:4}} startIcon={<SaveAsRoundedIcon/>} style={{color:'#066c4a'}}>
                                                
                                                <Typography variant='h8'>
                                                Print order details
                                                </Typography>
                                    </Button>
                                    <Button sx={{paddingLeft:4}} startIcon={<SaveAsRoundedIcon/>} style={{color:'#066c4a'}}>
                                           
                                            <Typography variant='h8'>
                                            Change Delivery Status
                                           </Typography>
                                    </Button>
                                    <Button sx={{paddingLeft:4}} startIcon={<SaveAsRoundedIcon/>} style={{color:'#066c4a'}}>
                                            <Typography variant='h8'>
                                            Reports
                                           </Typography>
                                    </Button>
                                    
                                    <Button sx={{paddingLeft:4}} startIcon={<SaveAsRoundedIcon/>} style={{color:'#066c4a'}}>
                                    <Typography variant='h8'>
                                            Actions
                                           </Typography>
                                    
                                    </Button>

                            </CardContent>
                        </Card>
                        </Grid>
                        </Grid>
                       
  )
}

export default Navbar