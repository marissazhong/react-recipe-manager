import React from 'react';
import defaultImage from '../../images/icons/defaultRecipe.jpeg';

const RecipeShow = props => {
  // const imgPath = `${process.env.PUBLIC_URL}/images/icons/defaultRecipe.jpeg`;
  return (
    <div className="col-xs-6 col-md-3">
      <a href="/" className="thumbnail">
        <img src={defaultImage} alt="A Recipe" width="120px"/>
      </a>
      <h1>Hi!</h1>
    </div>
  );
}
 
export default RecipeShow;