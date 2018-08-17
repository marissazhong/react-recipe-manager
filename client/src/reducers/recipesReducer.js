import { recipes } from '../data';

export default function recipesReducer(state = recipes, action) {
  switch (action.type) {
    case 'ADD_RECIPE':
      return [...state, action.recipe];
    case 'DELETE_RECIPE':
      return state.filter(recipe => recipe.name !== action.recipe.name);
    default:
      return state;
  }
}