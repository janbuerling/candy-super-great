import React from 'react';
import { Link } from 'react-router-dom';
import AppLogo from '../AppLogo';
import './style.scss';

const AppHeader = () => (
  <header className='app-header'>
    <div className='app-header__logo-wrapper'>
      <AppLogo />
    </div>

    <div className='app-header__nav-wrapper'>
      <div className='app-header__nav-wrapper--left'>
        <Link to='/sweets' className='app-header__nav-item'>
          View Our Sweets
        </Link>
      </div>

      <div className='app-header__nav-wrapper--right'>
        <Link to='/sweets-box' className='app-header__nav-item'>
          My Sweets Box
        </Link>
      </div>
    </div>
  </header>
);

export default AppHeader;
