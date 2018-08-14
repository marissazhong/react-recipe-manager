import React from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react';

import NavBar from '../components/NavBar';
import RecipeList from '../components/recipes/RecipeList';

const AllRecipesPage = ({match, recipes}) => {
    return(
        <div className="container-fluid">
            <NavBar />
            <h3>Today's Featured Recipes</h3>
            <RecipeList recipes={recipes}/>
        </div>
    )
}

export default AllRecipesPage;