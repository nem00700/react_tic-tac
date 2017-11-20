import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import VsPerson from "./components/VsPerson";
import VsComputer from "./components/VsComputer";
import Menu from './components/Menu';
import { connect } from 'react-redux';
import PropTypes from "prop-types";


class App extends Component {
  static childContextTypes = {
    size: PropTypes.string,
  };

  getChildContext() {
    const { size } = this.props;
    return {
      size
    };
  }

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

//export default App;

export default connect((state) => ({
  size: state.game.gameFieldSize,
}))(App);
