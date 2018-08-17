import React from 'react';
import { connect } from 'react-redux';

import NavBar from '../components/NavBar';
import RecipeList from '../components/recipes/RecipeList';
import RecipeInput from '../components/recipes/RecipeInput';

class UserRecipesPage extends React.Component {
    render() {
        const newRecipe = {userId: 0, name: '', prepTime: '', cookTime: '', ingredients: [{name: '', quantity: ''}], directions: ['']}
        return(
            <div className="container-fluid">
                <NavBar />
                <div className="row">
                    <div className="col-7">
                        <h3>Your Recipes</h3>
                        <RecipeList fromUser={true}/>
                    </div>
                    <div className="col-5">
                        <div className="card" style={{margin: '20px', padding: '0px 20px 20px 20px'}}>
                            <h3>New Recipe</h3>
                            <RecipeInput recipe={newRecipe} addRecipe={this.props.addRecipe} buttonValue={"Create Recipe"}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ recipes: state.recipes })

const mapDispatchToProps = dispatch => ({
    addRecipe: recipe => dispatch({ type: "ADD_RECIPE", recipe})
})

export default connect(mapStateToProps, mapDispatchToProps)(UserRecipesPage);