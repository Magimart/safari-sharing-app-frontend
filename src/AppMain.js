
import React, { useState, useEffect } from 'react'
import { Switch, Route } from "react-router-dom";
import { Button } from "@material-ui/core";
import AddCountryPage from "./pages/AddCountryPage";
import HomePage from "./pages/HomePage";
// import AddActivityPage from "./components/pages/AddActivityPage";
import ProfilePage from "./pages/ProfilePage";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";
import NavBar from "./Headers/Navbar";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'
import SignUpPage from "./pages/SignUpPage";
import AddActivityForm from "./components/countryToVisit/AddActivityForm";
import CreateSafari from './pages/CreateSafari';
import SharedSafaris from './pages/SharedSafaris';

const  AppMain = () => {

     
	const [countries, setCountries] = useState([]);
	const [token, setToken] = useState();
	const [user, setUser] = useState();
	const [loading, setLoading] = useState(false);
	const [activity, setActivity] = useState([]);


	useEffect(()=>{
        
	    fetch('http://localhost:8000/api/countries/getAll')
	     .then(res => res.json())
	     .then(data => {
				 setCountries(data); 
				 console.log(data);
			 })
	    .catch(e => console.log(e))

	 }, [ ]);
	console.log(countries)


	useEffect(()=>{
        console.log("hi")
	    fetch('http://localhost:8000/api/countries/getAll')
	   .then(res => res.json())
	    // .then(data => setCountry(data))

	 }, [ ]);


// 	 const [activities, setActivities] = useState([]);

// 	     useEffect(()=>{
 
// 		fetch('http://localhost:8000/api/activities/getAll')
// 		.then(res => res.json())
// 		.then(data => console.log(data))
// 	    .then(data => setActivities(data))
// 	     }, [ ]);	 
//      console.log(activities);


	
    return (
	  <>
	  
        <div className="App">
			<Switch>
                {/* <Navbar/>
				<Route
					path="/Profile/:id"
					render={(props) => (
						<ProfilePage/>
					)}
				/>
				<Route
					path="/signin"
					render={(props) => (
						<SignIn/>
					)}
				/>*/}
				 <Route
					path="/signout"
					render={(props) => (
						<SignOut/>
					)}
				/>
				<Route 
				   path="/singup" render={(props) => <SignUpPage setUser={setUser}  setToken={setToken} {...props}/>  }
				/>

				<Route
					path="/share-safari"
					render={(props) => <SharedSafaris countries={countries} {...props}/> }
				/>
				<Route
					path="/create-safari"
					render={(props) => <CreateSafari countries={countries} {...props}/> }
				/>
				{/* <Route
					path="/activity"
					render={(props) => <AddActivitypage countries={country} {...props}/> }
				/> */}

			
				<Route
					path="/country/:id" render={(props) => <AddActivityForm  countries={countries} {...props}/> }
				/> 
				<Route 
				   path="/" render={(props) => <AddCountryPage countries={countries} {...props}/>  }
				/>
			</Switch>
		</div>

	  </>
  )

}
export default AppMain;
















