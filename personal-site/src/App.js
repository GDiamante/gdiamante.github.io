import './Styles/App.css';
import React , { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Menu from './Components/Menu';
import About from './Components/About';
import Projects from './Components/Projects';
import Resume from './Components/Resume';

const HOME_ROUTE = '/'

function App() {
  document.body.style = 'background: #303030;';
  return (
    <Router>
      <div className="App">
      <Route component={Menu}/>
        <Switch>
          <Route exact path="/" />
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
