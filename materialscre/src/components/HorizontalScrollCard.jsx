import React,{useState} from 'react';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import { makeStyles } from 'tss-react/mui';
import Content from './Content';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import Suppliers from './Suppliers';
import Main2 from './Main2';

const useStyles = makeStyles()((theme) => ({
    item: {
        cursor: 'pointer', 
      },
      selected: {
        color: '#576363',
        textDecoration: 'underline', 
      }
}))

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
const HorizontalScrollCard = () => {
    const { classes } = useStyles();
    const [selected, setSelected] = useState(-1);
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

//   return (
    
    // <Card sx={{display:'flex',overflowX:'auto',marginTop:0,boxShadow:1}}>
    //   <CardContent sx={{display:'flex',color:'#929699'}}>
    //     <Box sx={{marginLeft:2}}>
    //         <div  className={`${classes.item} ${
    //         selected === 0 ? classes.selected : ''
    //       }`} 
    //       onClick={() => setSelected(0)}>
    //         <Typography>
    //             Summary
    //             </Typography>
    //         </div>
    //     </Box>
    //     <Box sx={{paddingLeft:2,whiteSpace:'nowrap'}}>
    //     <div  className={`${classes.item} ${
    //         selected === 1 ? classes.selected : ''
    //       }`} // Apply the conditional style
    //       onClick={() => setSelected(1)}>
    //     <Typography>
    //     Order Lines
    //     </Typography>
    //     </div>
    //     </Box>
    //     <Box sx={{paddingLeft:2,whiteSpace:'nowrap'}}>
    //     <div  className={`${classes.item} ${
    //         selected === 2 ? classes.selected : ''
    //       }`} 
    //       onClick={() => setSelected(2)}>
    //     <Typography>
    //     Suppliers
    //     </Typography>
    //     </div>
    //     </Box>
    //     <Box sx={{paddingLeft:2,whiteSpace:'nowrap'}}>
    //     <div  className={`${classes.item} ${
    //         selected === 3 ? classes.selected : ''
    //       }`} // Apply the conditional style
    //       onClick={() => setSelected(3)}>
    //     <Typography>
    //     Analysis
    //     </Typography>
    //     </div>
    //     </Box>
    //     <Box sx={{paddingLeft:2,whiteSpace:'nowrap'}}>
    //     <div  className={`${classes.item} ${
    //         selected === 4 ? classes.selected : ''
    //       }`} // Apply the conditional style
    //       onClick={() => setSelected(4)}>
    //     <Typography>
    //     Freight Details
    //     </Typography>
    //     </div>
    //     </Box>
    //     <Box sx={{paddingLeft:2,whiteSpace:'nowrap'}}>
    //    <div  className={`${classes.item} ${
    //         selected === 5 ? classes.selected : ''
    //       }`} // Apply the conditional style
    //       onClick={() => setSelected(5)}>
    //    <Typography>
    //     Delivery
    //     </Typography>
    //    </div>
    //     </Box>
    //     <Box sx={{paddingLeft:2}}>
    //     <div  className={`${classes.item} ${
    //         selected === 6 ? classes.selected : ''
    //       }`} // Apply the conditional style
    //       onClick={() => setSelected(6)}>
    //     <Typography>
    //     Invoice
    //     </Typography>
    //     </div>
    //     </Box>
    //     <Box sx={{paddingLeft:2,whiteSpace:'nowrap'}}>
    //     <div  className={`${classes.item} ${
    //         selected === 7 ? classes.selected : ''
    //       }`} // Apply the conditional style
    //       onClick={() => setSelected(7)}>
    //     <Typography>
    //     Memos
    //     </Typography>
    //     </div>
    //     </Box>
    //     <Box sx={{paddingLeft:2,whiteSpace:'nowrap'}}>
    //     <div  className={`${classes.item} ${
    //         selected === 8 ? classes.selected : ''
    //       }`} 
    //       onClick={() => setSelected(8)}>
    //     <Typography>
    //     Note Attactments
    //     </Typography>
    //     </div>
    //     </Box>
    //     <Box sx={{paddingLeft:2,whiteSpace:'nowrap'}}>
    //     <div  className={`${classes.item} ${
    //         selected === 9 ? classes.selected : ''
    //       }`} 
    //       onClick={() => setSelected(9)}>
    //     <Typography>
    //     Budgets
    //     </Typography>
    //     </div>
    //     </Box>
    //   </CardContent>
   

    // </Card>
//   );
return(
<Box sx={{ width: '100%' }}>
<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="scrollable"
  scrollButtons="auto">
    <Tab label="Summary" {...a11yProps(0)} />
    <Tab label="Order Lines" {...a11yProps(1)} />
    <Tab label="Suppliers" {...a11yProps(2)} />
    <Tab label="Analysis" {...a11yProps(3)} />
    <Tab label="Frieght Details" {...a11yProps(4)} />
    <Tab label="Delivery" {...a11yProps(5)} />
    <Tab label="Invoice" {...a11yProps(6)} />
    <Tab label="Memos" {...a11yProps(7)} />
    <Tab label="Notes & Attactments" {...a11yProps(8)} />
    <Tab label="Budget" {...a11yProps(9)} />
  </Tabs>
</Box>
<CustomTabPanel value={value} sx={{padding:{xs:0}}} index={0}>
  <Main2 />
</CustomTabPanel>
<CustomTabPanel value={value} index={1}>
  Item Two
</CustomTabPanel>
<CustomTabPanel value={value} index={2}>
  Item Three
</CustomTabPanel>
<CustomTabPanel value={value} index={3}>
  Item Three
</CustomTabPanel>
<CustomTabPanel value={value} index={4}>
  Item Three
</CustomTabPanel>
<CustomTabPanel value={value} index={5}>
  Item Three
</CustomTabPanel>
<CustomTabPanel value={value} index={6}>
  Item Three
</CustomTabPanel>
<CustomTabPanel value={value} index={7}>
  Item Three
</CustomTabPanel>
<CustomTabPanel value={value} index={8}>
  Item Three
</CustomTabPanel><CustomTabPanel value={value} index={9}>
  Item Three
</CustomTabPanel>
</Box>
)
};

export default HorizontalScrollCard;

