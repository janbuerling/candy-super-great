import React from 'react';
import Headline from '../../common/Headline';
import logo from '../../../assets/images/logo.svg';
import './style.scss';

const AppHeader = () => (
  <header className='app-header'>
    <img src={logo} className='app-header__logo' alt='logo' />

    <Headline>
      I´m just here for the candy!
    </Headline>
  </header>
);

export default AppHeader;
