import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import LogIn from './Login';
import SignUp from './SignUp';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SignUp />
        </Route>
        <Route path="/login">
          <LogIn />
        </Route>
     
      </Switch>
    </Router>

  );
}

export default App;
