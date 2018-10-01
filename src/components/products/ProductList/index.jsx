import PropTypes from 'prop-types';
import React from 'react';
import ProductCard, { productPropTypes } from '../ProductCard/index';
import './style.scss';

const ProductList = ({ products }) => (
  <div className='product-list'>
    {products.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape(productPropTypes).isRequired,
  ),
};

ProductList.defaultProps = {
  products: [],
};

export default ProductList;
