import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import NavBar from '../components/NavBar';
import RecipeList from '../components/recipes/RecipeList';
import RecipeShow from '../components/recipes/RecipeShow';
import { recipes } from '../data';

const AllRecipesPage = () => (
    <div className="container-fluid">
        <NavBar />
        <h3>Today's Featured Recipes</h3>
        <RecipeList recipes={recipes}/>
    </div>
)

export default AllRecipesPage;