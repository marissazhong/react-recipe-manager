import React from 'react';
import NavBar from '../../components/NavBar';
import defaultImage from '../../images/recipes/defaultRecipe.jpg';
import Images from '../../images/ImportImages';

const RecipeShow = (props) =>
  // const imgPath = `${process.env.PUBLIC_URL}/images/icons/defaultRecipe.jpeg`;
  <div className="container-fluid">
   <NavBar />
    <div className="col-xs-6 col-md-3">
      <a href="/" className="thumbnail">
        <img src={defaultImage} alt='default image' width="180px"/>
      </a>
      <h1>Hi!</h1>
    </div>
  </div>
 
export default RecipeShow;