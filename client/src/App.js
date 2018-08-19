import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AllRecipesPage from './containers/AllRecipesPage';
import UserRecipesPage from './containers/UserRecipesPage';
import RecipePage from './containers/RecipePage';

const App = () => {
    return (
      <Router>
          <div className="app">
            <Route exact path="/" component={AllRecipesPage} />
            <Route exact path="/recipes" component={UserRecipesPage} />
            <Route exact path="/recipes/:recipeName" component={RecipePage} />
          </div>
      </Router>
    );
}

export default App;
