import * as React from 'react';
import '../Home/Home.css';
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Navigation from '../Navigation/Navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="NavBar">
        <Navigation />
      </div>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App