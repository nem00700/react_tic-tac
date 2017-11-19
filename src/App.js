import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import VsPerson from "./components/VsPerson";
import VsComputer from "./components/VsComputer";
import Menu from './components/Menu';


class App extends Component {
  render() {
    return  <Router>
      <Switch>
          <Route exact path="/" component={Menu} />
          <Route path="/1vs1" component={VsPerson} />
          <Route path="/vscomputer" component={VsComputer} />
      </Switch>
    </Router> 
  }
}

export default App;
