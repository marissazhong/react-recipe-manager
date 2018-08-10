import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import NavBar from '../components/NavBar';
import RecipeList from '../components/recipes/RecipeList';
import RecipeShow from '../components/recipes/RecipeShow';
import { recipes } from '../data';

const AllRecipesPage = () => (
    <div>
        <NavBar />
        <h1>Welcome!</h1>
        <RecipeList recipes={recipes}/>
    </div>
)

export default AllRecipesPage;