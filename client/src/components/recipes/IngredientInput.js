import React, { Component } from 'react';
import update from 'react-addons-update';

class IngredientInput extends Component {
    
    state = {
        ingredients_recipes_attributes: this.props.ingredients_recipes_attributes
    }

    handleChange(index, field, event) {
        const value = event.target.value
        this.setState({
            ingredients_recipes_attributes: update(this.state.ingredients_recipes_attributes, {[index]: {[field]: {$set: value}}})
        })
        this.props.onChange(index, field, value);
    }

    addRow = (event) => {
        event.preventDefault();
        const ingredients_recipes_attributes = this.state.ingredients_recipes_attributes
        ingredients_recipes_attributes.push({name: '', quantity: ''})
        this.setState({ingredients_recipes_attributes: ingredients_recipes_attributes})
        this.props.changeRow(this.state);
    }

    deleteRow = (index, event) => {
        event.preventDefault();
        const ingredients_recipes_attributes = this.state.ingredients_recipes_attributes
        ingredients_recipes_attributes.splice(index,1)
        this.setState({ingredients_recipes_attributes: ingredients_recipes_attributes})
        this.props.changeRow(this.state);
    }

    render() {
        return (
            <div className="form-group row">
                <div className="col-sm-2">
                    <label>Ingredients: </label>
                </div>
                <div className="col-sm">
                    <table className="table-sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.ingredients_recipes_attributes.map((ingredient, index) => {
                            return (
                                <tr key={'ingredient-' + index}>
                                    <td><input type="text" className="form-control" onChange={(event) => this.handleChange(index, "name", event)} value={ingredient.name} placeholder="ex. Flour" /></td>
                                    <td><input type="text" className="form-control" onChange={(event) => this.handleChange(index, "quantity", event)} value={ingredient.quantity} placeholder="ex. 2 cups" /></td>
                                    <td><button id="deleteRow" className="btn btn-light btn-sm" onClick={(event) => this.deleteRow(index, event)}>Delete</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td><button id="addRow" className="btn btn-light" onClick={(event) => this.addRow(event)}>Add Row</button></td>
                        </tr>
                    </tfoot>
                    </table>
                </div>
            </div>
        )
    }
}

export default IngredientInput;