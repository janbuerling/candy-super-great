import React from 'react';
import { Route } from 'react-router-dom';
import SweetsPage from '../../sweets/SweetsPage';
import './style.scss';

const AppPage = () => (
  <div className='app-page'>
    <Route path='/sweets' component={SweetsPage} exact />
    <Route path='/sweets-box' component={SweetsPage} exact />
  </div>
);

export default AppPage;
