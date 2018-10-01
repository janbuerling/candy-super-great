import PropTypes from 'prop-types';
import React from 'react';
import SweetCard from '../SweetCard';

const SweetsList = ({ sweets }) => (
  <div className='sweets-list'>
    {sweets.map(sweet => (
      <SweetCard key={sweet.id} sweet={sweet} />
    ))}
  </div>
);

SweetsList.propTypes = {
  sweets: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      category: PropTypes.string,
      image: PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string,
      }),
      price: PropTypes.number,
      sale: PropTypes.number,
    }).isRequired,
  ),
};

SweetsList.defaultProps = {
  sweets: [],
};

export default SweetsList;
