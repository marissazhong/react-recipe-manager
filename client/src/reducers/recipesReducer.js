export default function recipesReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_RECIPE':
      return [...state, action.payload];
    default:
      return state;
  }
}