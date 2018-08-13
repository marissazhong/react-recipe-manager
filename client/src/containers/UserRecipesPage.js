import React from 'react';

import NavBar from '../components/NavBar';
import RecipeList from '../components/recipes/RecipeList';
import NewRecipeForm from '../components/recipes/NewRecipeForm';

const UserRecipesPage = ({match, recipes}) => {
    return(
        <div className="container-fluid">
            <NavBar />
            <h3 style={{display: 'inline-block'}}>Your Recipes</h3>
            <button style={{float: 'right', margin: '30px'}}type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">New Recipe</button>
            <RecipeList recipes={recipes}/>
            <NewRecipeForm />
        </div>
    )
  }
  
  export default UserRecipesPage;