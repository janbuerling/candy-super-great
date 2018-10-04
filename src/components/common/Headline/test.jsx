import { shallow } from 'enzyme';
import React from 'react';
import Headline, { HEADLINE_COLOR, HEADLINE_FONT_TYPE, HEADLINE_STYLE, HEADLINE_TAG, HEADLINE_WEIGHT } from './index';

describe('Headline', () => {
  const defaultProps = {};
  let content = 'Test';

  const getComponent = props => shallow((
    <Headline {...defaultProps} {...props}>
      {content}
    </Headline>
  ));

  describe('Prop: children', () => {
    it('renders a string as content', () => {
      content = 'Test';

      const component = getComponent();

      expect(component.text()).toBe(content);
    });

    it('renders HTML as content', () => {
      // eslint-disable-next-line react/jsx-one-expression-per-line
      content = <span>Test</span>;

      const component = getComponent();

      expect(component.contains(content)).toBe(true);
    });

    it('renders a React component as content', () => {
      // eslint-disable-next-line react/jsx-one-expression-per-line
      const TestReactComponent = () => <div>Test</div>;
      content = <TestReactComponent />;

      const component = getComponent();

      expect(component.contains(content)).toBe(true);
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

  describe('Prop: color', () => {
    it('sets no specific color by default', () => {
      const component = getComponent();

      expect(component.hasClass('headline--color-default')).toBe(true);
    });

    it('sets no specific color it is passed explicitly', () => {
      const component = getComponent({
        color: HEADLINE_COLOR.DEFAULT,
      });

      expect(component.hasClass('headline--color-default')).toBe(true);
    });

    it('sets a white color if it is passed', () => {
      const component = getComponent({
        color: HEADLINE_COLOR.WHITE,
      });

      expect(component.hasClass('headline--color-white')).toBe(true);
    });
  });

  describe('Prop: fontType', () => {
    it('sets no specific  font by default', () => {
      const component = getComponent();

      expect(component.hasClass('headline--font-type-default')).toBe(true);
    });

    it('sets no specific font it is passed explicitly', () => {
      const component = getComponent({
        fontType: HEADLINE_FONT_TYPE.DEFAULT,
      });

      expect(component.hasClass('headline--font-type-default')).toBe(true);
    });

    it('sets a handwriting font if it is passed', () => {
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

  describe('Prop: noMargin', () => {
    it('has not the no-margin class by default', () => {
      const component = getComponent();

      expect(component.hasClass('headline--no-margin')).toBe(false);
    });

    it('has the no-margin class if passed explicitly', () => {
      const component = getComponent({
        noMargin: true,
      });

      expect(component.hasClass('headline--no-margin')).toBe(true);
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

  describe('Prop: weight', () => {
    it('sets no specific weight by default', () => {
      const component = getComponent();

      expect(component.hasClass('headline--weight-default')).toBe(true);
    });

    it('sets no specific weight it is passed explicitly', () => {
      const component = getComponent({
        weight: HEADLINE_WEIGHT.DEFAULT,
      });

      expect(component.hasClass('headline--weight-default')).toBe(true);
    });

    it('sets a bold weight if it is passed', () => {
      const component = getComponent({
        weight: HEADLINE_WEIGHT.BOLD,
      });

      expect(component.hasClass('headline--weight-bold')).toBe(true);
    });
  });
});
