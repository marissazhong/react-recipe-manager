import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

import NavBar from '../components/NavBar';
import RecipeShow from '../components/recipes/RecipeShow'
import RecipeInput from '../components/recipes/RecipeInput'
import { slug } from '../helpers';
import { loadRecipes, deleteRecipe, editRecipe } from '../actions/recipes';

class RecipePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditForm: false,
            redirect: false,
        }
    }

    componentWillMount() {
        if (!this.props.recipes[0]) {
            this.props.loadRecipes();
        }
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
                        <div className="col-5">
                            <div className="card" style={{margin: '20px', padding: '0px 20px 20px 20px'}}>
                                <h3>Edit Recipe</h3>
                                <RecipeInput recipe={recipe} addRecipe={this.props.editRecipe} buttonValue={"Save"}/>
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
    loadRecipes: () => dispatch(loadRecipes()),
    deleteRecipe: recipe => dispatch(deleteRecipe(recipe)),
    editRecipe: recipe => dispatch(editRecipe(recipe))
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipePage);