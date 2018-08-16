import React, { Component } from 'react'

import TextInput from './TextInput'
import IngredientInput from './IngredientInput'
import DirectionInput from './DirectionInput'

class RecipeInput extends Component {
    
    state = { // need to build out user functionality
        userId: 0, name: '', prepTime: '', cookTime: '', ingredients: '', directions: ''
    }

    handleChange(field, event) {
        this.setState({
            [field]: event.target.value,
        })
    }

    updateIngredients = (ingredients) => {
        this.setState({
            ingredients: ingredients
        })
    }

    updateDirections = (directions) => {
        this.setState({
            directions: directions
        })
    }

    handleOnSubmit(event) {
        event.preventDefault();
        this.props.addRecipe(this.state);
        this.setState({
            name: '', prepTime: '', cookTime: '', ingredients: '', directions: ''
        });
        event.target.reset();
    }

    render() {
        return(
            <div>
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <TextInput label="Name" value={this.props.recipe.name} onChange={(event) => this.handleChange("name", event)} />
                    <TextInput label="Prep Time" value={this.props.recipe.prepTime} onChange={(event) => this.handleChange("prepTime", event)}/>
                    <TextInput label="Cook Time" value={this.props.recipe.cookTime} onChange={(event) => this.handleChange("cookTime", event)}/>
                    <IngredientInput ingredients={this.props.recipe.ingredients} updateIngredients={this.updateIngredients} />
                    <DirectionInput directions={this.props.recipe.directions} updateDirections={this.updateDirections}/>
                    <button type="submit" className="btn btn-primary">{this.props.buttonValue}</button>
                </form>
            </div>
        )}
}

export default RecipeInput;

