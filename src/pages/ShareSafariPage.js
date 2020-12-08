
import React, { useState, useEffect } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Typography from '@material-ui/core/Typography';
import CheckBoxCustom from "../components/countryToVisit/CheckBoxCustom";


const useStyles = makeStyles((theme) => ({
  shareSafariWraper: {
    flexGrow: 1,
    backgroundColor: '#abc',
    margin: '10%',
    paddingTop: '10px'

  },
  pageTitle: {
    padding: '10px',
    textAlign: "center",
    color:' #fff',
    margin: '.5% 20% .5% 20%',
    background: '#bfd0df26',
    height: 'auto',
    boxShadow: '0px 15px 10px -15px #111',
    right: '20%'
  },
  shareSafariTitle: {
    padding: '10px',
    textAlign: "center",
    color:' #fff'

  },

  shareShareDate: {
    padding: '10px',
    textAlign: "center",
    color:' #fff'
  },
  shortIntroPage: {
    padding: '10px',
    textAlign: "center",
    color:' #fff',
    position: 'relative',
    margin: '1% 20% 1% 20%',
    background: '#f6ecec14',
  },
  createTextField: {
    color:' #000',
    position: 'relative',
    background: '#f6f1f19e',
    left: '-2rem'
  },
  checkBoxWrap: {
    padding: '10px',
    textAlign: "center",
    color:' #fff',
    position: 'relative',
    margin: '1% 20% 1% 20%',
    background: '#f6ecec14',
  },
  
  shareButtonWrap: {
    padding: '10px',
    textAlign: "center",
    color:' #fff',
    position: 'relative',
    margin: '1% 20% 1% 20%',
    background: '#f6ecec14',
    height: '40px',
  },
  shareButton: {
    margin: '2em',
    boxShadow: '0px 15px 10px -15px #111',
    bottom: '2.2rem',
    margin: '2em',
    background: '#22181854',
    width: '300px',
    height: '50px',
    position: 'relative',
    textAlign: 'center',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    left: '26%',

  },
}));

 
const ShareSafariPage = () => {
  const classes = useStyles();

  return (

    <>

    <div className={classes.shareSafariWraper}>
      <Grid  container direction="row" justify="center"alignItems="center"  item className={classes.shareSafariPage} xm={12}>
        <Grid item xs={12}>
          <div className={classes.pageTitle}> yo safari summary</div>
          <div className={classes.shareSafariTitle}> Titles : activities</div>
          <div className={classes.shareShareDate}>dates of travel:</div>
          <Paper className={classes.shortIntroPage}>
                   <Typography className={classes.dateFontState} variant="p1" gutterBottom >
                       <TextareaAutosize   className={classes.createTextField}
                        rowsMax={4}
                        aria-label="maximum height"
                         placeholder="Maximum 4 rows"
                         defaultValue="
                            can be something like, ...... hi i would like to have some
                            passionate trallers to share with me my safari plans, i am a
                            flexible traveller and open to any changes as alongs it fits or
                            plays well with my budget and time frame :)  "
                    />
                  </Typography>
                  </Paper>
                  <Paper className={classes.checkBoxWrap}>
                         <CheckBoxCustom/>
                   </Paper>
                    <Paper className={classes.shareButtonWrap}>
                      <Button  variant="contained" color="primary" className={classes.shareButton} >
                        share your safari with others
                     </Button>
                </Paper>
        </Grid>
      </Grid>
    </div>
    </>
  );
}

export default ShareSafariPage;
