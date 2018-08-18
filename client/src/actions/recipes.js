
export const addRecipe = (recipe) => {
    return { type: 'ADD_RECIPE', recipe };
}; //not currently used (it is currently directly in UserRecipesPage)

export function loadRecipes() {
    return function(dispatch) {
        return fetch('/recipes')
            .then(response => response.json())
            .then(recipes => dispatch({ type: 'LOAD_RECIPES', recipes}))
    }
}

export function createRecipe() {

}

export function editRecipe() {

}

export function deleteRecipe() {

}