import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

import NavBar from '../components/NavBar';
import RecipeShow from '../components/recipes/RecipeShow'
import RecipeInput from '../components/recipes/RecipeInput'
import { slug } from '../helpers';
import { deleteRecipe, editRecipe } from '../actions/recipes';

class RecipePage extends React.Component {
    state = {
        showEditForm: false,
        redirect: false,
    }

    handleEditClick() {
        this.setState({
            showEditForm: !this.state.showEditForm
        })
    }

    deleteOnClick(recipe) {
        this.setState({
            redirect: true
        })
        this.props.deleteRecipe(recipe)
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to='/' />
        } else {
            const recipe = this.props.recipes.find(recipe => slug(recipe.name) === this.props.match.params.recipeName);
            const RecipeEditInput = () => {
                recipe.ingredients_recipes_attributes = recipe.ingredients_recipes
                if (this.state.showEditForm) {
                    return (
                        <RecipeInput recipe={recipe} label={"Edit Recipe"} addRecipe={this.props.editRecipe} buttonValue={"Save"}/>
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
                            <RecipeShow recipe={recipe} handleEditClick={this.handleEditClick.bind(this)} deleteOnClick={this.deleteOnClick.bind(this)} />
                        </div>
                        <RecipeEditInput />
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = state => ({ recipes: state.recipes })

const mapDispatchToProps = dispatch => ({
    deleteRecipe: recipe => dispatch(deleteRecipe(recipe)),
    editRecipe: recipe => dispatch(editRecipe(recipe))
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipePage);