import React from 'react';
import { Link } from 'react-router-dom';
import RecipeShow from './RecipeShow';
import defaultImage from '../../images/recipes/defaultRecipe.jpg';
import Images from '../../images/ImportImages';

class RecipeList extends React.Component {
  render() {
    const recipes = this.props.recipes;
    const renderRecipes = Object.keys(recipes).map(recipeID =>
        <div key={recipeID} className="col-lg-4">
          <Link className="thumbnail" to={`recipes/${recipeID}`}><img src={Images[`${recipeID}.jpg`]} alt={recipes[recipeID].name} width="240px"/></Link>
        </div>
    );
    return (
      <div className="container">
        <div className="row">
         {renderRecipes}
        </div>
      </div>
    );
  }
};
 
export default RecipeList;