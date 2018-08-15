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

    deleteRow = () => {
        const ingredients = this.state.ingredients
    }

    render() {
        return (
            <div className="form-group row">
                {console.log(this.state)}
                <div className="col-sm-4">
                    <label>{this.props.label}: </label>
                </div>
                <div className="col-sm">
                    <table className="table-sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.ingredients.map((ingredient, index) => {
                            return (
                                <tr key={'ingredient-' + index}>
                                    <td><input type="text" className="form-control" onChange={(event) => this.handleChange(index, "name", event)} value={this.props.value} placeholder="ex. Flour" /></td>
                                    <td><input type="text" className="form-control" onChange={(event) => this.handleChange(index, "quantity", event)} value={this.props.value} placeholder="ex. 2 cups" /></td>
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