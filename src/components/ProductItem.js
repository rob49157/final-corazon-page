import React, { Component } from "react";
// import stripHtml from 'string-strip-html';
import PropTypes from 'prop-types';

const ProductItem = ({ product }) => {

  const { result } = (product.description);

  return (
    <div className="product__card">
      <img className="product__image" src={product.image?.url} alt={product.name} />
      <div className="product__info">
        <h4 className="product__name">{product.name}</h4>
        <h5 className="product__description">
          {product.description}
          {/* product description stripped of html tags */}
          {result}
        </h5>
        <div className="product__details">
          <p className="product__price">
            {product.price.formatted_with_symbol}
          </p>
        </div>
      </div>
    </div> 
  );
};

ProductItem.propTypes = {
  product: PropTypes.object,
};

export default ProductItem;