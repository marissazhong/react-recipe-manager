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
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">New Recipe</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
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
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Create New Recipe</button>
                    </div>
                    </div>
                </div>
            </div>
            
        </div>
        );
    }
}

export default NewRecipeForm;