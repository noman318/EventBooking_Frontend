// import { Box, Grid, TextField, Button, Link } from "@mui/material";
// import React from "react";
// import { makeStyles } from '@material-ui/core/styles';


// type Props = {};

// const useStyles = makeStyles((theme) => ({
//   gridContainer: {
//     [theme.breakpoints.down('xs')]: {
//       flexDirection: 'column',
//     },
//     [theme.breakpoints.up('sm')]: {
//       flexDirection: 'row',
//     },
//   },
//   formContainer: {
//     [theme.breakpoints.down('xs')]: {
//       width: '100%',
//     },
//     [theme.breakpoints.up('sm')]: {
//       width: '50%',
//     },
//   },
//   imageContainer: {
//     [theme.breakpoints.down('xs')]: {
//       display: 'none',
//     },
//     [theme.breakpoints.up('sm')]: {
//       display: 'block',
//     },
//   },
// }));


// function Login({}: Props): JSX.Element {
//   const classes = useStyles();

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });

//   };
//   return (
//     <>
//       <Grid container  spacing={2} className={classes.gridContainer}  sx={{
//             // marginTop: 8,
//             // // display: { xs: 'flex',lg:'flex',xl:'flex' },
//             // alignItems: {xs:'center',lg:'center'},
//             // // flexDirection: 'column',
//             // // alignItems: 'center',
//             // p: 2,
//             // // xs:{
//             // //   display:'flex'
//             // // },
//             // md:{
//             //   display:'flex',
//             //   flexDirection: 'column',
//             // },
//             // sm:{
//             //   display:'flex'
//             // },
//             // lg:{
//             //   display:'flex',
//             //   alignItems: 'center',
//             // },
//             // xl:{
//             //   display:'flex',
//             //   alignItems: 'center',
//             //   flexDirection: 'column',    
//             // },
//             // maxWidth: { xs: 'calc(100% - 48px)', sm: '35%' }
//           }}>
//         <Box component="form" className={classes.formContainer} onSubmit={handleSubmit} sx={{m:5}}>
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             autoFocus
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//           />
//           <Button
//             type="submit"
//             variant="contained"
//             sx={{ mt: 2, mb: 1, borderRadius: 28 }}
//           >
//             Login
//           </Button>
//           <Grid container >
//             <Grid item xs>
//               <Link href="#" variant="body2">
//                 Forgot password
//               </Link>
//             </Grid>
//             <Grid item xs>
//               <Link href="#" variant="body2">
//                 {"Create a new account"}
//               </Link>
//             </Grid>
//           </Grid>
//         </Box>
//         <Box sx={{margin:5}}>
//           <img src={'https://miro.medium.com/max/1024/0*4ty0Adbdg4dsVBo3.png'} height={'200'} width={'100%'}/>
//         </Box>
//       </Grid>
//     </>
//   );
// }

// export default Login;

import { Grid, TextField, Button, Link } from "@material-ui/core";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';

type Props = {};

const useStyles = makeStyles((theme) => ({
  formContainer: {
    width: '50%',
    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  imageContainer: {
    width: '35%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin:20,
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  textField: {
    margin: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  link: {
    margin: theme.spacing(2),
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
}));

function Login({}: Props): JSX.Element {
  const classes = useStyles();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Grid container spacing={2}>
      <Grid item className={classes.formContainer}>
        <form onSubmit={handleSubmit}>
          <TextField
            className={classes.textField}
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            className={classes.textField}
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            variant="contained"
            className={classes.button}
          >
            Login
          </Button>
          <Grid container direction="column" style={{ marginTop: '8px' }}>
            <Link href="#" className={classes.link}>Forgot password</Link>
            <Link href="#" className={classes.link}>Create a new account</Link>
          </Grid>
        </form>
      </Grid>
      <Grid item className={classes.imageContainer}>
        <img src={'https://miro.medium.com/max/1024/0*4ty0Adbdg4dsVBo3.png'} height={'100%'} width={'100%'}/>
      </Grid>
    </Grid>
  );
}

export default Login;

