import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoginPage from './containers/LoginPage';
import AllRecipesPage from './containers/AllRecipesPage';
import UserRecipesPage from './containers/UserRecipesPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/" component={AllRecipesPage} />
          <Route exact path="/recipes" component={UserRecipesPage} />
        </div>
      </Router>
    );
  }
}

export default App;
