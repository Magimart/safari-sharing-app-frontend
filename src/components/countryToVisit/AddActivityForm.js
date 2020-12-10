import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import chroma from 'chroma-js';
import Select from 'react-select';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
// import optionsArray from './data';
import { activityOptions } from './data';


const useStyles = makeStyles((theme) => ({
  activityCointerWrapper: {
    flexGrow: 1,
    textAlign: 'center',
    color: 'none',
    padding: '50px',
    position: "relative",
  },

  addActivityWrapper: {

    width: '40%',
    position: 'relative',
    left: '26%',
    maxWidth: '50%',
    position: 'relative',
    display: 'block',
    left: '26%',
    padding: '50px 50px 85px 50px',
    marginLeft: '8px',
    marginRight: '8px',
    background: 'radial-gradient(#2b4911, transparent)',
    boxShadow: '0px 15px 10px -15px #111',

  },
  addActivityWrapper0: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '40%',
    position: 'relative',
    left: '30%',
    top: '15em',
    backgroundColor: '#174317bf'
  },

  AddButtonWrapper: {
    // background: 'radial-gradient(black, transparent)',
    background: 'radial-gradient(#28971485, transparent)',
    position: 'relative',
    top: '.1rem',
    textAlign: 'center',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: '200px',
    left: '40%',
    right: 'auto',
    top: '-4em',
    height: '65px',
    left: '40%'
  },

}));

const WhiteTextTypography = withStyles({
  root: {
    color: '#b6b38ec9',
    fontSize: '1em',
    textTransform: 'capitalize',
    margin: '.1em',

  }
})(Typography);

const AddActivityForm = (props) => {

  const classes = useStyles();

  const handleClick = () => {
    nextPage();
  }

  return (
    <>
      <div className={classes.activityCointerWrapper}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.addActivityWrapper}>
              <Select className={classes.addActivityWrapper0}
                defaultValue={[activityOptions[2], activityOptions[3]]}
                isMulti
                name="colors"
                options={activityOptions}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(e) => console.log(e)}
              />
            </Paper>
            <Paper className={classes.AddButtonWrapper}>
              <Button onClick={handleClick} variant="outlined" size="large" color="#fff" >
                <WhiteTextTypography>
                  select your activities
                 </WhiteTextTypography>
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>

  )
}


export default AddActivityForm
