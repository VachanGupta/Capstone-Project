import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeCard.css';

const RecipeCard = ({ recipe }) => {
  const { id, title, image, prepTime, type, description, difficulty } = recipe;
  
  return (
    <div className="recipe-card">
      <div className="recipe-image">
        <img src={image || 'https://placehold.co/300x200/f8c40c/fff?text=Recipe'} alt={title} />
        <span className={`recipe-type ${type === 'veg' ? 'veg' : 'non-veg'}`}>
          {type === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}
        </span>
      </div>
      <div className="recipe-content">
        <h3>{title}</h3>
        <p className="recipe-description">{description}</p>
        <div className="recipe-meta">
          <span className="prep-time">
            <i className="time-icon">⏱️</i> {prepTime} mins
          </span>
          <span className="difficulty">{difficulty}</span>
        </div>
        <Link to={`/recipe/${id}`} className="view-recipe">View Recipe</Link>
      </div>
    </div>
  );
};

export default RecipeCard;