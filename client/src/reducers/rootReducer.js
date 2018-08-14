import { combineReducers } from 'redux';
import recipesReducer from './recipesReducer'
import ingredientsReducer from './ingredientsReducer'
import usersReducer from './usersReducer'

const rootReducer = combineReducers({
  recipes: recipesReducer,
  ingredients: ingredientsReducer,
  users: userReducer
});
 
export default rootReducer