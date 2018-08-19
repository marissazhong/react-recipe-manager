import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Images from '../../images/ImportImages';
import { slug, loadImage } from '../../helpers';

class RecipeList extends React.Component {

  renderRecipeIndex() {
    const currentUser = 1;
    let recipes;
    console.log(this.props.recipes)
    if (this.props.fromUser === true) {
      recipes = this.props.recipes.filter(recipe => recipe.user.id === currentUser)
    } else {
      recipes = this.props.recipes
    }
    return recipes.sort(function(a, b) {
      var nameA = a.name.toUpperCase(); 
      var nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    })
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