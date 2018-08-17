import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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

  renderRecipeIndex() {
    const currentUser = 0;
    if (this.props.fromUser === true) {
      return this.props.recipes.filter(recipe => recipe.userId === currentUser);
    } else {
      return this.props.recipes
    }
  }

  render() {
    const recipes = this.renderRecipeIndex();
    const renderRecipes = Object.values(recipes).map(recipe =>
        <Link key={slug(recipe.name)} className="card" to={`recipes/${slug(recipe.name)}`} style={{ width: '240px', margin: '20px' }}>
          <img className="card-img-top" src={Images[loadImage(recipe)]} alt={recipe.name} />
          <div className="card-body">
            <p className="card-title">{recipe.name}</p>
          </div>
        </Link>
    );
    return (
      <div className="container">
        <div className="row justify-content-center">
         {renderRecipes}
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({ recipes: state.recipes })
 
export default connect(mapStateToProps)(RecipeList);