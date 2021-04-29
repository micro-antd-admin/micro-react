import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './views/home';
import AboutPage from './views/about';
import TestPage from './views/test';

function App() {
  return (
  <Router basename={window.__POWERED_BY_QIANKUN__ ? '/micro-react' : '/'}>
    <div className="App">
    <img src={logo} className="App-logo" alt="logo" />
     
          <Link to="/home" className="App-link">Home</Link>
      
          <Link to="/about" className="App-link">About</Link>
      
          <Link to="/test" className="App-link">Test</Link>

      <hr />

      {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
      <Switch>
        <Route exact path="/home">
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/test">
          <TestPage />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
