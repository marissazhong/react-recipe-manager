import React, { Component } from 'react';
import update from 'react-addons-update';

class IngredientInput extends Component {

    state = {
        ingredients: [{name: '', quantity: ''}]
    }

    handleChange(index, field, event) {
        const value = event.target.value
        this.setState({
            ingredients: update(this.state.ingredients, {[index]: {[field]: {$set: value}}})
        })
    }

    addRow = () => {
        const ingredients = this.state.ingredients
        ingredients.push({name: '', quantity: ''})
        this.setState({ingredients: ingredients})
    }

    deleteRow = (index, event) => {
        event.preventDefault();
        const ingredients = this.state.ingredients
        ingredients.splice(index,1)
        this.setState({ingredients: ingredients})
    }

    render() {
        return (
            <div className="form-group row">
                <div className="col-sm-4">
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
                        {this.state.ingredients.map((ingredient, index) => {
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
                            <td><button id="addRow" className="btn btn-light" onClick={this.addRow}>Add Row</button></td>
                        </tr>
                    </tfoot>
                    </table>
                </div>
            </div>
        )
    }
}

export default IngredientInput;