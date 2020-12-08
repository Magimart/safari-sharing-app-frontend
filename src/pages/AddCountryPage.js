
import { __RouterContext } from "react-router";
import { useTransition, animated } from "react-spring";
// import HomePageStyles from "../css/HomePageStyles.css";
import React, { useState, useCallback } from 'react'
import { Button } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import AddCountryForm from "../components/countryToVisit/AddcountryForm";
import AddActivityForm from "../components/countryToVisit/AddActivityForm";
import CreateSafari from "./CreateSafari";
import ShareSafariPage from "./ShareSafariPage";
import SharedSafaris from "./SharedSafaris";
import Background from '../images/safari.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import addCountryPage from "../css/addCountryPage.css";
import '../App.css';
import ProfilePage from "./ProfilePage";
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import zIndex from "@material-ui/core/styles/zIndex";
import SignUpPage from "./SignUpPage";
// import SignUpPage from "./SignUpPage";


const useStyles = makeStyles((theme) => ({
  containerWrapper: {
    flexGrow: 1,
    background: 'linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)'
  },
  
  buttonNextWrapCountry: {
    // background: 'radial-gradient(black, transparent)',
    background: 'radial-gradient(#28971485, transparent)',
    position: 'relative',
    top: '.1rem',
    textAlign: 'center',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center', 
  },

   buttonNextWrap : {
      color: '#fff',
      fontSize: '1em',
      textTransform: 'capitalize',
      right: '-39rem',
      zIndex: '0'
  },
  buttonLeftWrap : {
    color: '#fff',
    fontSize: '1em',
    textTransform: 'capitalize',
    left: '-39rem'
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

const pages = [

  ({ style }) => <animated.div style={
      { ...style, background: 'radial-gradient(black, transparent)' }
        }>
        {/* <AddCountryForm/> */}
          {/* <SignUpPage/> */}
        </animated.div>,
  ({ style }) => <animated.div style={
       { ...style, background: 'radial-gradient(black, transparent)' 
       }}>
         <AddActivityForm/>
       </animated.div>,
  ({ style }) => <animated.div style={
       { ...style, background: 'linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)' 
      }}><CreateSafari/></animated.div>,
  ({ style }) => <animated.div style={
       { ...style,
         background: 'linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)'
       }}><ShareSafariPage/>
    </animated.div>,
      ({ style }) => <animated.div style={
        { ...style,
          background: 'linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)'
        }}>
        <ProfilePage/>
     </animated.div>,

           ({ style }) => <animated.div style={
            { ...style,
              background: 'linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)'
            }}>
            <SharedSafaris/>
         </animated.div>

]

const  AddCountryPage = ()  => { 
      const classes = useStyles();

       const getNextPage = () => { 
                 return console.log('going next')
       }
       const prevPage = getNextPage();

  const [index, set] = useState(0)
  const nextPage = useCallback(() => set(state => (state + 1) % 5), [])
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  return (
 
 	  <>
    <div className={classes.containerWrapper}>
       <Grid container spacing={3}>
          <Grid item xs={12}>
                 <Paper className={classes.divWrapper}>
                    {/* <div className="simple-trans-main" > */}
                         <div className="simple-trans-main" >
                            { transitions.map(({ item, props, key }) => {
                              const Page = pages[item]
                              return <Page key={key} style={props} />
                              })}
                            </div>
                          <Paper className={classes.buttonNextWrapCountry}>

                          <ButtonGroup  variant="text" color="primary" aria-label="text primary button group" >
                            <Button onClick={prevPage} className={classes.buttonLeftWrap}>
                                 <WhiteTextTypography>
                                    <Typography  gutterBottom>
                                       Prev
                                    </Typography>
                                </WhiteTextTypography>
                              </Button>
                            {/* <Button></Button> */}
                           <Button  className={classes.buttonNextWrap}
                           onClick={nextPage}>
                                 <WhiteTextTypography>
                                 <Typography  gutterBottom>
                                     Next
                                  </Typography>
                                </WhiteTextTypography>
                            </Button>
                        </ButtonGroup>
                  </Paper>
               </Paper>
          </Grid>
         </Grid>
       </div>
     	</>

  )
}

export default AddCountryPage;




