import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import GotoPageBtn from '../GotoPageBtn'
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.planet}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Duração da viagens(dias): {props.duration}
        </Typography>
        <Typography variant="body2" component="p">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
      <GotoPageBtn 
                variant='contained' 
                color='primary' 
                path="/trip/subscribe" 
                text="Inscrever-se"
            />
      </CardActions>
    </Card>
  );
}

