import React from 'react'
import Avatar from '@mui/material/Avatar';
import AnchorIcon from '@mui/icons-material/Anchor';
import deepOrange from '@mui/material/colors/deepOrange'
// import Cyan from '@mui/material/colors/Cyan' 
// import cyan from '@mui/material/colors/cyan'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box';
import PushPinIcon from '@mui/icons-material/PushPin';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import DirectionsBoatFilledIcon from '@mui/icons-material/DirectionsBoatFilled';
import Stack from '@mui/material/Stack';
import SaveAsRoundedIcon from '@mui/icons-material/SaveAsRounded';
import Navbar from './Navbar';
import HorizontalScrollCard from './HorizontalScrollCard';
const MainComponent = () => {
  return (
    <Grid container spacing={2} sx={{backgroundColor:''}}>
                <Grid item xs={12} >
                    <Card sx={{ backgroundColor: "#e8eced", overflow: 'auto', position: 'relative',borderRadius:2,boxShadow:3}}>
                        <CardContent>
                        <Box display="flex" flexDirection="row" alignItems="center"sx={{marginTop:2,flexDirection:{
                            xs:"column",
                            sm:"column",
                            lg:"row",
                            md:"row"
                        }}}>
                            {/* <Box display="flex"> */}
                                {/* <Box flexGrow={1}> */}
                                <Avatar sx={{ bgcolor: deepOrange[500] }}>
                                    RT
                                </Avatar>
                                {/* </Box> */}
                                <Typography variant="h8" gutterBottom sx={{paddingLeft:2,whiteSpace:'nowrap',fontWeight: 'bold'}}>
                                4907 - 00019
                            </Typography> 
                            <Typography variant="h8" gutterBottom sx={{paddingLeft:4,whiteSpace:'nowrap',fontWeight: 'bold'}} >
                                HOTEL/TECH WORK SQUAD GFR
                            </Typography>
                            <CardActions sx={{flexDirection:{
                            xs:"column",
                            sm:"column",
                            lg:"row",
                            md:"row"
                        },paddingLeft:{
                            xs:0,lg:40
                        }}}>
                                <Stack direction="row"  spacing={2} >
                                    <Button variant="contained" startIcon={<DirectionsBoatFilledIcon/>} style={{backgroundColor:'#86e5ff',color:'#388bad'}}>
                                            Loren ipsum
                                    </Button>
                                </Stack> 
                            </CardActions>
                            {/* </Box> */}
                        </Box>
                        <br />
                        <Box display="flex" flexDirection="row" alignItems="center" sx={{borderRadius:0,width:'100%',flexDirection:{
                            xs:"column",
                            sm:"column",
                            lg:"row",
                            md:"row"
                        }}}>
                            <Box flexGrow={1} sx={{
                                paddingRight:{
                                    xs:22,
                                    lg:2
                                }
                            }}>
                                <Typography variant='subtitle'>
                                    Date Requested
                                </Typography> 
                                <Typography sx={{fontWeight:'bold'}}>
                                    !0 july
                                </Typography>
                            </Box>

                            <Box flexGrow={2} sx={{
                                paddingRight:{
                                    xs:26,
                                    lg:2
                                }
                            }}>
                                <Typography variant='subtitle'>
                                    Type
                                </Typography> 
                                <Typography sx={{fontWeight:'bold'}}>
                                    Services
                                </Typography>
                            </Box>

                            <Box flexGrow={3}>
                                <Typography variant='subtitle'>
                                    Account
                                </Typography> 
                                <Typography sx={{fontWeight:'bold'}}>
                                5830042 - HM PAX ACCOMODATION (LABOUR)
                                </Typography>
                            </Box>

                            <Box flexGrow={3} sx={{paddingTop:2}}>
                                <Button  sx={{ borderRadius: 2, color: "#78776f",}}>
                                    <Typography sx= { {textDecoration: 'underline',color:'#0c6949'}}>Order Summary</Typography>
                                </Button>
                                <Button  sx={{ borderRadius: 2, color: "#78776f",}}>
                                    <Typography sx= { {textDecoration: 'underline',color:'#0c6949'}}>Order Progress</Typography>
                                </Button>
                            </Box>
                        </Box>
               
                        </CardContent>
                       
                    </Card>
                    <Navbar/>
                    
                </Grid>
               
        </Grid>
         
       
  )
}

export default MainComponent

{/* <Grid container spacing={2} sx={{backgroundColor:''}}>
                <Grid item xs={12}>
                    <Card sx={{ backgroundColor: "#e0e0e0", height: '100%', overflow: 'auto', position: 'relative',borderRadius:2,boxShadow:3 }}>
                        <CardContent>
                            <Typography variant="subtitle1" gutterBottom>
                                "4907 - 00019"
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                "HOTEL/TECH WORK SQUAD GFR"
                            </Typography>
                            

                            <div style={{ position: 'absolute', top: 10, right: 10 }}>
                                <Avatar sx={{ bgcolor: deepOrange[500] }}>
                                    RT
                                </Avatar>
                            </div>
                            {/* <div style={{ position:'absolute', paddingRight:6,alignItems: 'center',top:20,right:50}}>
                            <div>
                                
                             
                            </div>
                            </div> */}
                        
                           
        //                         <div style={{position:'absolute',bottom:20,right:10,alignItems:'right',marginBottom:10,alignContent:''}}>
        //                         <Typography variant="subtitle" gutterBottom >
        //                         Services
        //                         </Typography>
        //                         </div>
        //                         <div style={{position:'absolute',bottom:10,right:10,alignItems:'left',alignContent:'right'}}>
        //                         <Typography variant="subtitle">
        //                              10 july
        //                         </Typography>
        //                         </div>                   
        //                 </CardContent>
        //                 <CardActions>
        //                 <Stack direction="row" spacing={2}>
        //                 <Button variant="contained" startIcon={<DirectionsBoatFilledIcon/>} style={{backgroundColor:'#86e5ff',color:'#388bad'}}>
        //                                Loren ipsum
        //                     </Button>
        //                 </Stack>
                           
                            
        //                 </CardActions>
        //             </Card>
        //         </Grid>
        // </Grid> */}