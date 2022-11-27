import './App.css';
import AppContext from './context';
import AppNavbar from './Components/NavBar';
import Home from './pages/Home';
import {Route, BrouserRouter as Router, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
    <AppContext>
    <div className="Jumbo">
      <AppNavbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Home />
        </Route>
      </Switch>
    </div>
    </AppContext>
    </Router>
  );
}

export default App;