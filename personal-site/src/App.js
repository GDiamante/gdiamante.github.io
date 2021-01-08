import './App.css';
import React , { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Menu from './Components/Menu';
import BasePage from './Components/BasePage';
import About from './Components/About';

const HOME_ROUTE = '/'

function App() {
  document.body.style = 'background: #383838;';
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
            <BasePage title='Projects'/>
          </Route>
          <Route exact path="/resume">
            <BasePage title='Resume'/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
