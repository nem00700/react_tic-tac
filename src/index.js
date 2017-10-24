import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import VsPerson from "./components/VsPerson";
import VsComputer from "./components/VsComputer";


ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/1vs1" component={VsPerson} />
            <Route path="/vscomputer" component={VsComputer} />
        </Switch>
    </Router>, 
    document.getElementById('root')
);