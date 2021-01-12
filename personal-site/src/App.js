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
const ABOUT_ROUTE = '/about'
const PROJECTS_ROUTE = '/projects'
const RESUME_ROUTE = '/resume'

function App(props) {
  document.body.style = 'background: #303030; height: inherit;';
  return (
    <Router>
      <div className="App">
      <Route component={Menu}/>
        <Switch>
          <Route exact path={HOME_ROUTE} />
          <Route exact path={ABOUT_ROUTE}>
            <About />
          </Route>
          <Route exact path={PROJECTS_ROUTE}>
            <Projects />
          </Route>
          <Route exact path={RESUME_ROUTE}>
            <Resume />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
