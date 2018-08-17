import React, { Component } from 'react'
import update from 'react-addons-update';

import TextInput from './TextInput'
import IngredientInput from './IngredientInput'
import DirectionInput from './DirectionInput'

class RecipeInput extends Component {
    constructor(props) {
        super(props)
        this.state = this.props.recipe
    }

    handleChange(field, event) {
        this.setState({
            [field]: event.target.value,
        })
    }

    updateIngredients(index, field, value) {
        this.setState({
            ingredients: update(this.state.ingredients, {[index]: {[field]: {$set: value}}})
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
            userId: 0, name: '', prepTime: '', cookTime: '', ingredients: '', directions: ''
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
                    <IngredientInput ingredients={this.props.recipe.ingredients} onChange={(index, field, value) => this.updateIngredients(index, field, value)} />
                    <DirectionInput directions={this.props.recipe.directions} updateDirections={this.updateDirections}/>
                    <button type="submit" className="btn btn-primary">{this.props.buttonValue}</button>
                </form>
            </div>
        )}
}

export default RecipeInput;

