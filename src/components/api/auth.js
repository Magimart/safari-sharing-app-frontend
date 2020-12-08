

// lets make a request to sign up the user in the backend


export const signup = user => {

    console.log(user)
    return fetch(`http://localhost:8000/api/auth/signup`, {
        method: 'POST',
        headers: {
            
                     'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(response => {
            return response.json();
        })
     .catch(err => console.log(err));
};




// export const signin = user => {
//     return fetch(`${ }/signin`, {
//         method: 'POST',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(user)
//     })
//         .then(response => {
//             return response.json();
//         })
//         .catch(err => console.log(err));
// };



//----------------with cookie--------112 lines-------------------

// //  {'Content-Type':'application/x-www-form-urlencoded'}


// import fetch from 'isomorphic-fetch';

// export const signup = user => {

//     // error
//     return fetch(`${API}/signup`, {                                                    //errType-- POST http://localhost:8000/api/signup net::ERR_FAILED
//         method: 'POST',
//         headers:      {    Accept: 'application/json',
//                          'Content-Type': 'application/json'
//                           } ,
//         body: JSON.stringify(user)
//     }).then(response => {
//             //console.log(response);            
//          return response.json();
//         })
//         .catch(error => console.log(error + ''+ 'looking 4 the err'));
// };

//     //Access-Control-Allow-Origin: http://localhost:3000
//     // {    Accept: 'application/json',
//     //      'Content-Type': 'application/json'
//     // }
//     //{'Content-Type':'application/x-www-form-urlencoded'} ---option1--


// export const signin = user => {

//     return fetch(`${API}/signin`, {
//         method: 'POST',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(user)
//     })
//         .then(response => {
//             return response.json();
//         })
//         .catch(err => console.log(err));
// };

// export const signout = next => {
//     removeCookie('token');
//     removeLocalStorage('user');
//     next();

//     return fetch(`${API}/signout`, {
//         method: 'GET'
//     })
//         .then(response => {
//             console.log('signout success');
//         })
//         .catch(err => console.log(err));
// };

// // set cookie
// export const setCookie = (key, value) => {
//     if (process.browser) {
//         cookie.set(key, value, {
//             expires: 1
//         });
//     }
// };

// export const removeCookie = key => {
//     if (process.browser) {
//         cookie.remove(key, {
//             expires: 1
//         });
//     }
// };
// // get cookie
// export const getCookie = key => {
//     if (process.browser) {
//         return cookie.get(key);
//     }
// };
// // localstorage
// export const setLocalStorage = (key, value) => {
//     if (process.browser) {
//         localStorage.setItem(key, JSON.stringify(value));
//     }
// };

// export const removeLocalStorage = key => {
//     if (process.browser) {
//         localStorage.removeItem(key);
//     }
// };
// // autheticate user by pass data to cookie and localstorage
// export const authenticate = (data, next) => {
//     setCookie('token', data.token);
//     setLocalStorage('user', data.user);
//     next();
// };

// export const isAuth = () => {
//     if (process.browser) {
//         const cookieChecked = getCookie('token');
//         if (cookieChecked) {
//             if (localStorage.getItem('user')) {
//                 return JSON.parse(localStorage.getItem('user'));
//             } else {
//                 return false;
//             }
//         }
//     }
// };

// export const updateUser = (user, next) => {
//     if (process.browser) {
//         if (localStorage.getItem('user')) {
//             let auth = JSON.parse(localStorage.getItem('user'));
//             auth = user;
//             localStorage.setItem('user', JSON.stringify(auth));
//             next();
//         }
//     }
// };




//----1st test failed

// export const signup = user => {

              
//             return fetch(`${API}/signup`, {
//                                           method: 'POST',
//                                           headers: {
//                                                   Accept: 'application/json',
//                                                  'Content-Type': 'application/json'
//                                              },
//                                              body: JSON.stringify(user)
//                                       } )

//                     .then(response => { return response.json(); })
//                     .catch(err => console.log(err));               //---error!Failed to fetch!

// };




