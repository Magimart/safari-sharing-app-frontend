
import React, { useState } from 'react';
// import {signup} from '../../apiActions/auth';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { signup } from './api/auth';



const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', 
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));



const SignupComponent = ({setUser, setToken}) => {

    const classes = useStyles();

  
        const [values, setValues] = useState({
                                         name: '',
                                         email: '',
                                         hashed_password: '',
                                         error: '',
                                         loading: false,
                                         message: '',
                                         showForm: true
        });

    
                const {name, email, hashed_password, profile, error, loading, message, showForm} = values;
                const handleSubmit =  e => {

                              e.preventDefault();
//                                                                                           console.table({ name, email, password, error, loading, message, showForm });
//                                                                                              create new user and if user is created .then() pass data to resetValues to clear strings in the form
                const user = {name, email, password:hashed_password, profile};

                signup(user)
                .then(({token, user})=> {
                  localStorage.setItem('token', token);
                  setUser(user);
                  setToken(token);
                })

              }





              const handleChange = name => e => {
                    setValues({ ...values, error: false, [name]: e.target.value });
                 };
                 const signupForm = () => {

    return (

            <>
                           
                <form className={classes.form} onSubmit={handleSubmit}>
                <div className="form-group">
                   <input
                       value={name}
                         onChange={handleChange('name')}
                          type="text"
                        className="form-control"
                      placeholder="Type your name"
                    />
                  </div>
                  <div className="form-group">
                         <input
                            value={email}
                             onChange={handleChange('email')}
                              type="email"
                             className="form-control"
                               placeholder="Type your email"
                          />
                  </div>
                  <div className="form-group">
                          <input
                              value={hashed_password}
                                   onChange={handleChange('hashed_password')}
                                 type="password"
                              className="form-control"
                              placeholder="Type your password"
                            />
                  </div>

                  <Grid item xs={12}>
                           <FormControlLabel
                              control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                    </Grid>
                     <Button
                          type="submit"
                             fullWidth
                             variant="contained"
                             color="primary"
                           className={classes.submit}
                       >
                              Sign Up
                       </Button>
                       <Grid container justify="flex-end">
                            <Grid item>
                               <Link href="#" variant="body2">
                                        Sign and hookup with thousands of safari sharing travelers? Sign in
                                </Link>
                              </Grid>
                        </Grid>
                </form>

                            </>
                            );
                        };
            
           
                return (
        
        
                     <React.Fragment>
                        <div><h1>Signup Page</h1></div>

                           {signupForm()}

                     </React.Fragment>
        
                )
};
 
export default SignupComponent;




// <form onSubmit={handleSubmit}>
// <div className="form-group">
//       <input
//         value={name}
//         onChange={handleChange('name')}
//         type="text"
//         className="form-control"
//         placeholder="Type your name"
//      />
// </div>

// <div className="form-group">
//     <input
//        value={email}
//        onChange={handleChange('email')}
//        type="email"
//        className="form-control"
//        placeholder="Type your email"
//     />
//  </div>

// <div className="form-group">
//      <input
//        value={password}
//        onChange={handleChange('password')}
//        type="password"
//        className="form-control"
//        placeholder="Type your password"
//     />
// </div>

// <div>
//      <button className="btn btn-primary">Signup</button>
// </div>
// </form>