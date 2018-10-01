import { shallow } from 'enzyme';
import React from 'react';
import Headline, { HEADLINE_COLOR, HEADLINE_FONT_TYPE, HEADLINE_STYLE, HEADLINE_TAG } from './index';

describe('Headline', () => {
  const defaultProps = {};
  let content = 'Test';

  const getComponent = props => shallow((
    <Headline {...defaultProps} {...props}>
      {content}
    </Headline>
  ));

  describe('Content (Prop: children)', () => {
    it('renders the given content', () => {
      content = 'Test';
      const component = getComponent();

      expect(component.text()).toBe(content);
    });
  });

  describe('Prop: color', () => {
    it('sets no specific color by default', () => {
      const component = getComponent();

      expect(component.hasClass('headline--color-white')).not.toBe(true);
    });

    it('sets no specific color it is passed explicitly', () => {
      const component = getComponent({
        color: HEADLINE_COLOR.DEFAULT,
      });

      expect(component.hasClass('headline--color-white')).not.toBe(true);
    });

    it('sets a white color if it is passed', () => {
      const component = getComponent({
        color: HEADLINE_COLOR.WHITE,
      });

      expect(component.hasClass('headline--color-white')).toBe(true);
    });
  });

  describe('Prop: fontType', () => {
    it('uses a default font by default', () => {
      const component = getComponent();

      expect(component.hasClass('headline--font-type-default')).toBe(true);
    });

    it('uses a default font if passed explicitly', () => {
      const component = getComponent({
        fontType: HEADLINE_FONT_TYPE.DEFAULT,
      });

      expect(component.hasClass('headline--font-type-default')).toBe(true);
    });

    it('uses a handwriting font if it is passed', () => {
      const component = getComponent({
        fontType: HEADLINE_FONT_TYPE.HANDWRITING,
      });

      expect(component.hasClass('headline--font-type-handwriting')).toBe(true);
    });
  });

  describe('Prop: headlineStyle', () => {
    it('uses a h2 styling by default', () => {
      const component = getComponent();

      expect(component.hasClass('headline--style-h2')).toBe(true);
    });

    it('sets the headline style correctly', () => {
      const headlineStyle = HEADLINE_STYLE.H5;
      const component = getComponent({
        headlineStyle,
      });

      expect(component.hasClass('headline--style-h5')).toBe(true);
    });
  });

  describe('Prop: tag', () => {
    it('sets an H2 tag by default', () => {
      const component = getComponent();

      expect(component.find(HEADLINE_TAG.H2)).toHaveLength(1);
    });

    it('sets the tag correctly', () => {
      const component = getComponent({
        tag: HEADLINE_TAG.H5,
      });

      expect(component.find(HEADLINE_TAG.H5)).toHaveLength(1);
    });
  });
});
