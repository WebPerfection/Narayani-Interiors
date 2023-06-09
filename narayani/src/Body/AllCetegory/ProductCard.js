import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card" data-aos="zoom-in-up" data-aos-offset="120">
      <img className="product-image" loading="lazy" src={product.images[0]} alt={product.name} draggable="false"/>
      <div className="product-details">
        <p className="product-name">{product.title}</p>
        <p className="product-description"> <b>Size :</b>{product.size._length}X{product.size._width}</p>
      </div>
    </div>
  );
};

export default ProductCard;
