import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import SelectDate from '../../pages/SelectDate';

const useStyles = makeStyles((theme) => ({
    formWrap: {
    // '& .MuiTextField-root': {
    //   width: '25ch',
    // },
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(1),
  },
 
  allSafariCost: {
    whiteSpace: 'nowrap',
  },
  divider: {
    margin: theme.spacing(1, 0),
  },
}));


  const  SafariBuget = ()  => {
  const classes = useStyles();

  return (
     <>
        <Grid  container direction="row" justify="center"alignItems="center" 
             item className={classes.CreateSafariWraper0} xm={12}>
            <Grid container spacing={1}>
              <Grid item xs={12}>

              <form className={classes.formWrap} noValidate autoComplete="off">
                  <div style={{ gridColumnEnd: 'span 3' }}>
                  <SelectDate/> 
                  <Divider className={classes.divider} />
                   <Paper className={classes.allSafariCost}>
                  Per day cost : <TextField className={classes.allSafariInputOne}
                           id="standard-number"
                           label="from"
                                   type="number"
                        InputLabelProps={{
                       shrink: true,
                    }}
                  />
                  <TextField  className={classes.allSafariInputOne}
                           id="standard-number"
                           label="to"
                                   type="number"
                        InputLabelProps={{
                       shrink: true,
                    }}
                  />
                  <div>
                  all safari cost :  <TextField className={classes.allSafariInputOne}
                           id="standard-number"
                           label="minimum"
                                   type="number"
                        InputLabelProps={{
                       shrink: true,
                    }}
                  />
                  <TextField className={classes.allSafariInputOne}
                           id="standard-number"
                           label="maximun cost"
                                   type="number"
                        InputLabelProps={{
                       shrink: true,
                    }}
                  />
                  </div>
                
                    </Paper>
                   </div>

                </form>
                </Grid>
            </Grid>
        </Grid>
     </>
  );
}
export default SafariBuget;

