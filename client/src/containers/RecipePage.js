import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import NavBar from '../components/NavBar';
import RecipeShow from '../components/recipes/RecipeShow'
import RecipeInput from '../components/recipes/RecipeInput'

function slug(string) {
    return string.toLowerCase().replace(/\s/g,'-');
  }

class RecipePage extends Component {

    state = {
        showEditForm: false,
        redirect: false
    }

    handleEditClick() {
        this.setState({
            showEditForm: !this.state.showEditForm
        })
    }

    deleteOnClick() {
        this.setState({
            redirect: true
        })
    }

    renderRedirect() {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    }

    render() {
        const recipe = this.props.recipes.find(recipe => slug(recipe.name) === this.props.match.params.recipeName);
        const RecipeEditInput = () => {
            if (this.state.showEditForm) {
                return (
                    <div className="col-5">
                        <div className="card" style={{margin: '20px', padding: '0px 20px 20px 20px'}}>
                            <h3>Edit Recipe</h3>
                            <RecipeInput recipe={recipe} addRecipe={this.props.addRecipe} buttonValue={"Save"}/>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className="col">
                    </div>
                )
            }
        }

        return (
            <div className="container-fluid">
                <NavBar />
                <div className="row">
                    <div className="col-7">
                        {this.renderRedirect()}
                        <RecipeShow handleEditClick={this.handleEditClick.bind(this)} deleteOnClick={this.deleteOnClick.bind(this)} recipes={this.props.recipes} match={this.props.match}/>
                    </div>
                    <RecipeEditInput />
                </div>
            </div>
        )
    }
}

export default RecipePage;