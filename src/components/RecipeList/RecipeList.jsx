import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import './RecipeList.css';

const RecipeList = ({ recipes }) => {
  return (
    <section className="recipe-list" id="recipes">
      <h2 className="section-title">Gordon's Signature Recipes</h2>
      
      {recipes.length === 0 ? (
        <div className="no-recipes">
          <p>No recipes found. Try adjusting your search or filters.</p>
        </div>
      ) : (
        <div className="recipes-grid">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </section>
  );
};

export default RecipeList;