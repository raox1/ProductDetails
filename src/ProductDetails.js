import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './ProductDetails.module.css'; // Assuming you're using CSS Modules

const ProductDetails = ({ productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (productId) {
      // Fetch single product details
      axios.get(`https://dummyjson.com/products/${productId}`)
        .then(response => {
          setProduct(response.data);
        })
        .catch(error => {
          console.error('Error fetching the product details!', error);
        });
    }
  }, [productId]);

  if (!product) return <p className={styles.loading}>Loading...</p>;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src={product.thumbnail} alt={product.title} className={styles.image} />
        <div className={styles.details}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.price}>${product.price}</p>
        </div>
      </div>
      <div className={styles.additionalInfo}>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Discount Percentage:</strong> {product.discountPercentage}%</p>
        <p><strong>Rating:</strong> {product.rating} / 5</p>
        <p><strong>Stock:</strong> {product.stock}</p>
        <p><strong>Brand:</strong> {product.brand}</p>
        <p><strong>SKU:</strong> {product.sku}</p>
        <p><strong>Weight:</strong> {product.weight}g</p>
        <p><strong>Dimensions (W x H x D):</strong> {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} cm</p>
        <p><strong>Warranty Information:</strong> {product.warrantyInformation}</p>
        <p><strong>Shipping Information:</strong> {product.shippingInformation}</p>
        <p><strong>Availability Status:</strong> {product.availabilityStatus}</p>
        <p><strong>Return Policy:</strong> {product.returnPolicy}</p>
        <p><strong>Minimum Order Quantity:</strong> {product.minimumOrderQuantity}</p>
        <p><strong>Barcode:</strong> {product.meta.barcode}</p>
        <img src={product.meta.qrCode} alt="QR Code" className={styles.qrCode} />

        {/* Display product images */}
        <div className={styles.images}>
          <h2>Images</h2>
          {product.images.map((image, index) => (
            <img key={index} src={image} alt={`${product.title} ${index + 1}`} className={styles.productImage} />
          ))}
        </div>
        
        {/* Display reviews */}
        <div className={styles.reviews}>
          <h2>Reviews</h2>
          {product.reviews.map((review, index) => (
            <div key={index} className={styles.review}>
              <p><strong>{review.reviewerName}</strong> ({new Date(review.date).toLocaleDateString()}):</p>
              <p>Rating: {review.rating} / 5</p>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
