import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>Gordon Ramsay</h3>
          <p>Master Chef & Culinary Icon</p>
        </div>
        
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#recipes">Recipes</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>
        
        <div className="footer-social">
          <h4>Follow Gordon</h4>
          <div className="social-icons">
            <a href="https://twitter.com/gordonramsay" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://www.instagram.com/gordongram/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.youtube.com/user/gordonramsay" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Gordon Ramsay Fan Page - Created for College Project</p>
      </div>
    </footer>
  );
};

export default Footer;