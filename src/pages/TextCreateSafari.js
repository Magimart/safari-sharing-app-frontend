import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles((theme) => ({

  createTextField: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: 'block',
    width: '90%',
    display: 'left',
    position: 'relative',
    margin: '1em'
  },
  
}));

const  TextCreateSafari = () => {

  const classes = useStyles();


  return (

    <>

                <Paper className={classes.stateDate}>
                  <Typography className={classes.dateFontState} variant="p1" gutterBottom >
                  <TextareaAutosize   className={classes.createTextField}
                      rowsMax={4}
                       aria-label="maximum height"
                         placeholder="Maximum 4 rows"
                       defaultValue="
                      
                       can be something like,...... 
                    hi  i would like to have some passionate trallers
                      share with me my safari plans, i am a flexible
                    traveller and open to any changes as alongs 
                      it fits or plays well with my budget and time frame :) 
                      "  
                  />
                  
                  </Typography>
              
              </Paper>


</>


    
  );
}

export default TextCreateSafari;

