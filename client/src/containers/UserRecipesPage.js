import React from 'react';

import NavBar from '../components/NavBar';
import RecipeList from '../components/recipes/RecipeList';

const UserRecipesPage = ({match, recipes}) => {
    console.log(recipes)
    return(
        <div className="container-fluid">
            <NavBar />
            <h3>Your Recipes</h3>
            <RecipeList recipes={recipes}/>
        </div>
    )
  }
  
  export default UserRecipesPage;