import React from "react";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  homePageWrap: {
    flexGrow: 1,
dislay: "flex"
  },
  paper: {
    dislay: "flex",
    textAlign: "center",
  }
}));



const HomePage = () => {

  const classes = useStyles();

  return (
    <div className={classes.homePageWrap}>
      <Grid container spacing={3}>
          <Grid item xs={12}>
             <Paper className={classes.homeLogWrap}>
               share by other
             </Paper>
         </Grid>
        <Grid item xs={12}>
           <Paper className={classes.formWrap}>
                       can be something like," ...... hi i would like to have some
          <Grid item xs={3}>
                        use profile upload
          </Grid>
          
                       passionate trallers to share with me my safari plans, i am a
                       flexible traveller and open to any changes as alongs it fits or
                       plays well with my budget and time frame :) "
  
              <Paper className={classes.paper}>
                <Button>
                  
               </Button>
            </Paper>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
export default  HomePage;


