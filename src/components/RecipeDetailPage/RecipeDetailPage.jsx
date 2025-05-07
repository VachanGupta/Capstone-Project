import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './RecipeDetailPage.css';

const RecipeDetailPage = ({ recipes }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const recipe = recipes.find(r => r.id === parseInt(id));
  
  useEffect(() => {
    if (!recipe) {
      navigate('/recipes');
    }
    window.scrollTo(0, 0);
  }, [recipe, navigate]);

  if (!recipe) return null;
  
  const { title, image, prepTime, cookTime, servings, type, difficulty, description, ingredients, instructions } = recipe;
  
  return (
    <div className="recipe-detail-page">
      <div className="recipe-detail-container">
        <button className="back-button" onClick={() => navigate('/recipes')}>
          <span className="back-icon">←</span> Back to Recipes
        </button>
        
        <div className="recipe-detail-header">
          <div className="detail-image-container">
            <img src={image} alt={title} className="detail-image" />
            <div className="difficulty-badge">{difficulty}</div>
          </div>
          
          <div className="detail-header-content">
            <h1 className="detail-title">{title}</h1>
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
              <span className={`detail-meta-item ${type === 'veg' ? 'veg' : 'non-veg'}`}>
                {type === 'veg' ? '🥦 Vegetarian' : '🥩 Non-Vegetarian'}
              </span>
            </div>
          </div>
        </div>
        
        <div className="recipe-detail-content">
          <div className="ingredients-section">
            <h2>Ingredients</h2>
            <ul className="ingredients-list">
              {ingredients.map((ingredient, index) => (
                <li key={index}>
                  <span className="ingredient-bullet">•</span>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="instructions-section">
            <h2>Instructions</h2>
            <ol className="instructions-list">
              {instructions.map((step, index) => (
                <li key={index}>
                  <span className="step-number">{index + 1}</span>
                  <span className="step-text">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailPage;