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
    const renderRecipes = Object.values(recipes).map(recipe =>
        <Link key={slug(recipe.name)} className="card" to={`recipes/${slug(recipe.name)}`} style={{ width: '240px', margin: '20px' }}>
          <img className="card-img-top" src={Images[loadImage(recipe)]} alt={recipe.name} />
          <div className="card-body">
          <h6 className="card-title">{recipe.name}</h6>
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