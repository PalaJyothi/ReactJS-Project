import React from 'react';
// import {  useHistory } from 'react-router-dom';
import DashBoard from './DashBoard';
// import Signin from './Signin';
import { useGoogleLogin, googleLogout } from '@react-oauth/google';
import axios from 'axios';

import { useState, useEffect } from 'react';




function App() {
  const [ user, setUser ] = useState([]);
  const [ profile, setProfile ] = useState([]);
  
  const login = useGoogleLogin({
      onSuccess: (codeResponse) => setUser(codeResponse),
      
      onError: (error) => console.log('Login Failed:', error)
  });

  useEffect(
      () => {
          if (user) {
              axios
                  .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                      headers: {
                          Authorization: `Bearer ${user.access_token}`,
                          Accept: 'application/json'
                      }
                  })
                  .then((res) => {
                      setProfile(res.data);
                  })
                  .catch((err) => console.log(err));
          }
      },
      [ user ]
  );

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
      googleLogout();
      setProfile(null);
  };

  return (
      
      <div className='S'>
          <h2>Data Dash Login</h2>
          
        
          {profile ? (
              <div>
                 
                  <button onClick={logOut} >Log out</button>
                  <DashBoard/>
              </div>
          ) : (
              <button onClick={() => login()}>Sign in with Google 🚀 </button>
          )}
      </div>
  );
}
export default App;