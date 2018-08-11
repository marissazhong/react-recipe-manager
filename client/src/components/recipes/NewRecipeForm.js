import React, { Component } from 'react'

class NewRecipeForm extends Component {

    state = {
        name: ''
    }

    handleOnChange(event) {
        this.setState({

        })
    }

    handleOnSubmit(event) {
        event.preventDefault();

    }

    render() {
        return(
        <div>
            <form onSubmit={(event) => this.handleOnSubmit(event)} style={{margin: '20px'}}>
                <div className="form-group row">
                    <div className="col-sm-4">
                        <label>Name:</label>
                    </div>
                    <div className="col-sm">
                        <input type="text" value={this.state.name} onChange={(event) => this.handleOnChange(event)}/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-4">
                        <label>Prep Time:</label>
                    </div>
                    <div className="col-sm">
                        <input type="text" value={this.state.prepTime} onChange={(event) => this.handleOnChange(event)}/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-4">
                        <label>Cook Time:</label>
                    </div>
                    <div className="col-sm">
                        <input type="text" value={this.state.cookTime} onChange={(event) => this.handleOnChange(event)}/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-4">
                        <label>Ingredients:</label>
                    </div>
                    <div className="col-sm">
                        <input type="text" value={this.state.ingredients} onChange={(event) => this.handleOnChange(event)}/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-4">
                        <label>Directions:</label>
                    </div>
                    <div className="col-sm">
                        <input type="text" value={this.state.ingredients} onChange={(event) => this.handleOnChange(event)}/>
                    </div>
                </div>
            <input className="btn btn-primary" type="submit" />
            </form>
        </div>
        );
    }
}

export default NewRecipeForm;