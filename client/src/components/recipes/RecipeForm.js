import React, { Component } from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react'

import TextInput from './TextInput'

class RecipeForm extends Component {

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
                        <TextInput label="Name" onChange="" value="" />
                        <TextInput label="Prep Time" onChange="" value="" />
                        <TextInput label="Cook Time" onChange="" value="" />
                        <TextInput label="Ingredients" onChange="" value="" />
                        <TextInput label="Directions" onChange="" value="" />
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

export default RecipeForm;