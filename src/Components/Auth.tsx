import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { makeStyles } from "@mui/styles";
import {Typography} from "@mui/material"
import { useNavigate } from 'react-router-dom';
import Avatar from "@mui/material/Avatar";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
const useStyles = makeStyles( theme => {
return{
  Container:{
    width: "100%", 
  height: "97vh",
  background: `linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),url("https://images8.alphacoders.com/429/429165.jpg")center`,
  backgroundSize: "cover",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
},
}
})

interface Props{
  setIsAuth:React.Dispatch<React.SetStateAction<boolean>>
}
const Auth:React.FC<Props> = ({setIsAuth}) => {
  const [auth,setAuth] = useState({});
  let Navigate =useNavigate();
   const handleChange = (e:any) => {
    setAuth({...auth,[e.target.name]:e.target.value})
  }
  const handleSubmit = (e:any) =>{
   e.preventDefault();
   window.localStorage.setItem("userdata", JSON.stringify(auth));
   setIsAuth(true);
   Navigate('/dashboard')
  }
   const {
    Container
} = useStyles();
  return (
<Box className={Container} component="main" maxWidth="xs">
      
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",

        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form
          style={{maxWidth:"500px"}}
          onSubmit={handleSubmit}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            type="text"
            onChange={handleChange}
            autoComplete="name"
            autoFocus
            variant="standard"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="phone_number"
            label="Phone Number"
            type="number"
            id="phone_number"
            variant="standard"
            onChange={handleChange}
            autoComplete="phone_number"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="email"
            label="Email"
            type="email"
            id="email"
            onChange={handleChange}
            variant="standard"
            autoComplete="email"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2,color:"#fff" }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  )
}

export default Auth
