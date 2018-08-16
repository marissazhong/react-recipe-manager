import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import RecipeShow from '../components/recipes/RecipeShow'
import RecipeInput from '../components/recipes/RecipeInput'

class RecipePage extends Component {

    handleEditClick(event) {
        console.log("I was clicked")
    }

    render() {
        return (
            <div className="container-fluid">
                <NavBar />
                <div className="row">
                    <div className="col-7">
                        <RecipeShow recipes={this.props.recipes} match={this.props.match}/>
                    </div>
                    <div className="col-4 border">
                        <h3>Edit Recipe</h3>
                        <RecipeInput addRecipe={this.props.addRecipe} buttonValue={"Edit Recipe"}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default RecipePage;