import PropTypes from 'prop-types';
import React from 'react';
import Paragraph from '../../common/Paragraph';

const SweetCard = ({ sweet }) => (
  <div className='sweet-card'>
    {sweet.image && (
      <img src={sweet.image.src} alt={sweet.image.alt} />
    )}

    <Paragraph>
      {sweet.name}
    </Paragraph>

    {sweet.description && (
      <Paragraph>
        {sweet.description}
      </Paragraph>
    )}

    {sweet.price && (
      <Paragraph>
        {sweet.price}
      </Paragraph>
    )}
  </div>
);

SweetCard.propTypes = {
  sweet: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    }),
    price: PropTypes.number,
  }).isRequired,
};

export default SweetCard;
