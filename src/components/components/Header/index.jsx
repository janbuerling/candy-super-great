import React from 'react';
import candyLogo from '../../../assets/images/candy-logo.png';
import './style.scss';

const AppHeader = () => (
  <header className='app-header'>
    <img src={candyLogo} className='app-header__logo' alt='logo' />
  </header>
);

export default AppHeader;
