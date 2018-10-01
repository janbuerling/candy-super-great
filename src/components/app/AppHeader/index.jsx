import React from 'react';
import Paragraph from '../../common/Paragraph';
import AppLogo from '../AppLogo';
import './style.scss';

const AppHeader = () => (
  <header className='app-header'>
    <div className='app-header__logo-wrapper'>
      <AppLogo />
    </div>

    <div className='app-header__nav-wrapper'>
      <div className='app-header__nav-wrapper--left'>
        <Paragraph className='app-header__nav-item'>
          Our Sweets
        </Paragraph>
      </div>

      <div className='app-header__nav-wrapper--right'>
        <Paragraph className='app-header__nav-item'>
          My Sweets
        </Paragraph>
      </div>
    </div>
  </header>
);

export default AppHeader;
