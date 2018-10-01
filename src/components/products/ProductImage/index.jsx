import PropTypes from 'prop-types';
import React from 'react';
import Image from '../../common/Image';
import './style.scss';

const ProductImage = ({ alt, className, src }) => (
  <div className='product-image__image-wrapper'>
    <Image
      alt={alt}
      className={className}
      src={src}
    />
  </div>
);

ProductImage.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
};

ProductImage.defaultProps = {
  className: '',
};

export default ProductImage;
