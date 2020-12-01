import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
    pageWrap: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#abc'
  },
}));

function HomePage() {
  
 const classes = useStyles()




    return (
      <div className="App">
        <main className="App-header">
         <div className={classes.root}>

            <Container maxWidth="sm">
                  <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
              </Container>

         </div>
        </main>
    </div>
    );
  }
  
  export default HomePage;












  