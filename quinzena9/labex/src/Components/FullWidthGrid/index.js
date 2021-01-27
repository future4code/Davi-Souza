import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SimpleCard from '../SimpleCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function FullWidthGrid(props) {
  const classes = useStyles();
  const array = props.array

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {array.map((i) => {
            return (
              <Grid item xs={12} sm={6}>
                  <SimpleCard 
                    planet={i.planet}
                    name={i.name}
                    duration={i.durationInDays}
                    description={i.description}

                  />
              </Grid>
            )})
        }
      </Grid>
    </div>
  );
}
