export default function recipesReducer(state = {recipes: [],}, action) {
  switch (action.type) {
    case 'ADD_RECIPE':

      console.log({ recipes: state.recipes.concat(action.payload.text) });

      return { recipes: state.recipes.concat(action.payload.text) };

    default:
      return state;
  }
}