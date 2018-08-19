export default function recipesReducer(state = [], action) {
  switch (action.type) {
    case 'LOAD_RECIPES':
      const recipes = action.recipes.map(recipe => ({...recipe, directions: JSON.parse(recipe.directions)}))
      return recipes
    case 'ADD_RECIPE':
      const new_recipe = {...action.recipe, ingredients_recipes: action.recipe.ingredients_recipes.splice(0,action.recipe.ingredients_recipes.length/2), directions: JSON.parse(action.recipe.directions)}
      return [...state, new_recipe];
    case 'DELETE_RECIPE':
      return state.filter(recipe => recipe.name !== action.recipe.name);
    case 'EDIT_RECIPE':
      const updated_recipe = {...action.recipe, ingredients_recipes: action.recipe.ingredients_recipes.splice(0,action.recipe.ingredients_recipes.length/2), directions: JSON.parse(action.recipe.directions)}
      return [...state.filter(recipe => recipe.name !== action.recipe.name), updated_recipe]
    default:
      return state;
  }
}