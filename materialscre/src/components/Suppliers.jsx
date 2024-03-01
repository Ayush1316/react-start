import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import { PieChart } from '@mui/x-charts/PieChart';
const Suppliers = () => {
    const data = [
        { label: 'Group A', value: 1600,color: '#006875' },
        { label: 'Group B', value: 400 ,color:'#3edbed'}
      ];
      const real = [
        { label: 'Group A', value: 1600,color: '#016e1d' },
        { label: 'Group B', value: 400 ,color:'#8ed88f'}
      ];
  return (
    <Grid container spacing={2} sx={{}}>
    <Grid items lg={12} xs={12} sm={12} sx={{}}> 
        <Card sx={{display:'flex',marginLeft:4,marginTop:2,marginBottom:4,marginRight:2,borderRadius:2,paddingTop:2,position: 'relative',boxShadow:1,backgroundColor:"#eff1f0"}}>
            <CardContent>
               <Box sx={{flexDirection:{lg:"row",xs:"column"},display:'flex'}}>
               <Box sx={{display:'flex',}} >
                   <Typography variant='h6'>
                       Cost
                   </Typography>
                   <Box sx={{backgroundColor:'#dde2e5',marginLeft:2,paddingTop:1,paddingRight:2,paddingLeft:2,borderRadius:4,marginBottom:0}}>
                       <Typography variant='subtitle1'>
                            Usd
                       </Typography>
                   </Box>
             </Box>
             </Box>
             <Box display="flex"  alignItems="center" sx={{paddingLeft:{xs:5},borderRadius:0,width:{lg:"100%",xs:"20%"},marginTop:2,flexDirection:{lg:"row",xs:"column"}}}>
                            <Box flexGrow={1} sx={{backgroundColor:"#f5f5f5"}}>
                               <Box sx={{boxShadow:1}}>
                                <Typography variant='h6' sx={{color:"#202020",fontSize:{xs:15},justifyContent:{xs:"center"},paddingLeft:{xs:15}}}>
                                   Goods / Service Balance
                                </Typography> 
                               </Box>
                               <PieChart
                                    series={[
                                    {
                                        startAngle: -90,
                                        endAngle: 90,
                                        paddingAngle: 0,
                                        innerRadius: 60,
                                        outerRadius: 100,
                                        data,
                                    },
                                    ]}
                                    margin={{ right: 5 }}
                                    width={400}
                                    height={300}
                                    slotProps={{
                                        legend: { 
                                            direction:'row',
                                            position:{vertical:'bottom',horizontal:'middle'},
                                            padding:20
                                         }}}
                                    sx={{paddingTop:16,justifyContent:'center',width:{xs:50}}}
                                />
                            </Box>
                            <Box flexGrow={2} sx={{backgroundColor:"#f5f5f5",marginLeft:4}}>
                               <Box sx={{boxShadow:1}}>
                                <Typography variant='h6' sx={{color:"#202020",fontSize:{xs:15},justifyContent:{xs:"center"},paddingLeft:{xs:15}}}>
                                  Freight/Delivery Balance
                                </Typography> 
                               </Box>
                               <PieChart
                                    series={[
                                    {
                                        startAngle: -90,
                                        endAngle: 90,
                                        paddingAngle: 0,
                                        innerRadius: 60,
                                        outerRadius: 100,
                                        data: [{ value: 10, color: '#016e1d' }, { value: 15,color:'#8ed88f' }]
                                    },
                                    ]}
                                    margin={{ right: 5 }}
                                    width={400}
                                    height={300}
                                    slotProps={{
                                        legend: { 
                                            direction:'row',
                                            position:{vertical:'bottom',horizontal:'middle'},
                                            padding:20
                                         }}}
                                    sx={{paddingTop:16,justifyContent:'center'}}
                                />
                            </Box>
                </Box>
                <Box display="flex"  alignItems="center" sx={{borderRadius:0,width:{lg:"100%",
            xs:"50%"},marginTop:2,flexDirection:{lg:"row",xs:"row"},paddingRight:{xs:10},paddingLeft:{xs:0},fontSize:{xs:15}}}>
                      <Box  sx={{flexGrow:{xs:1,lg:1}}} >
                       <Typography variant='h6' sx={{color:"#141414",fontSize:{xs:10,lg:20}}}>
                            Total Po Amount
                        </Typography>
                        <Typography variant='h6' sx={{color:"#141414",fontSize:{xs:10,lg:20}}}>
                            Total Outstanding Amount
                        </Typography>
                        </Box>
                       
                       <Box sx={{flexGrow:{xs:2,lg:2}}} >
                        <Typography sx={{color:"#2e5574",fontSize:{xs:10,lg:20}}}>
                            41,21,263.00
                        </Typography>
                        <Typography sx={{color:"#2e5574",fontSize:{xs:10,lg:20}}}>
                           9,000.00
                        </Typography>
                       </Box>
                        
                </Box>
             </CardContent>
        </Card>
    </Grid>
    </Grid>
  )
}

export default Suppliers