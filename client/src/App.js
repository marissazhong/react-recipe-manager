import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoginPage from './containers/LoginPage';
import AllRecipesPage from './containers/AllRecipesPage';
import UserRecipesPage from './containers/UserRecipesPage';
import RecipePage from './containers/RecipePage';

class App extends Component {

  render() {
    return (
      <Router>
          <div className="app">
            <Route exact path="/" component={AllRecipesPage} />
            <Route exact path="/recipes" component={UserRecipesPage} />
              <Route exact path="/recipes/:recipeName" component={RecipePage}/>
          </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps)(App);
