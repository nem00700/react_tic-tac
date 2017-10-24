import React, { Component } from 'react';
import './App.css';
import {Link } from 'react-router-dom';


class App extends Component {
  render() {
    return <div>
        <button><Link to="/1vs1">1 vs 1</Link></button>
        <button><Link to="/vscomputer">1 vs Computer</Link></button> 
      </div>;
  }
}

export default App;
