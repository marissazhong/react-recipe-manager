import React from 'react';

import NavBar from '../components/NavBar';
import RecipeList from '../components/recipes/RecipeList';
import NewRecipeForm from '../components/recipes/NewRecipeForm';

const UserRecipesPage = ({match, recipes}) => {
    return(
        <div className="container-fluid">
            <NavBar />
            <div className="row">
                <div className="col-8">
                    <h3>Your Recipes</h3>
                    <RecipeList recipes={recipes}/>
                </div>
                <div className="col-4">
                    <div className="card" style={{margin: '20px'}}>
                        <div className="card-body">
                            <h4 className="card-title">Create New Recipe</h4>
                            <NewRecipeForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
  export default UserRecipesPage;