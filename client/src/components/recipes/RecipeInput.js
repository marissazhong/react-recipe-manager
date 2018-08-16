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
        console.log(this.state)
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
                    <TextInput label="Name" onChange={(event) => this.handleChange("name", event)} />
                    <TextInput label="Prep Time" onChange={(event) => this.handleChange("prepTime", event)}/>
                    <TextInput label="Cook Time" onChange={(event) => this.handleChange("cookTime", event)}/>
                    <IngredientInput updateIngredients={this.updateIngredients} />
                    <DirectionInput updateDirections={this.updateDirections}/>
                    <button type="submit" className="btn btn-primary">{this.props.buttonValue}</button>
                </form>
            </div>
        )}
}

export default RecipeInput;

