import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Select from 'react-select'
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import React, { useState , useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  



const useStyles = makeStyles(( theme) => ({
  selectCounterWrapper: {
    flexGrow: 1,
    padding: '16px',
    textAlign: 'center',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

  },
  selectWrap: {
    padding: theme.spacing(2),
    textAlign: 'center',
      color: '#000',
      padding: '0',
      margin: '30%',
      padding: '30px',
      background: 'radial-gradient(#2b4911, transparent)',
      boxShadow: '0px 15px 10px -15px #111',
      },
 
  makeStylesPaper : {
    padding: '16px',
    textAlign: 'center',
    position: 'absolute'
},
margin: {
  margin: theme.spacing(1),
},

AddButtonWrapper : {
  width: '200px',
  position: 'relative',
  margin: 'auto',
  top: '1em',
  background: 'radial-gradient(#2b4911, transparent)',

},
}));


const WhiteTextTypography = withStyles({
  root: {
    color: '#fff',
    fontSize: '1em',
    textTransform: 'capitalize',
    margin: '.1em',

  }
})(Typography);

const countryLists = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]




const AddCountryForm = () =>{
  
  const classes = useStyles();

  return (
    <>
      
    <div className={classes.selectCounterWrapper}>
      <Grid container className={classes.divWrapper} spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.selectWrap}>

             <Select options={countryLists}             
             />
             <Paper className={classes.AddButtonWrapper}>
               <Button variant="outlined" size="large" color="#fff" >
                 <WhiteTextTypography>
                     Add a country u wanna visit
                 </WhiteTextTypography>
                </Button>
            </Paper>
           </Paper>
        </Grid>
      </Grid>
    </div>
    </>
  );
}

export default  AddCountryForm






// const RecipeForm = ({recipes}) => {

 
//     const [formInputs, setFormInputs] = useState(
//                                               {
//                                                country: '',
//                                                                                              }
//                                               );


//     const [saveInputs, setSaveInputs] = useState('');

//   console.log(formInputs);

//       //----------------handling input fields------
//      const handleChange = (e) => {
                           
//                           setFormInputs({
//                             ...formInputs, [e.target.name]: e.target.value
//                           });
//       }

  
        
//         //-----------------Add or post db-_______________________________________  
//         const AddNewRecipe = async (e) =>  { 
           
//             e.preventDefault();

//           try { 
   
//                                                                            //---get all inputs ----
//             console.log(formInputs);
//                                                                             // const { country, recipeName, description, howtoprepare, ingredient} = formInputs;
//              console.log(formInputs.country);
//               const serverResponse = await fetch('http://localhost:5000/api/post-recipes', {
//               method: "POST",
//               headers: { "Content-Type": "application/json" },
//               body: JSON.stringify(formInputs)
//               }); 
//                console.log(serverResponse);

//               window.location = '/'; 

//             }catch(err) { 
//                  console.error(err.message);
//             }
//          } 
           
                                                                              
//        return ( 
           
//       <>
//          <section> 
//            <div className="container" id="form-wrap">
//             <form method="POST" action="http://localhost:3000/api/read-all-recipes" 
//                  onSubmit={AddNewRecipe} onChange={handleChange}>
//                <div  className="form-group">
//                    <label for="Country">Country: </label> <br/>
//                    <input type="text" id="country-of" name="country"/> <br/>
//                  <div  className="form-group">
//                     <label for="recipe">Recipe name: </label> <br/>
//                     <input type="text" id="recipe-name" name="name"/> <br/>  
//                   </div>
//                        <button className="button mb-2" type="submit" name="button" >Publish </button>
//                 </div> 
//               </form>
//             </div>      
//           </section>
//      </>
//       );
//      }
      
//      export default RecipeForm;







