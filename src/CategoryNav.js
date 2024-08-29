import React from 'react';
import './CategoryNav.css';

const categories = ['All', 'Beauty', 'Fragrances', 'Furniture', 'Groceries'];

const CategoryNav = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <nav className="category-nav">
      {categories.map((category, index) => (
        <button
          key={index}
          className={`category-button ${selectedCategory === category ? 'active' : ''}`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </nav>
  );
};

export default CategoryNav;
