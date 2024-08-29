import React, { useEffect, useState } from 'react';
import Header from './Header';
import CategoryNav from './CategoryNav';
import ProductGrid from './ProductGrid';
import ProductDetails from './ProductDetails';  // Import ProductDetails
import axios from 'axios';

const App = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProductId, setSelectedProductId] = useState(null); // State for selected product

  useEffect(() => {
    // Fetch product list
    axios.get('https://dummyjson.com/products')
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter((product) => product.category === selectedCategory.toLowerCase());

  // Handle product click
  const handleProductClick = (productId) => {
    setSelectedProductId(productId);
  };

  // Handle back button click
  const handleBackClick = () => {
    setSelectedProductId(null);
  };

  return (
    <div>
      <Header />
      <CategoryNav selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      
      {selectedProductId ? (
        <div>
          <button onClick={handleBackClick}>Back to Products</button>
          <ProductDetails productId={selectedProductId} />
        </div>
      ) : (
        <ProductGrid products={filteredProducts} onProductClick={handleProductClick} />
      )}
    </div>
  );
};

export default App;
