import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoginPage from './containers/LoginPage';
import AllRecipesPage from './containers/AllRecipesPage';
import UserRecipesPage from './containers/UserRecipesPage';
import RecipeShow from './components/recipes/RecipeShow';
import { recipes, users } from './data';

class App extends Component {

  constructor() {
    super()
    const currentUser = 0;
    const userRecipes = recipes.filter(recipe => recipe.userId === currentUser);

    this.state = {
      recipes,
      users,
      userRecipes
    }
  }

  render() {
    return (
      
      <Router>
        <div className="app">
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/" render={routerProps => <AllRecipesPage {...routerProps} recipes={this.state.recipes} />} />
          <Route exact path="/recipes" render={routerProps => <UserRecipesPage {...routerProps} recipes={this.state.userRecipes} />} />
          <Route path="/recipes/:recipeId" render={routerProps => <RecipeShow {...routerProps} recipes={this.state.recipes} />}/>
          <Route exact path="/recipe" component={RecipeShow} />
        </div>
      </Router>
    );
  }
}

export default App;
