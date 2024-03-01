import React, { useState } from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import SaveAsRoundedIcon from '@mui/icons-material/SaveAsRounded';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

//   const toggleDrawer = (open) => (event) => {
//     if (
//       event.type === 'keydown' &&
//       ((event.key === 'Tab' || event.key === 'Shift'))
//     ) {
//       return;
//     }
//     setIsDrawerOpen(open);
//   };

//   if (isMobile) {
//     return (
//       <>
//         <IconButton
//           color="inherit"
//           aria-label="open drawer"
//           onClick={toggleDrawer(true)}
//           edge="start"
//           sx={{ mr: 2 }}
//         >
//           <MenuIcon />
//         </IconButton>
//         <Drawer
//           anchor="left"
//           open={isDrawerOpen}
//           onClose={toggleDrawer(false)}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//         >
//           <Box
//             sx={{ width: 250 }}
//             role="presentation"
//             onClick={toggleDrawer(false)}
//             onKeyDown={toggleDrawer(false)}
//           >
//             <Grid container spacing={2} sx={{ backgroundColor: '' }}>
//               <Grid item xs={12}>
//                 <Card sx={{ backgroundColor: "#f5f5f5", position: 'relative', borderRadius: 0, boxShadow: 1, marginBottom: 0 }}>
//                   <CardContent>
//                     <Button startIcon={<SaveAsRoundedIcon />} style={{ color: '#066c4a' }}>
//                       <Typography variant='h8'>
//                         Loren ipsum
//                       </Typography>
//                     </Button>
//                     <Button sx={{ paddingLeft: 4 }} startIcon={<SaveAsRoundedIcon />} style={{ color: '#066c4a' }}>
//                       <Typography variant='h8'>
//                         Print order details
//                       </Typography>
//                     </Button>
//                     <Button sx={{ paddingLeft: 4 }} startIcon={<SaveAsRoundedIcon />} style={{ color: '#066c4a' }}>
//                       <Typography variant='h8'>
//                         Change Delivery Status
//                       </Typography>
//                     </Button>
//                     <Button sx={{ paddingLeft: 4 }} startIcon={<SaveAsRoundedIcon />} style={{ color: '#066c4a' }}>
//                       <Typography variant='h8'>
//                         Reports
//                       </Typography>
//                     </Button>
//                     <Button sx={{ paddingLeft: 4 }} startIcon={<SaveAsRoundedIcon />} style={{ color: '#066c4a' }}>
//                       <Typography variant='h8'>
//                         Actions
//                       </Typography>
//                     </Button>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             </Grid>
//           </Box>
//         </Drawer>
//       </>
//     );
//   } else {
    return (
      <Grid container spacing={2} sx={{ backgroundColor: '' }}>
        <Grid item xs={12} lg={12} sx={{
              position:{
                     lg:"relative",
                     md:"relative",
                     xs:"static",
                     sm:"static"
              },
              
        }} >
          <Card sx={{ backgroundColor: "#f5f5f5", position: 'relative', borderRadius: 0, boxShadow: 1, marginBottom: 0 ,height:{
              lg:40,xs:180
          },paddingBottom:{lg:2,xs:0},flexWrap:{
                     xs:"wrap"
              }
          }}>
            <CardContent sx={{
             
            }}>
              <Button startIcon={<SaveAsRoundedIcon />} sx={{
                     paddingLeft:{
                            xs:4
                     }
              }} style={{ color: '#066c4a' }}>
                <Typography variant='h8'>
                  Loren ipsum
                </Typography>
              </Button>
              <Button sx={{ paddingLeft: 4 }} startIcon={<SaveAsRoundedIcon />} style={{ color: '#066c4a' }}>
                <Typography variant='h8'>
                  Print order details
                </Typography>
              </Button>
              <Button sx={{ paddingLeft: 4 }} startIcon={<SaveAsRoundedIcon />} style={{ color: '#066c4a' }}>
                <Typography variant='h8'>
                  Change Delivery Status
                </Typography>
              </Button>
              <Button sx={{ paddingLeft: 4 }} startIcon={<SaveAsRoundedIcon />} style={{ color: '#066c4a' }}>
                <Typography variant='h8'>
                  Reports
                </Typography>
              </Button>
              <Button sx={{ paddingLeft: 4 }} startIcon={<SaveAsRoundedIcon />} style={{ color: '#066c4a' }}>
                <Typography variant='h8'>
                  Actions
                </Typography>
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }


export default Navbar;
