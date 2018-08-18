
export const addRecipe = (recipe) => {
    return { type: 'ADD_RECIPE', recipe };
}; //not currently used (it is currently directly in UserRecipesPage)

export function loadRecipes() {
    return function(dispatch) {
        return fetch('/api/recipes')
            .then(response => response.json())
            .then(recipes => dispatch({ type: 'LOAD_RECIPES', recipes}))
    }
}

export function createRecipe() {

}

export function editRecipe() {

}

export function deleteRecipe(recipe) {
    return function(dispatch) {
        return fetch(`/api/recipes/${recipe.id}`, {
            method: "DELETE"
        })
        .then( () => dispatch({ type: 'DELETE_RECIPE', recipe}))
    }
}