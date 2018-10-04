import PropTypes from 'prop-types';
import React from 'react';
import ProductCard, { productPropTypes } from '../ProductCard/index';
import './style.scss';

const ProductList = ({ products, renderCardFooter }) => (
  <div className='product-list'>
    {products.map(product => (
      <ProductCard
        key={product.id}
        product={product}
        renderCardFooter={renderCardFooter}
      />
    ))}
  </div>
);

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape(productPropTypes).isRequired),
  renderCardFooter: PropTypes.func,
};

ProductList.defaultProps = {
  products: [],
  renderCardFooter: null,
};

export default ProductList;
