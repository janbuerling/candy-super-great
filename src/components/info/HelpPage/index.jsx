import React from 'react';

const HelpPage = () => (
  <div className='help-page'>
    Help Page

    <object
      type='text/html'
      data='https://reactjs.org/docs/hello-world.html'
      style={{ width: '100%', height: '100%' }}
    >
      <p>backup content</p>
    </object>
  </div>
);

export default HelpPage;
