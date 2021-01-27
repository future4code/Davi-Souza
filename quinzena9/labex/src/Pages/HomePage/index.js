import React from 'react'
import GotoPageBtn from "../../Components/GotoPageBtn";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SignInSide from '../../Components/SignSide/SignSide';

const useStyles = makeStyles((styles) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: styles.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

function HomePage() {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h4" className={classes.title}>
                    LabeX
                </Typography>
                <GotoPageBtn variant='contained' color='secondary' path="/login" text="Area Restrita" />
              </Toolbar>
            </AppBar>
            <SignInSide/>
        </div>
    )
}

export default HomePage
