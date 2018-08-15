import React from 'react';

import NavBar from '../components/NavBar';
import RecipeList from '../components/recipes/RecipeList';
import RecipeForm from '../components/recipes/RecipeForm';

const UserRecipesPage = ({match, userRecipes}) => {
        return(
            <div className="container-fluid">
                <NavBar />
                <div className="row">
                    <div className="col-7">
                        <h3>Your Recipes</h3>
                        <RecipeList recipes={userRecipes}/>
                    </div>
                    <div className="col-4">
                        <h3>New Recipe</h3>
                        <RecipeForm />
                    </div>
                </div>
            </div>
        )
}

export default UserRecipesPage;