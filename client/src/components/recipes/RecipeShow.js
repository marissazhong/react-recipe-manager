import React, { Component } from 'react';
import Images from '../../images/ImportImages';

function slug(string) {
  return string.toLowerCase().replace(/\s/g,'-');
}

function loadImage(recipe) {
  if (Images[slug(recipe.name) + '.jpg']) {
    return slug(recipe.name) + '.jpg'
  } else {
    return 'defaultRecipe.jpg'
  }
}

class RecipeShow extends Component {

  render() {
    const match = this.props.match;
    const recipes = this.props.recipes;
    const recipe = recipes.find(recipe => slug(recipe.name) === match.params.recipeName);
    return (
      <div>
      <div className="container-fluid" style={{margin: '20px'}}>
        <div className="row">
            <div className="col-3">
              <img src={Images[loadImage(recipe)]} alt={recipe.name} width="180px" />
            </div>
            <div className="col-8" style={{marginLeft: '20px'}}>
              <h1>{recipe.name}</h1>
              <h5 style={{margin: '10px'}}>Prep Time: {recipe.prepTime} minutes</h5>
              <h5 style={{margin: '10px'}}>Cook Time: {recipe.cookTime} minutes</h5>
              <button style={{margin: '10px'}} type="button" className="btn btn-outline-secondary btn-sm" onClick={this.props.handleEditClick}>Edit Recipe</button>
              <button type="button" className="btn btn-outline-secondary btn-sm" onClick={this.props.deleteOnClick}>Delete Recipe</button>
            </div>
        </div> {/* end of header row */}
        <br />
        <div className="row">
          <div className="col-5">
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
          <div className="col-6">
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
        </div> {/* end of Ingredients and Directions row */}
      </div> {/* end of show recipe container */}
    </div> 
    )
  }
}

export default RecipeShow;