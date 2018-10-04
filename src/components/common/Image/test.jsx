import { shallow } from 'enzyme';
import React from 'react';
import Image from './index';

describe('Image', () => {
  const defaultSrc = '../image/default/src';
  const defaultAlt = 'My Default Alt';
  const defaultProps = {
    alt: defaultAlt,
    src: defaultSrc,
  };

  const getComponent = props => shallow((
    <Image {...defaultProps} {...props} />
  ));

  describe('Prop: alt', () => {
    it('has an alt tag if it is passed', () => {
      const alt = 'My Alt';
      const component = getComponent({
        alt,
      });

      expect(component.prop('alt')).toBe(alt);
    });
  });

  describe('Prop: className', () => {
    it('has the custom class if it is passed', () => {
      const className = 'custom-class-name';
      const component = getComponent({
        className,
      });

      expect(component.hasClass(className)).toBe(true);
    });
  });

  describe('Prop: src', () => {
    it('has a src if it is passed', () => {
      const src = '../image/src';
      const component = getComponent({
        src,
      });

      expect(component.prop('src')).toBe(src);
    });
  });
});
