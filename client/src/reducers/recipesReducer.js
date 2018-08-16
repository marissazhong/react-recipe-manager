import { recipes } from '../data';

export default function recipesReducer(state = recipes, action) {
  switch (action.type) {
    case 'ADD_RECIPE':
      return [...state, action.recipe];
    case 'DELETE_RECIPE':
      console.log(action) 
    default:
      return state;
  }
}