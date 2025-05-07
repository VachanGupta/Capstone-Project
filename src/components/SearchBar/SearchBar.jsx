import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch, onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    type: 'all', 
    prepTime: 'all' 
  });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value, filters);
  };

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    onFilterChange(searchTerm, newFilters);
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for recipes..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="search-button">Search</button>
      </div>
      
      <div className="filters">
        <div className="filter-group">
          <label>Type:</label>
          <select 
            value={filters.type} 
            onChange={(e) => handleFilterChange('type', e.target.value)}
          >
            <option value="all">All</option>
            <option value="veg">Vegetarian</option>
            <option value="non-veg">Non-Vegetarian</option>
          </select>
        </div>
        
        <div className="filter-group">
          <label>Prep Time:</label>
          <select 
            value={filters.prepTime} 
            onChange={(e) => handleFilterChange('prepTime', e.target.value)}
          >
            <option value="all">All</option>
            <option value="quick">Quick (&lt; 30 min)</option>
            <option value="medium">Medium (30-60 min)</option>
            <option value="long">Long (&gt; 60 min)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;