import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Welcome to Gordon Ramsay's World</h1>
        <p>Discover the culinary genius of one of the world's most renowned chefs</p>
        <a href="#recipes" className="cta-button">Explore Recipes</a>
      </div>
      <div className="hero-overlay"></div>
    </section>
  );
};

export default Hero;