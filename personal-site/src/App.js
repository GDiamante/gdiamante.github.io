import './App.css';
import React , { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import MenuBar from './Components/MenuBar';
import BasePage from './Components/BasePage';

const HOME_ROUTE = '/'

function App() {
  return (
    <Router>
      <div className="App">
      <Route component={MenuBar}/>
        <Switch>
          <Route exact path="/">
            <BasePage title='Home'/>
          </Route>
          <Route exact path="/about">
            <BasePage title='About'/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}


export default App;
