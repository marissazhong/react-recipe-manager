export default function recipesReducer(state = [], action) {
  switch (action.type) {
    case 'LOAD_RECIPES':
      const recipes = action.recipes.map(recipe => ({...recipe, directions: JSON.parse(recipe.directions)}))
      return recipes
    case 'ADD_RECIPE':
      return [...state, action.recipe];
    case 'DELETE_RECIPE':
      return state.filter(recipe => recipe.name !== action.recipe.name);
    case 'EDIT_RECIPE':
      return [...state.filter(recipe => recipe.name !== action.recipe.name), action.recipe]
    default:
      return state;
  }
}