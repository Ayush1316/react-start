import React,{useState} from 'react';
import AppBar from '@mui/material/AppBar';
import  Grid  from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Modal from '@mui/material/Modal';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

export default function ButtonAppBar() {
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());
  
    const isStepOptional = (step) => {
      return step === 1;
    };
  
    const isStepSkipped = (step) => {
      return skipped.has(step);
    };
  
    const handleNext = () => {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }
  
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleSkip = () => {
      if (!isStepOptional(activeStep)) {
        // You probably want to guard against something like this,
        // it should never occur unless someone's actively trying to break something.
        throw new Error("You can't skip a step that isn't optional.");
      }
  
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped((prevSkipped) => {
        const newSkipped = new Set(prevSkipped.values());
        newSkipped.add(activeStep);
        return newSkipped;
      });
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };
  


    const [open, setOpen] = useState(false);

    const[open1,setOpen1] = useState(false)
    const handleOpen = () => setOpen1(true);
    const handleClose = () => setOpen1(false);

    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };
  
    const DrawerList = (
      <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
    const ModalList =(
        <Modal
        open={open1}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >


<Box sx={{width:"50%", backgroundColor:"white", color:"black", justifyContent:"center", alignItems:"center", marginTop:15,marginLeft:15}} >
<Stepper activeStep={activeStep}>
{steps.map((label, index) => {
const stepProps = {};
const labelProps = {};
if (isStepOptional(index)) {
labelProps.optional = (
  <Typography variant="caption">Optional</Typography>
);
}
if (isStepSkipped(index)) {
stepProps.completed = false;
}
return (
<Step key={label} {...stepProps}>
  <StepLabel {...labelProps}>{label}</StepLabel>
</Step>
);
})}
</Stepper>
{activeStep === steps.length ? (
<React.Fragment>
<Typography sx={{ mt: 2, mb: 1 }}>
All steps completed - you&apos;re finished
</Typography>
<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
<Box sx={{ flex: '1 1 auto' }} />
<Button onClick={handleReset}>Reset</Button>
</Box>
</React.Fragment>
) : (
<React.Fragment>
<Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
<Button
  color="inherit"
  disabled={activeStep === 0}
  onClick={handleBack}
  sx={{ mr: 1 }}
>
  Back
</Button>
<Box sx={{ flex: '1 1 auto' }} />
{isStepOptional(activeStep) && (
  <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
    Skip
  </Button>
)}

<Button onClick={handleNext}>
  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
</Button>
</Box>
</React.Fragment>
)}
</Box>
</Modal>
    )


  return (
 <Grid container>
        <Grid item lg={12} xs={12}>
          <AppBar >
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              
                <Button color='inherit' onClick={toggleDrawer(true)}>Open drawer</Button>
                <Drawer open={open} onClose={toggleDrawer(false)}>
                    {DrawerList}
                </Drawer>
                <Button color='inherit'  onClick={handleOpen}>Open modal</Button>
                
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
         
          
        </Grid>
        
        <Grid item lg={12} xs={12}>
          <Box sx={{justifyContent:"center",alignItems:"center",alignContent:"center",display: 'flex',}}>
            {ModalList}
          </Box>
  
      </Grid>
      </Grid>
  
      

  );
}