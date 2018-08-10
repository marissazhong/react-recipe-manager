import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AllRecipesPage from './containers/AllRecipesPage';

class App extends Component {
  render() {
    return (
      <Router>
          <Route exact path="/" render={AllRecipesPage} />
      </Router>
    );
  }
}

export default App;
