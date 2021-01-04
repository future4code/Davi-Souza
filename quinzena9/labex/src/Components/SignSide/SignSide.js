import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import professorFuturama from '../../img/professorFuturama.jpg'
import GotoPageBtn from "../GotoPageBtn";

const useStyles = makeStyles((style) => ({
  root: {
    height: '89.7vh',
  },
  image: {
    backgroundImage: `url(${professorFuturama})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
    style.palette.type === 'light' ? style.palette.grey[50] : style.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: style.spacing(18, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  tripButton: {
    margin: style.spacing(3, 0, 2),
  },
}));


export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Não quer mais viver neste planeta?
            </Typography>
            <Typography component="h1" variant="h5">
              Nós te ajudamos!
            </Typography>
            <GotoPageBtn 
                size='large' 
                class={classes.tripButton} 
                variant='contained' 
                color='primary' 
                path="/trip/list" 
                text="Viagens" 
            />

        </div>
      </Grid>
    </Grid>
  );
}