import PropTypes from 'prop-types';
import React from 'react';
import Headline, { HEADLINE_FONT_TYPE } from '../../common/Headline';
import Paragraph from '../../common/Paragraph/index';
import ProductImage from '../ProductImage/index';
import './style.scss';

export const productPropTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }),
  price: PropTypes.number,
  sale: PropTypes.number,
};

const ProductCard = ({ product, renderCardFooter }) => (
  <div className='product-card'>
    <div className='product-card__body'>
      {product.image && (
        <div className='product-card__product-image-wrapper'>
          <ProductImage alt={product.image.src} src={product.image.src} />
        </div>
      )}

      <Headline fontType={HEADLINE_FONT_TYPE.HANDWRITING}>
        {product.name}
      </Headline>

      {product.category && (
        <div className='product-card__product-category-wrapper'>
          <Paragraph>
            {product.category}
          </Paragraph>
        </div>
      )}

      {product.price && (
        <div className='product-card__product-price-wrapper'>
          <Paragraph>
            {product.price}
          </Paragraph>
        </div>
      )}
    </div>

    {renderCardFooter && renderCardFooter(product)}
  </div>
);

ProductCard.propTypes = {
  product: PropTypes.shape(productPropTypes).isRequired,
  renderCardFooter: PropTypes.func,
};

ProductCard.defaultProps = {
  renderCardFooter: null,
};

export default ProductCard;
