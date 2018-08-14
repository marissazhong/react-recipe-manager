import React, { Component } from 'react';
import { connect } from 'react-redux'

import NavBar from '../components/NavBar';
import RecipeList from '../components/recipes/RecipeList';
import RecipeForm from '../components/recipes/RecipeForm';

class UserRecipesPage extends Component {

    render() {
        const currentUser = 0;
        const userRecipes = this.props.recipes.filter(recipe => recipe.userId === currentUser);

        return(
            <div className="container-fluid">
                <NavBar />
                <div className="row">
                    <div className="col-7">
                        <h3>Your Recipes</h3>
                        <RecipeList recipes={userRecipes}/>
                    </div>
                    <div className="col-4">
                        <h3>New Recipe</h3>
                        <RecipeForm />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      recipes: state.recipes
    }
  }

export default connect(mapStateToProps)(UserRecipesPage);