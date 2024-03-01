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
import Container from '@mui/material/Container'
import { useMediaQuery } from 'react-responsive';

const CardDetails = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
    const [value, setValue] = useState(4);
  return (
    
         <Grid container spacing={2} sx={{}}>
             <Grid items lg={12} xs={12} sm={12} sx={{}}> 
             
                <Card xs={12} sx={{display:'flex',marginLeft:4,marginTop:2,marginBottom:4,marginRight:2,borderRadius:2,paddingTop:2,position: 'relative',boxShadow:1,backgroundColor:"#eff1f0",}} >
                     <CardContent xs={12}>
                     <Container sm={12} xs={12}>
                        <Box sx={{display:'flex', }} >
                        <Box sx={{display:'flex',flexDirection:{
                            xs:"column",
                            sm:"column",
                            lg:"row",
                            md:"row"
                        }}} >
                            <Typography variant='h6'>
                                Authorized Dealers 
                            </Typography>
                            <Box sx={{backgroundColor:'#dde2e5',marginLeft:{lg:2,xs:0},paddingTop:1,paddingRight:2,paddingLeft:2,borderRadius:2,marginBottom:0}}>
                                <Typography variant='subtitle1'>
                                     Ref:RJ001963SRlN
                                </Typography>
                            </Box>
                        </Box>
                         </Box>
                         <Box display="flex"   alignItems="center" sx={{borderRadius:0,width:'100%',marginTop:2,flexDirection:{
                            xs:"column",
                            sm:"column",
                            lg:"row",
                            md:"row"
,                        }}}>
                            <Box flexGrow={1}  >
                                <Typography variant='subtitle' sx={{paddingRight:{xs:6,lg:0}}}>
                                    Date Authorized
                                </Typography> 
                                <Typography sx={{fontWeight:'bold',paddingTop:1}}>
                                    !0 july
                                </Typography>
                            </Box>

                            <Box flexGrow={2} xs={12} sx={{paddingLeft:{lg:2} , paddingRight:{xs:9}} }>
                                <Typography variant='subtitle' sx={{marginLeft:{xs:0}}}>
                                    Authorized by
                                </Typography> 
                                <Typography sx={{fontWeight:'bold',paddingTop:1}}>
                                   Jim Darren
                                </Typography>
                            </Box>

                            <Box flexGrow={3} xs={12} sx={{paddingLeft:3,paddingRight:{xs:9}}}>
                                <Typography variant='subtitle' sx={{marginLeft:{xs:0}}}>
                                    Invoice chased date
                                </Typography> 
                                <Typography sx={{fontWeight:'bold',paddingTop:1}}>
                                -
                                </Typography>
                            </Box>
                            <Box flexGrow={4} xs={12} sx={{paddingLeft:3,paddingRight:{xs:9}}}>
                                <Typography variant='subtitle' sx={{marginLeft:{xs:0}}}>
                                    Po chased Date
                                </Typography> 
                                <Typography sx={{fontWeight:'bold',paddingTop:1}}>
                                -
                                </Typography>
                            </Box>
                            <Box flexGrow={5} xs={12} sx={{paddingLeft:3,paddingRight:{xs:9}}}>
                                <Typography variant='subtitle' >
                                    Po confirmed date
                                </Typography> 
                                <Typography sx={{fontWeight:'bold',paddingTop:1}}>
                                -
                                </Typography>
                            </Box>
                            <Box flexGrow={6} xs={12} sx={{paddingLeft:{lg:3},paddingRight:{xs:11}}}>
                                <Typography variant='subtitle' >
                                    Po. Ref No
                                </Typography> 
                                <Typography sx={{fontWeight:'bold',paddingTop:1}}>
                                -
                                </Typography>
                            </Box>
                        </Box>
                            <Box display="flex" xs={12}  alignItems="center" sx={{borderRadius:0,width:'100%',marginTop:2,flexDirection:{lg:"row",xs:"column"}}}>
                            <Box flexGrow={1} xs={12}>
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
                                <MailIcon sx={{paddingTop:1}}/><Typography variant='' sx={{paddingBottom:1,paddingLeft:{lg:1,xs:0},paddingTop:{xs:1},whiteSpace:{xs:"wrap"}}}>repairsservices@gmail.com</Typography>
                                </Box>
                            </Box>
                            </Box>
                            </Container>
                     </CardContent>
                 </Card>
                 
            </Grid>
         </Grid>
  )
}

export default CardDetails