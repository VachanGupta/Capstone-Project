import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import SearchBar from './components/SearchBar/SearchBar';
import RecipeList from './components/RecipeList/RecipeList';
import RecipeDetailPage from './components/RecipeDetailPage/RecipeDetailPage';
import Footer from './components/Footer/Footer';
import recipeData from './data/recipes';
import './App.css';

const App = () => {
  const allRecipes = recipeData;
  const [recipes, setRecipes] = useState(allRecipes);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  
  // Search and filter functionality
  const handleSearch = (searchTerm, filters) => {
    let filteredRecipes = allRecipes;
    
    // Filter by search term
    if (searchTerm) {
      filteredRecipes = filteredRecipes.filter(recipe => 
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by type (veg/non-veg)
    if (filters.type !== 'all') {
      filteredRecipes = filteredRecipes.filter(recipe => recipe.type === filters.type);
    }
    
    // Filter by prep time
    if (filters.prepTime !== 'all') {
      switch(filters.prepTime) {
        case 'quick':
          filteredRecipes = filteredRecipes.filter(recipe => recipe.prepTime < 30);
          break;
        case 'medium':
          filteredRecipes = filteredRecipes.filter(recipe => recipe.prepTime >= 30 && recipe.prepTime <= 60);
          break;
        case 'long':
          filteredRecipes = filteredRecipes.filter(recipe => recipe.prepTime > 60);
          break;
        default:
          break;
      }
    }
    
    setRecipes(filteredRecipes);
  };

  // Handle recipe selection
  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  // Close recipe detail view
  const handleCloseDetail = () => {
    setSelectedRecipe(null);
  };

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <div className="main-content">
                <SearchBar onSearch={handleSearch} onFilterChange={handleSearch} />
                <RecipeList recipes={recipes} />
              </div>
            </>
          } />
          <Route path="/recipes" element={
            <div className="main-content">
              <SearchBar onSearch={handleSearch} onFilterChange={handleSearch} />
              <RecipeList recipes={recipes} />
            </div>
          } />
          <Route path="/recipe/:id" element={<RecipeDetailPage recipes={allRecipes} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App