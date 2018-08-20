import React from 'react';
import { connect } from 'react-redux';

import RecipeCard from './RecipeCard';

class RecipeList extends React.Component {

  renderRecipeIndex() {
    const currentUser = 1;
    let recipes;
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

  handleClick(event, recipeId) {
    event.preventDefault();
    this.setState({
      [recipeId]: 0
    });
  }

  render() {
    const recipes = this.renderRecipeIndex();
    return (
      <div className="container">
        <div className="row justify-content-center">
         {Object.values(recipes).map(recipe =>
            <RecipeCard recipe={recipe} />
          )}
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({ recipes: state.recipes })
 
export default connect(mapStateToProps)(RecipeList);