import './App.css';
import Home from './site/Home/Home';
import Login from './site/Auth/Login/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';

function App() {

  const user = localStorage.getItem('user');
  return (
  
   
      <Router>

        <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Home />
            </Route>
        </Switch>

   
        <Route>
          { user ? <Redirect to="/" /> : <Redirect to="/login" /> }
        </Route>

      </Router>
          
        
  );
}

export default App;
