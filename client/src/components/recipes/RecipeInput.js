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
            ingredients_recipes_attributes: update(this.state.ingredients_recipes_attributes, {[index]: {[field]: {$set: value}}})
        })
    }

    changeRow(field, state) {
        this.setState({[field]: state[field]})
    }

    updateDirections(index, direction) {
        this.setState({
            directions: update(this.state.directions, {[index]: {$set: direction}})
        })
    }

    handleOnSubmit(event) {
        event.preventDefault();
        this.props.addRecipe(this.state);
        this.setState({
            user: {id: 1}, name: '', prep_time: '', cook_time: '', ingredients_recipes: '', ingredients_recipes_attributes: '', directions: ''
        });
        event.target.reset();
    }

    render() {
        return(
            <div>
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <TextInput label="Name" onChange={(event) => this.handleChange("name", event)} value={this.state.name}/>
                    <TextInput label="Prep Time" onChange={(event) => this.handleChange("prep_time", event)} value={this.state.prep_time} />
                    <TextInput label="Cook Time" onChange={(event) => this.handleChange("cook_time", event)} value={this.state.cook_time}/>
                    <IngredientInput ingredients_recipes_attributes={this.props.recipe.ingredients_recipes_attributes} onChange={(index, field, value) => this.updateIngredients(index, field, value)} changeRow={(event) => this.changeRow("ingredients_recipes_attributes", event)} />
                    <DirectionInput directions={this.props.recipe.directions} onChange={(index, value) => this.updateDirections(index, value)} changeRow={(event) => this.changeRow("directions", event)}/>
                    <button type="submit" className="btn btn-primary">{this.props.buttonValue}</button>
                </form>
            </div>
        )}
}

export default RecipeInput;

