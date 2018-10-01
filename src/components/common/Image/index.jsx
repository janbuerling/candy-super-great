import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import './style.scss';

const Image = ({ alt, className, src }) => (
  <img
    alt={alt}
    className={classNames(
      'image',
      className,
    )}
    src={src}
  />
);

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Image.defaultProps = {
  className: '',
};

export default Image;
