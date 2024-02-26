

import {Typography,AppBar,Card,CardMedia,CardActions,CardContent,CssBaseline,Grid,Toolbar,Container} from "@mui/material"
import {PhotoCamera} from "@mui/icons-material"
function App() {
  return (
   <>
    <CssBaseline/>
    <AppBar position="relative">
      <Toolbar>
        <PhotoCamera/>
        <Typography variant="h6">
            Photo Camera
        </Typography>
      </Toolbar>
    </AppBar>
    <main>
      <div>
        <Container maxWidth="sm">
        <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
                Hello
          </Typography>
          <Typography variant="h6" align="center" paragraph> 
Hello you are m mmmmmmmmmmmmm mmmmmmmmmm mmmmmmmmm mmmm mmmmmmm mmmm mmmmmmmmmmmmmmmmmmmmmmmmmmmm
          </Typography>
        </Container>
      </div>
    </main>
   </>
  );
}

export default App;
