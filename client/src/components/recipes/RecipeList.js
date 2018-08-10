import React from 'react';
import { Link } from 'react-router-dom';
import RecipeShow from './RecipeShow';
import defaultImage from '../../images/recipes/defaultRecipe.jpg';
import Images from '../../images/ImportImages';

class RecipeList extends React.Component {
  render() {
    const recipes = this.props.recipes;
    const renderRecipes = Object.keys(recipes).map(recipeID =>
        <Link key={recipeID} className="card" to={`recipes/${recipeID}`} style={{ width: '240px', margin: '20px' }}>
          <img className="card-img-top" src={Images[`${recipeID}.jpg`]} alt={recipes[recipeID].name} />
          <div class="card-body">
          <h6 class="card-title">{recipes[recipeID].name}</h6>
          </div>
        </Link>
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