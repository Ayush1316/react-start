import React,{useState} from 'react';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import { makeStyles } from 'tss-react/mui';
import Content from './Content';


const useStyles = makeStyles()((theme) => ({
    item: {
        cursor: 'pointer', 
      },
      selected: {
        color: '#576363',
        textDecoration: 'underline', 
      }
}))
const HorizontalScrollCard = () => {
    const { classes } = useStyles();
    const [selected, setSelected] = useState(-1);
  return (
    
    <Card sx={{display:'flex',overflowX:'auto',marginTop:0,boxShadow:1}}>
      <CardContent sx={{display:'flex',color:'#929699'}}>
        <Box sx={{marginLeft:2}}>
            <div  className={`${classes.item} ${
            selected === 0 ? classes.selected : ''
          }`} 
          onClick={() => setSelected(0)}>
            <Typography>
                Summary
                </Typography>
            </div>
        </Box>
        <Box sx={{paddingLeft:2,whiteSpace:'nowrap'}}>
        <div  className={`${classes.item} ${
            selected === 1 ? classes.selected : ''
          }`} // Apply the conditional style
          onClick={() => setSelected(1)}>
        <Typography>
        Order Lines
        </Typography>
        </div>
        </Box>
        <Box sx={{paddingLeft:2,whiteSpace:'nowrap'}}>
        <div  className={`${classes.item} ${
            selected === 2 ? classes.selected : ''
          }`} 
          onClick={() => setSelected(2)}>
        <Typography>
        Suppliers
        </Typography>
        </div>
        </Box>
        <Box sx={{paddingLeft:2,whiteSpace:'nowrap'}}>
        <div  className={`${classes.item} ${
            selected === 3 ? classes.selected : ''
          }`} // Apply the conditional style
          onClick={() => setSelected(3)}>
        <Typography>
        Analysis
        </Typography>
        </div>
        </Box>
        <Box sx={{paddingLeft:2,whiteSpace:'nowrap'}}>
        <div  className={`${classes.item} ${
            selected === 4 ? classes.selected : ''
          }`} // Apply the conditional style
          onClick={() => setSelected(4)}>
        <Typography>
        Freight Details
        </Typography>
        </div>
        </Box>
        <Box sx={{paddingLeft:2,whiteSpace:'nowrap'}}>
       <div  className={`${classes.item} ${
            selected === 5 ? classes.selected : ''
          }`} // Apply the conditional style
          onClick={() => setSelected(5)}>
       <Typography>
        Delivery
        </Typography>
       </div>
        </Box>
        <Box sx={{paddingLeft:2}}>
        <div  className={`${classes.item} ${
            selected === 6 ? classes.selected : ''
          }`} // Apply the conditional style
          onClick={() => setSelected(6)}>
        <Typography>
        Invoice
        </Typography>
        </div>
        </Box>
        <Box sx={{paddingLeft:2,whiteSpace:'nowrap'}}>
        <div  className={`${classes.item} ${
            selected === 7 ? classes.selected : ''
          }`} // Apply the conditional style
          onClick={() => setSelected(7)}>
        <Typography>
        Memos
        </Typography>
        </div>
        </Box>
        <Box sx={{paddingLeft:2,whiteSpace:'nowrap'}}>
        <div  className={`${classes.item} ${
            selected === 8 ? classes.selected : ''
          }`} 
          onClick={() => setSelected(8)}>
        <Typography>
        Note Attactments
        </Typography>
        </div>
        </Box>
        <Box sx={{paddingLeft:2,whiteSpace:'nowrap'}}>
        <div  className={`${classes.item} ${
            selected === 9 ? classes.selected : ''
          }`} 
          onClick={() => setSelected(9)}>
        <Typography>
        Budgets
        </Typography>
        </div>
        </Box>
      </CardContent>
   

    </Card>
  );
};

export default HorizontalScrollCard;

