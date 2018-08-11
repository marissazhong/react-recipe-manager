import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoginPage from './containers/LoginPage';
import AllRecipesPage from './containers/AllRecipesPage';
import UserRecipesPage from './containers/UserRecipesPage';
import RecipeShow from './components/recipes/RecipeShow';
import { recipes } from './data';

class App extends Component {

  state = {
    recipes
  }
  

  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/" component={AllRecipesPage} />
          <Route exact path="/recipes" component={UserRecipesPage} />
          <Route path="/recipes/:recipeId" render={routerProps => <RecipeShow {...routerProps} recipes={this.state.recipes} />}/>
          <Route exact path="/recipe" component={RecipeShow} />
        </div>
      </Router>
    );
  }
}

export default App;
