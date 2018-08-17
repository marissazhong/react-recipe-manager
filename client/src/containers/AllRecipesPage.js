import React from 'react';

import NavBar from '../components/NavBar';
import RecipeList from '../components/recipes/RecipeList';

const AllRecipesPage = () => {
    return(
        <div className="container-fluid">
            <NavBar />
            <h3>Today's Featured Recipes</h3>
            <RecipeList fromUser={false}/>
        </div>
    )
}

export default AllRecipesPage;