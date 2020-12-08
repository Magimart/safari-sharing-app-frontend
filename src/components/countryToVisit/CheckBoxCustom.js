import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';



  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      display: 'flex'
    },
    paper: {
      padding: '0',
      display: 'flex'
    },
  }));




const  CheckBoxCustom = ()  => {

    const classes = useStyles();


  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>

<div className={classes.root}>

      <Grid container spacing={3}>

      <Grid item xs={12}>
          <Paper className={classes.checked}>

                     <Typography variant="h6" gutterBottom>
                           who is suits your travel preference?
                       </Typography>

                   <Divider light />

                   <Paper className={classes.paper}>

                      <Typography variant="h6" gutterBottom>
                         sex
                       </Typography>
                       <Typography variant="body1" gutterBottom>
                          female
                       </Typography>
                       <Checkbox
                        defaultChecked
                              color="default"
                                  inputProps={{ 'aria-label': 'checkbox with default color' }}
                       />
                        <Typography variant="body1" gutterBottom>
                                 male
                        </Typography>
                         <Checkbox
                         defaultChecked
                           color="default"
                          inputProps={{ 'aria-label': 'checkbox with default color' }}
                        />
                        <Typography variant="body1"  gutterBottom>
                                        does not matter
                        </Typography>
                    </Paper>
                    <Divider light />
                    <Paper className={classes.paper}>
                      <Typography variant="h6" gutterBottom>
                         sex
                       </Typography>
                       <Typography variant="body1" gutterBottom>
                          female
                       </Typography>
                       <Checkbox
                        defaultChecked
                              color="default"
                                  inputProps={{ 'aria-label': 'checkbox with default color' }}
                       />
                        <Typography variant="body1" gutterBottom>
                                 male
                        </Typography>
                         <Checkbox
                         defaultChecked
                           color="default"
                          inputProps={{ 'aria-label': 'checkbox with default color' }}
                        />
                        <Typography variant="body1"  gutterBottom>
                                        does not matter
                        </Typography>
                    </Paper>
                    <Divider light />
                    <Paper className={classes.paper}>
                      <Typography variant="h6" gutterBottom>
                         sex
                       </Typography>
                       <Typography variant="body1" gutterBottom>
                          female
                       </Typography>
                       <Checkbox
                        defaultChecked
                              color="default"
                                  inputProps={{ 'aria-label': 'checkbox with default color' }}
                       />
                        <Typography variant="body1" gutterBottom>
                                 male
                        </Typography>
                         <Checkbox
                         defaultChecked
                           color="default"
                          inputProps={{ 'aria-label': 'checkbox with default color' }}
                        />
                        <Typography variant="body1"  gutterBottom>
                                        does not matter
                        </Typography>
                    </Paper>
                    <Divider light />
                    <Paper className={classes.paper}>
                      <Typography variant="h6" gutterBottom>
                         sex
                       </Typography>
                       <Typography variant="body1" gutterBottom>
                          female
                       </Typography>
                       <Checkbox
                        defaultChecked
                              color="default"
                                  inputProps={{ 'aria-label': 'checkbox with default color' }}
                       />
                        <Typography variant="body1" gutterBottom>
                                 male
                        </Typography>
                         <Checkbox
                         defaultChecked
                           color="default"
                          inputProps={{ 'aria-label': 'checkbox with default color' }}
                        />
                        <Typography variant="body1"  gutterBottom>
                                        does not matter
                        </Typography>
                    </Paper>
                    <Divider light />

              </Paper>


           </Grid> 
      </Grid>

    </div>
      

            
      
    </>
  );
}


export default CheckBoxCustom;
