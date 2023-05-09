import logo from './logo.svg';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import LogIn from './Login';
import SignUp from './SignUp';
import Home from './Home';
import Profile from './Profile';
import WrappedLoginSignUp from './Navbar';
import AddCategories from './Components/Admin/AppBar/AddCategories';
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
      </Routes>
    </Router>

  );
}

export default App;
