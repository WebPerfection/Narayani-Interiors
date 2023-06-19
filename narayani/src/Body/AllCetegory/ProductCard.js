import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img className="product-image" src={product.images[0]} alt={product.name} draggable="false"/>
      <div className="product-details">
        <p className="product-name">{product.title}</p>
        <p className="product-description"> <b>Size :</b>{product.size._length}X{product.size._width}</p>
      </div>
    </div>
  );
};

export default ProductCard;
