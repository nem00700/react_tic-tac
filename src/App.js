import React, { Component } from 'react';
import './App.css';
import VsComputer from './components/VsComputer';
import VsPerson from './components/VsPerson';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';



class App extends Component {
  render() {
    return <Router>
      <div>
        
        <button><Link to="/1vs1">1 vs 1</Link></button>
        <button><Link to="/vscomputer">1 vs Computer</Link></button>

        <Route path="/1vs1" component={VsPerson}/>
        <Route path="/vscomputer" component={VsComputer}/>
      </div>
    </Router>;
  }
}

export default App;
