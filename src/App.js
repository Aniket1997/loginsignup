import logo from './logo.svg';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import LogIn from './Login';
import SignUp from './SignUp';
import Home from './Home';
import Profile from './Profile';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SignUp/> } />
          
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
          
      </Routes>
    </Router>

  );
}

export default App;
