import React from 'react';
import { Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import HelpPage from '../../info/HelpPage';
import SweetsPage from '../../sweets/SweetsPage';
import './style.scss';

const AppPage = () => (
  <div className='app-page'>
    <ToastContainer />

    <Route path='/help' component={HelpPage} exact />
    <Route path='/sweets' component={SweetsPage} exact />

    {/* ADD NEW ROUTES HERE */}
  </div>
);

export default AppPage;
