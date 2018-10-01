import React from 'react';
import ProductList from '../../products/ProductList';
import { SweetsContext } from '../SweetsProvider';

const SweetsPage = () => (
  <div className='sweets-page'>
    <SweetsContext.Consumer>
      {({ sweets }) => (
        <ProductList products={sweets} />
      )}
    </SweetsContext.Consumer>
  </div>
);

export default SweetsPage;
