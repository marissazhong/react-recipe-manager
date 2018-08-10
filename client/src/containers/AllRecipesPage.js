import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import RecipeList from '../components/recipes/RecipeList';
import RecipeShow from '../components/recipes/RecipeShow';
import { recipes } from '../data';

const AllRecipesPage = ({match}) => (
            <div>
                <h1>Welcome!</h1>
                <RecipeList recipes={recipes}/>
                <Route exact path={match.url} render={() => (
                    <h3>Please select a Recipe from the list.</h3>
                )}/>
                <Route path={`${match.url}/:recipeId`} component={RecipeShow}/>
            </div>
)

export default AllRecipesPage;