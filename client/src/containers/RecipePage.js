import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import RecipeShow from '../components/recipes/RecipeShow'
import RecipeInput from '../components/recipes/RecipeInput'

class RecipePage extends Component {

    state = {
        showEditForm: false
    }

    handleEditClick() {
        this.setState({
            showEditForm: !this.state.showEditForm
        })
    }

    render() {
        const RecipeEditInput = () => {
            if (this.state.showEditForm) {
                return (
                    <div className="col-4">
                        <div className="card" style={{padding: '0px 20px 20px 20px'}}>
                            <h3>Edit Recipe</h3>
                            <RecipeInput addRecipe={this.props.addRecipe} buttonValue={"Save"}/>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className="col-4">
                    </div>
                )
            }
        }

        return (
            <div className="container-fluid">
                <NavBar />
                <div className="row">
                    <div className="col-7">
                        <RecipeShow handleEditClick={this.handleEditClick.bind(this)} recipes={this.props.recipes} match={this.props.match}/>
                    </div>
                    <RecipeEditInput />
                </div>
            </div>
        )
    }
}

export default RecipePage;