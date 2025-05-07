import React from 'react';
import './RecipeDetail.css';

const RecipeDetail = ({ recipe, onClose }) => {
  if (!recipe) return null;
  
  const { title, image, prepTime, cookTime, servings, type, difficulty, description, ingredients, instructions } = recipe;
  
  return (
    <div className="recipe-detail-overlay">
      <div className="recipe-detail">
        <button className="close-button" onClick={onClose}>&times;</button>
        
        <div className="recipe-detail-header">
          <img src={image} alt={title} className="detail-image" />
          <div className="detail-header-content">
            <h2>{title}</h2>
            <p className="detail-description">{description}</p>
            
            <div className="detail-meta">
              <span className="detail-meta-item">
                <i className="meta-icon">⏱️</i> Prep: {prepTime} mins
              </span>
              <span className="detail-meta-item">
                <i className="meta-icon">🍳</i> Cook: {cookTime} mins
              </span>
              <span className="detail-meta-item">
                <i className="meta-icon">👥</i> Serves: {servings}
              </span>
              <span className="detail-meta-item">
                <i className="meta-icon">📊</i> Difficulty: {difficulty}
              </span>
              <span className={`detail-meta-item ${type === 'veg' ? 'veg' : 'non-veg'}`}>
                {type === 'veg' ? '🥦 Vegetarian' : '🥩 Non-Vegetarian'}
              </span>
            </div>
          </div>
        </div>
        
        <div className="recipe-detail-content">
          <div className="ingredients-section">
            <h3>Ingredients</h3>
            <ul className="ingredients-list">
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          
          <div className="instructions-section">
            <h3>Instructions</h3>
            <ol className="instructions-list">
              {instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;