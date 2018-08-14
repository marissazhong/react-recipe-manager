import React, { Component } from 'react'
import { connect } from 'react-redux'

import TextInput from './TextInput'

class RecipeForm extends Component {

    state = {
        name: '', prepTime: '', cookTime: '', ingredients: '', directions: ''
    }

    handleChange(field, event) {
        this.setState({
            [field]: event.target.value,
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
                    <TextInput label="Name" onChange={(event) => this.handleChange("name", event)} />
                    <TextInput label="Prep Time" onChange={(event) => this.handleChange("prepTime", event)}/>
                    <TextInput label="Cook Time" onChange={(event) => this.handleChange("cookTime", event)}/>
                    <TextInput label="Ingredients" onChange={(event) => this.handleChange("ingredients", event)}/>
                    <TextInput label="Directions" onChange={(event) => this.handleChange("directions", event)}/>
                    <button type="submit" className="btn btn-primary">Create New Recipe</button>
                </form>
            </div>
        )}
}

const mapStateToProps = state => {
    return {
        recipe: this.state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addRecipe: recipe => dispatch({ type: "ADD_RECIPE", payload: recipe })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeForm);

