import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import SelectDate from './SelectDate';
import TextCreateSafari from './TextCreateSafari';
import SafariBuget from '../components/countryToVisit/SafariBudget';
import Typography from '@material-ui/core/Typography';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({

  CreateSafariWraper : {
    flexGrow: 1,
    position: 'relative',
    margin: 'auto',
    width: '80%',
    backgroundColor: 'radial-gradient(black, transparent)',
    top: '1em',
    padding: '3em'
  },
  yourActivities: {
    padding: theme.spacing(2),
    position: 'relative',
    backgroundColor: '#174317bf'
  },
  activityOne : {
   position: 'relative',
   display: 'flex',
   width: '90%',
   margin: '1rem'
},
  budgetPlan: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    position: 'relative',
    background: '#e4f1fc',
  },
  saySomething : {
    position: 'relative',
  },
  yourActivityDescription: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    position: 'relative',
    background: '#e4f1fc',
  },
  addDates: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    position: 'relative',
    background: '#e4f1fc',
  },
  activityDescriptionText: {
    position: 'relative',
    background: '##82a5c224',
      margin: '.3em',
      padding: '1em',
      width: '80%'
  },
  CreateSafariButton: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    position: 'relative',
    background: '#e4f1fc',
  },
  joinOtherSafari: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    position: 'relative',
    background: '#e4f1fc',
  },
  hintSection: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    position: 'relative',
    background: '#e4f1fc',
  },
}
));

const CreateSafari = () => {
  
       const classes = useStyles();

    return (

      <>
    <div className={classes.CreateSafariWraper}>
      <Grid  container direction="row" justify="center"alignItems="center" 
             item className={classes.CreateSafariWraper0} xm={12}>

      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.budgetPlan}>
            <SafariBuget/>   
          </Paper>
        </Grid>
        <Grid item xs={6}>
             <Grid item xs={12}>
             <TextCreateSafari/>
             </Grid>
         </Grid>
         
        <Grid item xs={12}>
          <Paper className={classes.saySomething}>
          {/* <TextCreateSafari/> */}
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.yourActivityDescription}>
                   <Typography className={classes.activityThree} variant="h6" gutterBottom>
                     <p> Title</p>
                  </Typography>
                   <Typography className={classes.activityThree} variant="body-1" gutterBottom>
                     <p>let the other travelermate if any special wishes wishes on each activity</p>
                  </Typography>
                            <Typography className={classes.activityOne} variant="body-1" gutterBottom >
                      populate 1st activity: <TextareaAutosize  className={classes.activityDescriptionText} aria-label="empty textarea" placeholder="let the other know anything special" />
                   </Typography>
                   <Typography className={classes.activityOne} variant="body-1" gutterBottom>
                      populate 2nd activity: <TextareaAutosize className={classes.activityDescriptionText} aria-label="empty textarea" placeholder="let the other know anything special" />
                  </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={6}>
          <Paper className={classes.CreateSafariButton}>
          <Button variant="contained" color="primary" disableElevation>
                   Create your safari
          </Button>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.joinOtherSafari}>
          <Button variant="contained" color="primary" disableElevation>
                   join safari created by other travelers
          </Button>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.hintSection}>
              hint by creating your own safari improves your changes  of getting travel companions
          </Paper>
        </Grid>
      </Grid>
      </Grid>
    </div>
    </>
        ); 
  };
  
  export default CreateSafari;