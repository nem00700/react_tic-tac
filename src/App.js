import React, { Component } from 'react';
import './App.css';
import GameField from './components/GameField';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return <Router>
      <div>
        <button><Link to="/1vs1">1 vs 1</Link></button>
        <button><Link to="/vscomputer">1 vs Computer</Link></button>
        
        <Route path="/1vs1" component={GameField}/>
        <Route path="/vscomputer" component={GameField}/>
      </div>
    </Router>;
  }
}

export default App;
