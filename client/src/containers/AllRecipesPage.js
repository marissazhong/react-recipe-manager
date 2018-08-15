import React from 'react';

import NavBar from '../components/NavBar';
import RecipeList from '../components/recipes/RecipeList';

const AllRecipesPage = ({recipes}) => {
    return(
        <div className="container-fluid">
            <NavBar />
            <h3>Today's Featured Recipes</h3>
            <RecipeList recipes={recipes}/>
        </div>
    )
}

export default AllRecipesPage;