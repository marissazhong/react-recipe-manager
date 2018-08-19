
export function loadRecipes() {
    return function(dispatch) {
        return fetch('/api/recipes')
            .then(response => response.json())
            .then(recipes => dispatch({ type: 'LOAD_RECIPES', recipes}))
    }
}

export function createRecipe(recipe) {
    return function(dispatch) {
        return fetch('/api/recipes', {
            method: "POST",
            body: JSON.stringify({recipe: recipe}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(recipe => dispatch({ type: 'ADD_RECIPE', recipe}))
    }
}

export function editRecipe(recipe) {

}

export function deleteRecipe(recipe) {
    return function(dispatch) {
        return fetch(`/api/recipes/${recipe.id}`, {
            method: "DELETE"
        })
        .then( () => dispatch({ type: 'DELETE_RECIPE', recipe}))
    }
}