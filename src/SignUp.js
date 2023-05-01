import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { app } from './FirebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import  {Link} from 'react-router-dom';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const handleSignUp = () => {
    if (password === confPassword) {
      const auth = getAuth(app);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // User created successfully
          console.log(userCredential.user);
        })
        .catch((error) => {
          // Error creating user
          if (error.code === "auth/email-already-in-use") {
            setErrorMessage("Email already in use");
          } else {
            console.error(error);
          }
        });
    } else {
      // Passwords don't match
      console.error('Passwords do not match');
    }
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
        <input
          type="password"
          name="conf_password"
          placeholder="Confirm password"
          value={confPassword}
          onChange={(e) => setConfPassword(e.target.value)}
        />
        <button onClick={handleSignUp}>Submit</button>
        {errorMessage && <p>{errorMessage} <a href="/login"> please click here to login </a></p>}
      </div>
    </>
  );
}

export default SignUp;
