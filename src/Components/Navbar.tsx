
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton'
import logo from '../assets/vite.svg';
export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <img src={logo} className="App-logo" alt="logo" width="30" />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
          GrowMeOrganic Private Limited
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}