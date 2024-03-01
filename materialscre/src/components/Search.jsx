import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import Card from '@mui/material/Card'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import DirectionsBoatFilledIcon from '@mui/icons-material/DirectionsBoatFilled';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import TuneIcon from '@mui/icons-material/Tune';
import Divider from '@mui/material/Divider';
// const Search1 = styled('div')(({ theme }) => ({
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     '&:hover': {
//       backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(1),
//       width: 'auto',
//     },
//   }));
  
//   const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }));
//   const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     width: '100%',
//     '& .MuiInputBase-input': {
//       padding: theme.spacing(1, 1, 1, 0),
//       // vertical padding + font size from searchIcon
//       paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//       transition: theme.transitions.create('width'),
//       [theme.breakpoints.up('sm')]: {
//         width: '12ch',
//         '&:focus': {
//           width: '20ch',
//         },
//       },
//     },
//   }));

const Search = () => {
    return (
        <Grid container spacing={2} sx={{backgroundColor:''}}>
             <Grid item xs={12} >
             {/* <Card>
        <Search1>
        <DirectionsBoatFilledIcon/>
            <StyledInputBase
              placeholder="My Responsibilities"
              inputProps={{ 'aria-label': 'search' }}
            /> <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          </Search1>
          </Card> */}

            <Card sx={{  height: '100%', width:{
                lg:"100%",
                xs:"100%"
            },overflow: 'auto', position: 'relative',borderRadius:2,boxShadow:3,backgroundColor:'#f2eeeb' }}> 
            <Box display="flex"  alignItems="center"sx={{marginTop:2,flexDirection:{
                lg:"row",
                xs:"column"
            }}}>
    <Box flexGrow={1} sx={{}}>
        <Button startIcon={<DirectionsBoatFilledIcon />} endIcon={<SearchIcon />} sx={{ marginLeft:2,borderRadius: 2, backgroundColor: "#e2dcd2", color:"#78776f",paddingTop:{
            lg:1
        } }}>
            My Responsibilities
        </Button>
    </Box>
        
    <Box flexGrow={2}>
        <Button endIcon={<KeyboardArrowDownIcon />} sx={{ borderRadius: 2,backgroundColor: "#e2dcd2", color:"#78776f", paddingTop: 1,marginTop:{
            xs:1
        } ,paddingLeft:{
            xs:0
        }}}>
                            po                   
        </Button>
    </Box>
    <Box flexDirection="flex-end">
    <Badge badgeContent={4} color="success" ml={1} sx={{paddingTop:1,marginTop:1,marginRight:2}}>
        {/* Content to wrap with the badge */}
        <TuneIcon sx={{color:"#57945a", backgroundColor:"#030905",borderRadius:3 }}/>
    </Badge>
    </Box>
            </Box>
<br />
{/* <Box  > */}
<Box display="flex" sx={{flexDirection:{
    lg:"row"
    ,xs:"column"
}}}>
    {/* Left Section */}
    <Box flexGrow={1} padding={2}>
        {/* Copy ID Section */}
        <Typography variant="subtitle1">Copy id</Typography>
        <Typography variant="subtitle1">Enter copy id</Typography>
        <br />
        <Divider/>
        {/* Sort and Groupby Buttons */}
        <Box display="flex">
            <Button endIcon={<KeyboardArrowDownIcon />} sx={{ borderRadius: 2, color: "#78776f", paddingTop: 3 }}>
                <Typography sx= { {textDecoration: 'underline',color:'#626260'}}>Sort</Typography>
            </Button>
            <Button endIcon={<KeyboardArrowDownIcon />} sx={{ borderRadius: 2, color: "#78776f", paddingTop: 3 }}>
                <Typography sx= { {textDecoration: 'underline',color:'#626260'}}>Groupby</Typography>
            </Button>
            
        </Box>
        
         
    </Box>
    

    {/* Right Section */}
    <Box padding={2} flexGrow={1}>
        {/* Order No Section */}
        <Typography variant="subtitle1">Order no</Typography>
        <Typography variant="subtitle1">Enter order no</Typography>
        <br />
        <Divider/>
        <Box display="flex">
            <Button endIcon={<KeyboardArrowDownIcon />} sx={{ borderRadius: 2, color: "#78776f", paddingTop: 3 }}>
                <Typography sx= { {textDecoration:"underline",color:'#626260'}}>Clear</Typography>
            </Button>
            <Button endIcon={<KeyboardArrowDownIcon />} sx={{ borderRadius: 2, color: "#78776f", paddingTop: 3 }}>
                <Typography sx= { {textDecoration: 'underline',color:'#626260'}}>Search</Typography>
            </Button>
        </Box>
    </Box>
</Box>


        <Box >
        
        </Box>
        {/* </Box> */}
            </Card>
          </Grid>

      
          </Grid>
        
        
      

  )
}

export default Search