import React from 'react';
import { connect } from 'react-redux';

import NavBar from '../components/NavBar';
import RecipeList from '../components/recipes/RecipeList';
import RecipeInput from '../components/recipes/RecipeInput';
import { createRecipe } from '../actions/recipes';

class UserRecipesPage extends React.Component {
    render() {
        const newRecipe = {user: {id: 1}, name: '', prep_time: '', cook_time: '', ingredients_recipes_attributes: [{name: '', quantity: ''}], directions: ['']}
        return(
            <div className="container-fluid">
                <NavBar />
                <div className="row">
                    <div className="col-7">
                        <h3>Your Recipes</h3>
                        <RecipeList fromUser={true}/>
                    </div>
                    <RecipeInput label={"New Recipe"} recipe={newRecipe} addRecipe={this.props.addRecipe}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ recipes: state.recipes })

const mapDispatchToProps = dispatch => ({
    addRecipe: recipe => dispatch(createRecipe(recipe))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserRecipesPage);