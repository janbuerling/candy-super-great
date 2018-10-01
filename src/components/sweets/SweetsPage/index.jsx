import React from 'react';
import SweetsList from '../SweetsList';
import { SweetsContext } from '../SweetsProvider';

const SweetsPage = () => (
  <div className='sweets-page'>
    <SweetsContext.Consumer>
      {({ sweets }) => (
        <SweetsList sweets={sweets} />
      )}
    </SweetsContext.Consumer>
  </div>
);

export default SweetsPage;
