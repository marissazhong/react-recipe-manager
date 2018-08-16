import React from 'react';
import { Link } from 'react-router-dom';
import Images from '../../images/ImportImages';

function slug(string) {
  return string.toLowerCase().replace(/\s/g,'-');
}

function loadImage(recipe) {
  if (Images[slug(recipe.name) + '.jpg']) {
    return slug(recipe.name) + '.jpg'
  } else {
    return 'defaultRecipe.jpg'
  }
}

class RecipeList extends React.Component {
  render() {
    const recipes = this.props.recipes;
    const renderRecipes = Object.keys(recipes).map(recipeID =>
        <Link key={recipeID} className="card" to={`recipes/${recipeID}`} style={{ width: '240px', margin: '20px' }}>
          <img className="card-img-top" src={Images[loadImage(recipes[recipeID])]} alt={recipes[recipeID].name} />
          <div className="card-body">
          <h6 className="card-title">{recipes[recipeID].name}</h6>
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