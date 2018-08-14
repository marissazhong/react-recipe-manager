import React from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import { Link } from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-router-dom';
import Images from '../../images/ImportImages';

function slug(string) {
  return string.toLowerCase().replace(/\s/g,'-');
}

class RecipeList extends React.Component {
  render() {
    const recipes = this.props.recipes;
    const renderRecipes = Object.keys(recipes).map(recipeID =>
        <Link key={recipeID} className="card" to={`recipes/${recipeID}`} style={{ width: '240px', margin: '20px' }}>
          <img className="card-img-top" src={Images[`${slug(recipes[recipeID].name)}.jpg`]} alt={recipes[recipeID].name} />
          <div className="card-body">
          <h6 className="card-title">{recipes[recipeID].name}</h6>
          </div>
        </Link>
    );
    return (
      <div className="container">
        <div className="row">
         {renderRecipes}
        </div>
      </div>
    );
  }
};
 
export default RecipeList;