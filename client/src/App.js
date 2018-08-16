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
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/" render={routerProps => <AllRecipesPage {...routerProps} recipes={this.props.recipes} />} />
            <Route exact path="/recipes" render={routerProps => <UserRecipesPage {...routerProps} />} />
              <Route exact path="/recipes/:recipeName" render={routerProps => <RecipePage {...routerProps} recipes={this.props.recipes} />}/>
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
