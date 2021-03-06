import React, { Component } from 'react';
import update from 'react-addons-update';

class DirectionInput extends Component {

    state = {
        directions: this.props.directions
    }

    handleChange(index, event) {
        const direction = event.target.value
        this.setState({
            directions: update(this.state.directions, {[index]: {$set: direction}})
        })
        this.props.onChange(index, direction)
    }

    addRow = (event) => {
        event.preventDefault();
        const directions = this.state.directions
        directions.push('')
        this.setState({directions: directions})
        this.props.changeRow(this.state);
    }

    deleteRow = (index, event) => {
        event.preventDefault();
        const directions = this.state.directions
        directions.splice(index,1)
        this.setState({directions: directions})
        this.props.changeRow(this.state);
    }

    render() {
        return(
            <div className="form-group row">
                <div className="col-sm-2">
                    <label>Directions: </label>
                </div>
                <div className="col-sm-10">
                    <table className="table-sm">        
                    <tbody>
                        {this.state.directions.map((direction, index) => {
                            return (
                                <tr key={'direction-' + index}>
                                    <td style={{width: '5%'}}>{index+1}.</td>
                                    <td style={{width: '90%'}}>
                                        <input type="textarea" className="form-control" onChange={(event) => this.handleChange(index, event)} value={direction} placeholder="ex. Mix ingredients" />
                                    </td>
                                    <td style={{width: '5%'}}><button id="deleteRow" className="btn btn-light btn-sm" onClick={(event) => this.deleteRow(index, event)}>Delete</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td><button id="addRow" className="btn btn-light" onClick={(event) => this.addRow(event)}>Add Row</button></td>
                        </tr>
                    </tfoot>
                    </table>
                </div>
            </div>    
    )}
}

export default DirectionInput;