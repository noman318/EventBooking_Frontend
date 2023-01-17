import React from 'react'
import {Typography,Grid, CssBaseline,Box,Paper,Button,TextField,Avatar} from "@mui/material"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LockOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const theme = createTheme();

export const ResetPassword=() =>{
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      password: data.get('password'),
      confirmPassword: data.get('confirmpassword')
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={true}
          sx={{
            padding:'20px', 
            margin:'auto'
          }}
        >
          <img src="https://media2.giphy.com/avatars/bookmyshowsea/1ACNZfssvdx2.JPG" alt="bg_image" height={'90%'}width={'100%'} />
      </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{margin:'5% 5% 5% 5%'}} >
          <Box
            sx={{
              padding:'20px', 
              margin:'auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
              Reset Password
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmpassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                color='secondary'
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Reset Password
              </Button>
              <Link to="/login">
                    Back to Login
                  </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

