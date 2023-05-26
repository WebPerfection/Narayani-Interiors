import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import './productCard.css';
const ProductList = ({ products }) => {
  return (
    <>
    
    <div className="product-list">
      {products.map((product) => (
        <Link to={`/Images/${product._id}`}>
        <ProductCard key={product.id} product={product} />
        </Link>
      ))}
    </div>
   
    </>
  );
};

export default ProductList;
