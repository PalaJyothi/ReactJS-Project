import React from 'react';
import './Register.css';

class Register extends React.Component {
    render() {
  return (
    <div className="Register" >
      
      <div className="Board" >Data Dash</div>
      <div className="RegisterTitle" >Register</div>
        <div className="RegisterForAnAccount" >Register for an account</div>
      
        {/* ... */}
        <div className="RegisterForm">
          
          <label className="EmailAddress" htmlFor="email">Email address</label>
          <input className="InputField" type="email" id="email" name="email" placeholder="YourEmail@gmail.com" />
          <label className="Password" htmlFor="password">Password</label>
          <input className="Input" type="password" id="password" name="password" placeholder="••••••••" />
          <label className="ConfirmPassword" htmlFor="confirmPassword">Confirm Password</label>
          <input className="Input" type="password" id="confirmPassword" name="confirmPassword" placeholder="••••••••" />
          <button className="ButtonRegister" type="submit">Register</button>
        </div>
        {/* ... */}
        <div className="HaveAnAccountSignInHere" >
			    <span >Already have an account? </span>
			    <span >Sign In here</span>
		    </div>
        {/* ... */}
        
    </div>
  );
    }
}

export default Register;