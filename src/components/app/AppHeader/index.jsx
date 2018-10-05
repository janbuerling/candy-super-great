import React from 'react';
import { NavLink } from 'react-router-dom';
import AppLogo from '../AppLogo';
import './style.scss';

const AppHeader = () => (
  <header className='app-header'>
    <div className='app-header__logo-wrapper'>
      <AppLogo />
    </div>

    <div className='app-header__nav-wrapper'>
      <div className='app-header__nav-wrapper--left'>
        <NavLink to='/sweets' className='app-header__nav-item'>
          View Our Sweets
        </NavLink>
      </div>

      <div className='app-header__nav-wrapper--right'>
        {/* ADD NEW LINKS HERE */}
      </div>
    </div>
  </header>
);

export default AppHeader;
