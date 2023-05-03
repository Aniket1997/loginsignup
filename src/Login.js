import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { app } from './FirebaseConfig';
import { getAuth, updateProfile, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [resetPasswordSuccess, setResetPasswordSuccess] = useState(false);
  const [displayName, setDisplayName] = useState(null);
  const [invalidEmail,setInvalidEmail] = useState('');
  const [errors, setErrors] = useState({});
  const validate = () => {
    let errors = {};
    if (!email) {
      errors.email = "Please enter your email.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!password) {
      errors.password = "Please enter your password.";
    }
    return errors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      // submit the form
      handleSignIn();
    }
  };
  
  const handleSignIn = () => {
    const auth = getAuth(app);
   
    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User signed in successfully
        const user = userCredential.user;
        console.log(user);
        if (user.displayName) {
          setDisplayName(user.displayName);
        }
      })
      .catch((error) => {
        // Error signing in user
        console.error(error);
        if(error.code === 'auth/invalid-email)')
        {
          setInvalidEmail("Please Enter your Email")
          console.log(invalidEmail)
        }
        setErrorMessage("Wrong Password"); 
        // set the error message state variable
      });
    
    setEmail('');
    setPassword('');
  };

  const handleForgotPassword = () => {
    const auth = getAuth(app);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent successfully
        setResetPasswordSuccess(true);
      })
      .catch((error) => {
        // Error sending password reset email
        console.error(error);
        setErrorMessage("Unable to send password reset email"); 
        // set the error message state variable
      });
  };

  return (
    <>
      <div className="App" >
        <img src={logo} alt="Logo" />
        <h2>Please Login</h2>
        <label className='labels'style={{right:"139px"}}>Email<span style={{color:"red"}}>*</span></label>
<input
  type="text"
  name="email"
  placeholder="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
{errors.email && <p>{errors.email}</p>}
<br/>
<label className='labels'>Password<span style={{color:"red"}}>*</span></label>
<input
  type="password"
  name="password"
  placeholder="Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>
{errors.password && <p>{errors.password}</p>}
<br/>
<button onClick={handleSubmit}>Sign In</button>
        {resetPasswordSuccess ? (
          <p>Password reset email sent successfully. Please check your inbox.</p>
        ) : (
          <>
            {errorMessage && <p>{errorMessage} <Link to="/login"> please click here to login </Link></p>}
            <p><Link to="#" onClick={handleForgotPassword}>Forgot Password?</Link></p>
          </>
        )}
        {displayName && <p>Welcome, {displayName}!</p>}
        <p>Don't have an account? <a href="/">Sign up here</a>.</p>
      </div>
    </>
  );
}

export default LogIn;
