import React from 'react';
import NavBar from '../NavBar';
import Images from '../../images/ImportImages';
import RecipeInput from './RecipeInput';

function slug(string) {
  return string.toLowerCase().replace(/\s/g,'-');
}

const RecipeShow = ({match, recipes}) => {
  const recipe = recipes[match.params.recipeId];
  return (
    <div>
    <div className="container-fluid"><NavBar /></div>
    <div className="container-fluid" style={{margin: '20px'}}>
      <div className="row">
        <div className="col-2">
          <img src={Images[slug(recipe.name) + '.jpg']} alt={recipe.name} width="180px"/>
        </div>
        <div className="col-8">
          <h1>{recipe.name}</h1>
          <h5 style={{margin: '10px'}}>Prep Time: {recipe.prepTime} minutes</h5>
          <h5 style={{margin: '10px'}}>Cook Time: {recipe.cookTime} minutes</h5>
          <button style={{margin: '10px'}}type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Edit Recipe</button>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-3">
          <h2>Ingredients:</h2>
          <table className="table" style={{width: '300px'}}>
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {recipe.ingredients.map(function(ingred,i) {
                return (<tr key={slug(ingred.name)}>
                  <td>{ingred.name.slice(0,1).toUpperCase() + ingred.name.slice(1)}</td>
                  <td>{ingred.quantity}</td>
                </tr>)
              })}
            </tbody>
          </table>
        </div>
        <div className="col-8">
          <h2>Directions:</h2>
          <table className="table-sm" style={{width: '400px'}}>
              <tbody>
                {recipe.directions.map(function(direction,i) {
                      return (<tr key={i}>
                        <td>{i+1}. {direction}</td>
                      </tr>)
                })}
              </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  )
}

export default RecipeShow;