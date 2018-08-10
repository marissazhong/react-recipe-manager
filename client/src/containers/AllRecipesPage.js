import React from 'react';
import { Route } from 'react-router-dom';

import RecipesList from '../components/recipes/RecipeList';
import RecipesShow from '../components/recipes/RecipeShow';

const AllRecipesPage = ({recipes}) => (
            <div>
                <RecipesList recipes={recipes} />
            </div>
)
  
  export default AllRecipesPage;