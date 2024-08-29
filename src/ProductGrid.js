import React from 'react';
import './ProductGrid.css';

const ProductGrid = ({ products, onProductClick }) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card" onClick={() => onProductClick(product.id)}>
          <img src={product.thumbnail} alt={product.title} className="product-image" />
          <h2 className="product-title">{product.title}</h2>
          <p className="product-description">{product.description.slice(0, 50)}...</p>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
