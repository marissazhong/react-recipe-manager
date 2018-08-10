import React from 'react';
import { Link } from 'react-router-dom';
 
const RecipeList = ({ recipes }) => {
  const renderRecipes = Object.keys(recipes).map(recipeID =>
    <Link key={recipeID} to={`/recipes/${recipeID}`}>{recipes[recipeID].name}</Link>
  );
 
  return (
    <div>
      {renderRecipes}
    </div>
  );
};
 
export default RecipeList;