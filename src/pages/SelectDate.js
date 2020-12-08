import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import "react-datepicker/dist/react-datepicker.css";
 


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  dateDiv: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
      display: 'block'
  },
  dateFontState : {
    textAlign: 'center',
    display: 'flex',
    padding: '.2em'
  },
  dateFontEnd: {
    textAlign: 'center',
    margin: '.3em',

  },
  stateDate: {
    textAlign: 'center',
    display: 'flex',
    background: '#e4f1fc',
    margin: '.1em'
  },
  endDate: {
    textAlign: 'center',
    margin: '1em',

  },
  reactDatePickerWrapper: {
    display: 'inlineBlock',
    padding: '0',
    border: '0',
    margin: '1em'
},


}));



const SelectDate = () => {

  const classes = useStyles();

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
       <>

     <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          {/* <Paper className={classes.dateDiv}> */}
              <Paper className={classes.stateDate}>
                  <Typography className={classes.dateFontState} variant="h6" gutterBottom >
                      start: <DatePicker selected={startDate} onChange={date => setStartDate(date)}/>
                  </Typography>
                  <Typography className={classes.dateFontEnd} variant="h6" gutterBottom>
                       end: <DatePicker selected={endDate} onChange={date => setEndDate(date)}/>
                  </Typography>
              </Paper>          
          {/* </Paper> */}
         </Grid>
        </Grid>
      </div>           
           

      </>
  );
}

export default SelectDate;

  