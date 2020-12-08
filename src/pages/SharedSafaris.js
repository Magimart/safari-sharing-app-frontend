
import React, { useState, useEffect } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Icon from '@material-ui/core/Icon';
import { render } from 'react-dom'
import { useTransition, animated } from 'react-spring'
import shuffle from 'lodash/shuffle'
// import data from './data'
import '../SharedSafaris.css'
import fake from './fake';


const useStyles = makeStyles((theme) => ({
  shareSafariWraper: {
    flexGrow: 1,
    backgroundColor: '#abc',
    margin: '10%',
    paddingTop: '10px',
    background: 'linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)'


  },
}));


const SharedSafaris = () => {

  const classes = useStyles();


  const [rows, set] = useState(fake)
  useEffect(() => void setInterval(() => set(shuffle), 2000), [])

  
  let height = 0

  const transitions = useTransition(
    rows.map(fake => ({ ...fake, y: (height += fake.height) - fake.height })),
    d => d.name,
    {
      from: { height: 0, opacity: 0 },
      leave: { height: 0, opacity: 0 },
      enter: ({ y, height }) => ({ y, height, opacity: 1 }),
      update: ({ y, height }) => ({ y, height })
    }
  )

  return (
    <div class="list" style={{ height }}>

      {transitions.map(({ item, props: { y, ...rest }, key }, index) => (
        <animated.div
          key={key}
          class="card"
          style={{ zIndex: fake.length - index, transform: y.interpolate(y => `translate3d(0,${y}px,0)`), ...rest }}>
          <div class="cell">
            <div class="details" style={{ backgroundImage: item.css }} />
          </div>
        </animated.div>
      ))}
    </div>
  )
}


export default  SharedSafaris;



// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
// dislay: "flex"
//   },
//   paper: {
//     dislay: "flex",
//     padding: theme.spacing(2),
//     textAlign: "center",
//     color: theme.palette.text.secondary
//   }
// }));



// const SharedSafaris = () => {

  
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Grid container spacing={3}>
//         <Grid item xs={12}>
//           <Paper className={classes.paper}>share by others</Paper>
//         </Grid>

//         <Grid item xs={12}>
//           <Paper className={classes.paper}>


//             can be something like," ...... hi i would like to have some
          
//           <Grid item xs={3}>
//              add profile
//              use profile upload
//              </Grid>

//             passionate trallers to share with me my safari plans, i am a
//             flexible traveller and open to any changes as alongs it fits or
//             plays well with my budget and time frame :) "
            
            
//             <Paper className={classes.paper}>
//               <Button
//         variant="contained"
//         color="primary"
//         className={classes.button}
//         endIcon={<Icon>send</Icon>}
//       >
//         Send
//       </Button>
//             </Paper>

//           </Paper>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }
// export default  SharedSafaris;
