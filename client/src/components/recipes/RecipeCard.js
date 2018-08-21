import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Images from '../../images/ImportImages';
import { slug, loadImage } from '../../helpers';
import { updateLikes } from '../../actions/recipes';

class RecipeCard extends React.Component {

    state = this.props.recipe

    handleClick(event, recipe) {
        event.preventDefault();
        this.setState({
          likes: this.state.likes+1
        }, );
      }

    componentDidUpdate() {
        updateLikes(this.state.id, this.state.likes)
    }

    render() {
        const recipe = this.props.recipe;
        return(
            <div className="card" style={{ width: '240px', margin: '20px' }}>
                <Link className="card" to={`recipes/${slug(recipe.name)}`}>
                    <img className="card-img-top" src={Images[loadImage(recipe)]} alt={recipe.name}/>
                </Link>
                <div className="card-body">
                    <p className="card-title">{recipe.name}</p>
                    <button type="button" onClick={(event) => this.handleClick(event, recipe)} className="btn btn-outline-info btn-sm">Like</button>     {this.state.likes}
                </div>
            </div>
        )
    }
}

export default RecipeCard;