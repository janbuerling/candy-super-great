import { shallow } from 'enzyme';
import React from 'react';
import Paragraph, { PARAGRAPH_ALIGN, PARAGRAPH_COLOR, PARAGRAPH_FONT_TYPE } from './index';

describe('Paragraph', () => {
  const defaultProps = {};
  let content = 'Test';

  const getComponent = props => shallow((
    <Paragraph {...defaultProps} {...props}>
      {content}
    </Paragraph>
  ));

  describe('Content (Prop: children)', () => {
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

  describe('Prop: color', () => {
    it('has the default color if no color is passed', () => {
      const component = getComponent();

      expect(component.hasClass('paragraph')).toBe(true);
      expect(component.hasClass('paragraph--color-default')).toBe(true);
    });

    it('has the default color if it is passed explicitly', () => {
      const component = getComponent({
        color: PARAGRAPH_COLOR.DEFAULT,
      });

      expect(component.hasClass('paragraph')).toBe(true);
      expect(component.hasClass('paragraph--color-default')).toBe(true);
    });

    it('has the inverted styling if it is passed', () => {
      const component = getComponent({
        color: PARAGRAPH_COLOR.WHITE,
      });

      expect(component.hasClass('paragraph')).toBe(true);
      expect(component.hasClass('paragraph--color-white')).toBe(true);
    });
  });

  describe('Prop: align', () => {
    it('has no align class if no align value is passed', () => {
      const component = getComponent();

      expect(component.hasClass('paragraph--align-left')).not.toBe(true);
      expect(component.hasClass('paragraph--align-center')).not.toBe(true);
      expect(component.hasClass('paragraph--align-right')).not.toBe(true);
    });

    it('has left align class if it is passed explicitly', () => {
      const component = getComponent({
        align: PARAGRAPH_ALIGN.LEFT,
      });

      expect(component.hasClass('paragraph--align-left')).toBe(true);
    });

    it('has center align class if it is passed explicitly', () => {
      const component = getComponent({
        align: PARAGRAPH_ALIGN.CENTER,
      });

      expect(component.hasClass('paragraph--align-center')).toBe(true);
    });

    it('has right align class if it is passed explicitly', () => {
      const component = getComponent({
        align: PARAGRAPH_ALIGN.RIGHT,
      });

      expect(component.hasClass('paragraph--align-right')).toBe(true);
    });
  });

  describe('Prop: fontType', () => {
    it('uses a default font by default', () => {
      const component = getComponent();

      expect(component.hasClass('paragraph--font-type-default')).toBe(true);
    });

    it('uses a default font if passed explicitly', () => {
      const component = getComponent({
        fontType: PARAGRAPH_FONT_TYPE.DEFAULT,
      });

      expect(component.hasClass('paragraph--font-type-default')).toBe(true);
    });

    it('uses a handwriting font if it is passed', () => {
      const component = getComponent({
        fontType: PARAGRAPH_FONT_TYPE.HANDWRITING,
      });

      expect(component.hasClass('paragraph--font-type-handwriting')).toBe(true);
    });
  });
});
