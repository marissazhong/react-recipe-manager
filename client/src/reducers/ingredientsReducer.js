import { ingredients } from '../data';

export default function ingredientsReducer(state = [], action) {
    switch (action.type) {
      case 'ADD_INGREDIENT':
  
        console.log({ ingredients: state.ingredients.concat(action.payload.text) });
  
        return { ingredients: state.ingredients.concat(action.payload.text) };
  
      default:
        return state;
    }
  }