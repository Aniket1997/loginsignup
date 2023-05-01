import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { app } from './FirebaseConfig';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignIn = () => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User signed in successfully
        console.log(userCredential.user);
      })
      .catch((error) => {
        // Error signing in user
        console.error(error);
        if(error){
        setErrorMessage("Wrong Password"); 
        }
        // set the error message state variable
      });
  };

  return (
    <>
      <div className="App">
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignIn}>Sign In</button>
         {errorMessage && <p>{errorMessage} <a href="/login"> please click here to login </a></p>} {/* conditionally render error message */}
      </div>
    </>
  );
}

export default Login;
