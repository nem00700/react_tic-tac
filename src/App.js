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
    return <div>
      <GameField />
    </div>;
  }
}

export default App;
