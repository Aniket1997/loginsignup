import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { app } from './FirebaseConfig';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Link } from 'react-router-dom';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [displayName, setDisplayName] = useState(null);
  const [displayNameErrorMassage,setDisplayNameErrorMassage] = useState('');
  const [invalidEmail,setInvalidEmail] =useState('');
  const [missingPassWord,setMissingPassword] =useState('');
  const [strongPassword,setStrongPassword] = useState('');

  const handleSignUp = () => {
    let isValid = true;
    if (!username) {
      setDisplayNameErrorMassage("Please enter a username");
      isValid = false;
    }
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setInvalidEmail("Please enter a valid email address");
      isValid = false;
    }
    if (!password || password.length < 6) {
      setMissingPassword("Please enter a password with at least 6 characters");
      isValid = false;
    }
    if (!confPassword || password !== confPassword) {
      setStrongPassword("Please confirm your password");
      isValid = false;
    }
    if (isValid) {
      const auth = getAuth(app);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // User created successfully
          console.log(userCredential.user);
          // Update user display name
          updateProfile(auth.currentUser, { displayName: username })
            .then(() => {
              console.log("Display name updated successfully");
              setDisplayName(username);
            })
            .catch((error) => {
              console.error("Error updating display name:", error);
            });
        })
        .catch((error) => {
          // Error creating user
          if (error.code === "auth/email-already-in-use") {
            setErrorMessage("Email already in use");
          } else if (error.code === "auth/invalid-email") {
            setInvalidEmail("Invalid email address");
          } else if (error.code === "auth/missing-password") {
            setMissingPassword("Please enter a password");
          } else if (error.code === "auth/weak-password") {
            setStrongPassword("Please enter a stronger password");
          } else {
            console.error(error);
          }
        });
    }
  };
  

  return (
    <>
      <div className="App" style={{marginTop: "200px"}}>
        <img src={logo} alt="Logo" />
        <h2>Please SignUp</h2>
        <label className='labels'>Username<span style={{color:'red'}}>*</span></label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
    {displayNameErrorMassage && <p style={{color: "red"}}>{displayNameErrorMassage}</p>}
         <label className='labels' style={{right:"138px"}}>Email<span style={{color:'red'}}>*</span></label>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
          {invalidEmail && <p style={{color: "red"}}>{invalidEmail}</p>}
         <label className='labels'>Password<span style={{color:'red'}}>*</span></label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
         {missingPassWord && <p style={{color: "red"}}>{missingPassWord}</p>}
         <label className='labels' style={{right:"95px"}}>Confirm Password<span style={{color:'red'}}>*</span></label>
        <input
          type="password"
          name="conf_password"
          placeholder="Confirm password"
          value={confPassword}
          onChange={(e) => setConfPassword(e.target.value)}
        />
        {strongPassword && <p style={{color: "red"}}>{strongPassword}</p>}
        <button onClick={handleSignUp}>Submit</button>
        {errorMessage && (
          <p>
            {errorMessage} <Link to="/login"> please click here to login </Link>
          </p>
        )}
        {displayName && <p>Welcome, {displayName}!</p>}
        <p>Already have an account? <a href="/login">Click here to log in.</a></p>
      </div>
    </>
  );
}

export default SignUp;
