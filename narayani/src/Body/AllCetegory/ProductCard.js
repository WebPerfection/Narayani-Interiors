import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img className="product-image" src={product.images[0]} alt={product.name} draggable="false"/>
      <div className="product-details">
        <h3 className="product-name">{product.category}</h3>
        <p className="product-description">size: {product.size._length} X {product.size._width}</p>
      </div>
    </div>
  );
};

export default ProductCard;
