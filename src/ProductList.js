import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = ({ onProductSelect }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product list
    axios.get('https://dummyjson.com/products')
      .then(response => {
        setProducts(response.data.products);
      })
      .catch(error => {
        console.error('Error fetching the products!', error);
      });
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <button onClick={() => onProductSelect(product.id)}>View Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
