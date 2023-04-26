// App.js

import React from 'react';
import ProductCard from './ProductCard';
import './App.css';

function App() {
  const productDetails = [
    {
      productId: '1',
      productPic: 'https://i.pinimg.com/736x/2b/e9/4d/2be94de3d0f1ee523da6fa68118ebf96.jpg',
      productName: 'Sports Shoes',
      brand: 'Adidas',
      productDescription: 'Lightweight and comfortable sports shoes for all types of activities.',
      price: '4000 INR',
      rating: 4,
    },
    {
      productId: '2',
      productPic: 'https://m.media-amazon.com/images/I/51lIbavjJFL._SY450_.jpg',
      productName: 'Men\'s Watch',
      brand: 'Titan',
      productDescription: 'Stylish and durable men\'s watch with leather strap.',
      price: '2500 INR',
      rating: 3.5,
    },
    {
      productId: '3',
      productPic: 'https://m.media-amazon.com/images/I/61v7JxwCj+L._SY450_.jpg',
      productName: 'Laptop',
      brand: 'HP',
      productDescription: 'Powerful and versatile laptop for all your computing needs.',
      price: '60000 INR',
      rating: 4.5,
    },
  ];

  return (
    <div className="product-cards-container">
      {productDetails.map(productDetail => (
        <ProductCard key={productDetail.productId} productDetail={productDetail} />
      ))}
    </div>
  );
}

export default App;
