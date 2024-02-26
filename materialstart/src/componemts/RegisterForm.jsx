import React from 'react'
import {Typography,Container, CssBaseline, ThemeProvider} from "@mui/material"
import LockOpenIcon from '@mui/icons-material/LockOpen';
import usestyles from './style'
const styles = usestyles();
const RegisterForm = () => {

   
  return (
   <>
        <main>
           
                {/* <ThemeProvider theme={theme}> */}
                <div className={styles.container}>
                <CssBaseline/>
                <Container align="center">
                    <LockOpenIcon />
                    <Typography variant='h6'>helllp</Typography>
                </Container>
            </div>
                {/* </ThemeProvider> */}
               
        </main>
   </>
  )
}

export default RegisterForm