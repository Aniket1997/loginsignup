import React from 'react';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import LogIn from './Login';
import SignUp from './SignUp';
import Home from './Home';
import Profile from './Profile';
import WrappedLoginSignUp from './Navbar';
import AddCategories from './Components/Admin/AppBar/AddCategories';
import AddBrands from './Components/Admin/AppBar/AddBrands';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SignUp/> } />
          
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path='/navbar' element={<WrappedLoginSignUp/>}/>
        <Route path='/addCategory' element={<AddCategories/>}/>
        <Route path='/addBrands' element={<AddBrands/>}/>
      </Routes>
    </Router>

  );
}

export default App;
