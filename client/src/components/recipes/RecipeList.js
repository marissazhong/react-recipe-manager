import React from 'react';
import { Link } from 'react-router-dom';
import RecipeShow from './RecipeShow';

class RecipeList extends React.Component {
  render() {
    const recipes = this.props.recipes;
    const renderRecipes = Object.keys(recipes).map(recipeID =>
      <li key={recipeID} >
        <Link to={`/recipes/${recipeID}`}>{recipes[recipeID].name}</Link>
      </li>
    );
   
    return (
      <div>
        {renderRecipes}
      </div>
    );
  }
};
 
export default RecipeList;