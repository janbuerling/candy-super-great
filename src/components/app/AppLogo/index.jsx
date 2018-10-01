import React from 'react';
import Headline, { HEADLINE_COLOR, HEADLINE_FONT_TYPE, HEADLINE_STYLE, HEADLINE_TAG } from '../../common/Headline';
import './style.scss';
import Paragraph, { PARAGRAPH_COLOR } from '../../common/Paragraph';

const AppLogo = () => (
  <div className='app-logo'>
    <div className='app-logo__box' />

    <div className='app-logo__headlines'>
      <Headline
        tag={HEADLINE_TAG.H1}
        headlineStyle={HEADLINE_STYLE.H1}
        color={HEADLINE_COLOR.WHITE}
        fontType={HEADLINE_FONT_TYPE.HANDWRITING}
        className='app-logo__headline'
      >
        Sweets Super Great
      </Headline>

      <Paragraph
        color={PARAGRAPH_COLOR.WHITE}
        className='app-logo__subheadline'
      >
        I´m just here for the sweets!
      </Paragraph>
    </div>
  </div>
);

export default AppLogo;
