import React, { Component } from 'react';
import update from 'react-addons-update';

class DirectionInput extends Component {

    state = {
        directions: ['']
    }

    handleChange(index, event) {
        const direction = event.target.value
        this.setState({
            directions: update(this.state.directions, {[index]: {$set: direction}})
        })
    }

    addRow = () => {
        const directions = this.state.directions
        directions.push('')
        this.setState({directions: directions})
    }

    deleteRow = (index, event) => {
        event.preventDefault();
        const directions = this.state.directions
        directions.splice(index,1)
        this.setState({directions: directions})
    }

    render() {
        return(
            <div className="form-group row">
                <div className="col-sm-4">
                    <label>{this.props.label}: </label>
                </div>
                <div className="col-sm">
                    <table className="table-sm">
                    <tbody>
                        {this.state.directions.map((direction, index) => {
                            return (
                                <tr key={'direction-' + index}>
                                    <td className="col-sm-6"><input type="text" className="form-control" onChange={(event) => this.handleChange(index, event)} value={direction} placeholder="ex. Mix ingredients" /></td>
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
    )}
}

export default DirectionInput;