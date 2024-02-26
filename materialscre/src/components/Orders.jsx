import React from 'react'
import Avatar from '@mui/material/Avatar';
import AnchorIcon from '@mui/icons-material/Anchor';
import deepOrange from '@mui/material/colors/deepOrange'
// import Cyan from '@mui/material/colors/Cyan' 
// import cyan from '@mui/material/colors/cyan'
import Card from '@mui/material/Card'
import PushPinIcon from '@mui/icons-material/PushPin';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import DirectionsBoatFilledIcon from '@mui/icons-material/DirectionsBoatFilled';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

const Orders = () => {
    const order=[
        {
            id:"4907 - 00019" ,
            name:"HOTEL/TECH WORK SQUAD GFR",
            avtarmimg:"Rt",
            services:"services",
            date:"12n july 2019",
            icon:<AnchorIcon/>,
            icon2:"",
            avtarcolor:"#34974d",
            color: "#e8eced"
        }
        ,
        {
            id:"0000- 00034" ,
            name:"SAFETY FOUIPMFNT. COMPUC SONY SPARES",
            avtarmimg:"TQ",
            services:"services",
            date:"12n july 2019",
            icon:"",
            icon2:"",
            avtarcolor:deepOrange[500],
            color: "#e8eced" 
        },
        {
            id:"0000-00038",
            name:"SAFETY FOUIPMFNT. COMPUC SONY SPARES",
            avtarmimg:"TQ",
            services:"services",
            date:"12n july 2019",
            icon:"",
            icon2:<PushPinIcon/>,
            avtarcolor:"#ff9f1d",
            color: "#e8eced"
        },
        {
            id:"6677-7779",
            name:" UEL.UJBE AIR WAIER.SEWAGE EM",
            avtarmimg:"TQ",
            services:"services",
            date:"12n july 2019",
            icon:<AnchorIcon/>,
            icon2:<PushPinIcon/>,
            avtarcolor:"#34974d",
            color: "#e8eced"
        }
       
    ]





    return (
        <Grid container spacing={2} sx={{backgroundColor:''}}>
             <Typography variant='h6' sx={{color:"#373b3a",marginLeft:4}}>
                       ORDERS
                        <Chip label="8" sx={{marginLeft:1}} />
                    </Typography>
            {order.map((orderItem) => (
                <Grid item xs={12} key={orderItem.id}>
                    <Card sx={{ backgroundColor: orderItem.color, height: '100%', overflow: 'auto', position: 'relative',borderRadius:2,boxShadow:3,':hover': {
          borderColor:'black',border:2
          
        } }}>
                        <CardContent>
                            <Typography variant="subtitle1" sx={{color:'#52917e'}} gutterBottom>
                                {orderItem.id}
                            </Typography>
                            <Typography variant="subtitle1" sx={{color:'#595d5e'}} gutterBottom>
                                {orderItem.name}
                            </Typography>
                            

                            <div style={{ position: 'absolute', top: 10, right: 10 }}>
                                <Avatar sx={{ bgcolor: orderItem.avtarcolor }}>
                                    {orderItem.avtarmimg}
                                </Avatar>
                            </div>
                            <div style={{ position:'absolute', paddingRight:6,alignItems: 'center',top:20,right:50}}>
                            <div>
                                {orderItem.icon}
                                {orderItem.icon2}
                            </div>
                            </div>
                        
                           
                                <div style={{position:'absolute',bottom:20,right:10,alignItems:'right',marginBottom:10,alignContent:''}}>
                                <Typography variant="subtitle" gutterBottom >
                                {orderItem.services}
                                </Typography>
                                </div>
                                <div style={{position:'absolute',bottom:10,right:10,alignItems:'left',alignContent:'right'}}>
                                <Typography variant="subtitle">
                                     {orderItem.date}
                                </Typography>
                                </div>                   
                        </CardContent>
                        <CardActions>
                        <Stack direction="row" spacing={2}>
                        <Button variant="contained" startIcon={<DirectionsBoatFilledIcon/>} style={{backgroundColor:'#86e5ff',color:'#388bad'}}>
                                       Loren ipsum
                            </Button>
                        </Stack>
                           
                            
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default Orders;
