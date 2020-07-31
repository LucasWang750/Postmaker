import React from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import Create from './Create';
import Auto from "./Auto/Auto.js";
import Manual from "./Manual";
import Templates from './Templates';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App"> 
        <Nav />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/create" component={Create} />
          <Route path="/templates" component={Templates} />
          <Route path="/auto" component={Auto} />
          <Route path="/manual" component={Manual} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;