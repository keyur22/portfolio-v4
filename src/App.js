import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import About from './components/About/About';
import Project from './components/Project/Project';
import Skills from './components/Skills/Skills';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Project} />
        <Route exact path="/skills" component={Skills} />
      </Switch>
    </Router>
  );
};

export default App;