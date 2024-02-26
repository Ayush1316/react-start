import React,{useState} from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import Rating from '@mui/material/Rating';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';

const CardDetails = () => {
    const [value, setValue] = useState(4);
  return (
    
         <Grid container spacing={2} sx={{}}>
             <Grid items xs={12} sx={{}}> 
                 <Card sx={{display:'flex',marginLeft:4,marginTop:2,marginBottom:4,marginRight:2,borderRadius:2,paddingTop:2,position: 'relative',boxShadow:1,backgroundColor:"#eff1f0"}}>
                     <CardContent>
                        <Box sx={{flexDirection:"row",display:'flex'}}>
                        <Box sx={{display:'flex',}} >
                            <Typography variant='h6'>
                                Authorized Dealers 
                            </Typography>
                            <Box sx={{backgroundColor:'#dde2e5',marginLeft:2,paddingTop:1,paddingRight:2,paddingLeft:2,borderRadius:2,marginBottom:0}}>
                                <Typography variant='subtitle1'>
                                     Ref:RJ001963SRlN
                                </Typography>
                            </Box>
                        </Box>
                         </Box>
                         <Box display="flex" flexDirection="row" alignItems="center" sx={{borderRadius:0,width:'100%',marginTop:2}}>
                            <Box flexGrow={1}>
                                <Typography variant='subtitle'>
                                    Date Authorized
                                </Typography> 
                                <Typography sx={{fontWeight:'bold',paddingTop:1}}>
                                    !0 july
                                </Typography>
                            </Box>

                            <Box flexGrow={2} sx={{paddingLeft:3}}>
                                <Typography variant='subtitle'>
                                    Authorized by
                                </Typography> 
                                <Typography sx={{fontWeight:'bold',paddingTop:1}}>
                                   Jim Darren
                                </Typography>
                            </Box>

                            <Box flexGrow={3} sx={{paddingLeft:3}}>
                                <Typography variant='subtitle'>
                                    Invoice chased date
                                </Typography> 
                                <Typography sx={{fontWeight:'bold',paddingTop:1}}>
                                -
                                </Typography>
                            </Box>
                            <Box flexGrow={4} sx={{paddingLeft:3}}>
                                <Typography variant='subtitle'>
                                    Po chased Date
                                </Typography> 
                                <Typography sx={{fontWeight:'bold',paddingTop:1}}>
                                -
                                </Typography>
                            </Box>
                            <Box flexGrow={5} sx={{paddingLeft:3}}>
                                <Typography variant='subtitle'>
                                    Po confirmed date
                                </Typography> 
                                <Typography sx={{fontWeight:'bold',paddingTop:1}}>
                                -
                                </Typography>
                            </Box>
                            <Box flexGrow={6} sx={{paddingLeft:3}}>
                                <Typography variant='subtitle'>
                                    Po. Ref No
                                </Typography> 
                                <Typography sx={{fontWeight:'bold',paddingTop:1}}>
                                -
                                </Typography>
                            </Box>
                        </Box>
                            <Box display="flex" flexDirection="row" alignItems="center" sx={{borderRadius:0,width:'100%',marginTop:2}}>
                            <Box flexGrow={1}>
                                <Typography variant='body1'sx={{color:"#20644d"}}>
                                    Repairs (Riding Squads/Manual)
                                </Typography>
                                <Rating name="read-only" value={value} readOnly />
                                <Box sx={{color:"#20644d"}}>
                                <LocationOnIcon sx={{paddingTop:1}}/><Typography variant='' sx={{paddingTop:1,paddingLeft:1}}>1st Floor, Skypark. 8 Elliot Place, 03 8EP, CBR </Typography>
                                </Box>
                                <Box sx={{color:"#20644d"}}>
                                <LocalPhoneIcon sx={{paddingTop:1}}/><Typography variant='' sx={{paddingTop:1,paddingLeft:1}}>+44(O)141305130 </Typography>
                                </Box>
                                <Box sx={{color:"#20644d"}}>
                                <ContactPhoneIcon sx={{paddingTop:1}}/><Typography variant='' sx={{paddingTop:1,paddingLeft:1}}>+44(O)141305130 </Typography>
                                </Box>
                                <Box sx={{color:"#20644d"}}>
                                <MailIcon sx={{paddingTop:1}}/><Typography variant='' sx={{paddingBottom:1,paddingLeft:1}}>repairsservices@gmail.com</Typography>
                                </Box>
                            </Box>
                            </Box>
                     </CardContent>
                 </Card>
            </Grid>
         </Grid>
  )
}

export default CardDetails