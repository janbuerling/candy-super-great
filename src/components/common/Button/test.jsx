import { shallow } from 'enzyme';
import React from 'react';
import Button, {
  BUTTON_BACKGROUND_COLOR,
  BUTTON_FONT_TYPE,
  BUTTON_SHAPE,
  BUTTON_BORDER, BUTTON_COLOR,
} from './index';

describe('Button', () => {
  const defaultProps = {
    onClick: jest.fn(),
  };
  let content = 'Test';

  const getComponent = props => shallow((
    <Button {...defaultProps} {...props}>
      {content}
    </Button>
  ));

  it('has type="button" attribute to avoid unwanted form submissions', () => {
    const component = getComponent();

    expect(component.prop('type')).toBe('button');
  });

  describe('Prop: backgroundColor', () => {
    it('has the default background color if no button type is passed', () => {
      const component = getComponent();

      expect(component.hasClass('button--background-color-default')).toBe(true);
    });

    it('has the default background color if it is passed explicitly', () => {
      const component = getComponent({
        backgroundColor: BUTTON_BACKGROUND_COLOR.DEFAULT,
      });

      expect(component.hasClass('button--background-color-default')).toBe(true);
    });

    it('has the primary background color if it is passed', () => {
      const component = getComponent({
        backgroundColor: BUTTON_BACKGROUND_COLOR.PRIMARY,
      });

      expect(component.hasClass('button--background-color-primary')).toBe(true);
    });

    it('has the secondary background color if it is passed', () => {
      const component = getComponent({
        backgroundColor: BUTTON_BACKGROUND_COLOR.SECONDARY,
      });

      expect(component.hasClass('button--background-color-secondary')).toBe(true);
    });

    it('has the transparent color if it is passed', () => {
      const component = getComponent({
        backgroundColor: BUTTON_BACKGROUND_COLOR.TRANSPARENT,
      });

      expect(component.hasClass('button--background-color-transparent')).toBe(true);
    });
  });

  describe('Prop: color', () => {
    it('has the default color if no color is passed', () => {
      const component = getComponent();

      expect(component.hasClass('button--color-default')).toBe(true);
    });

    it('has the default color if it is passed explicitly', () => {
      const component = getComponent({
        color: BUTTON_COLOR.DEFAULT,
      });

      expect(component.hasClass('button--color-default')).toBe(true);
    });

    it('has the inverted styling if it is passed', () => {
      const component = getComponent({
        color: BUTTON_COLOR.WHITE,
      });

      expect(component.hasClass('button--color-white')).toBe(true);
    });
  });

  describe('Prop: border', () => {
    it('has the default border if no button type is passed', () => {
      const component = getComponent();

      expect(component.hasClass('button--border-default')).toBe(true);
    });

    it('has the default border if it is passed explicitly', () => {
      const component = getComponent({
        border: BUTTON_BORDER.DEFAULT,
      });

      expect(component.hasClass('button--border-default')).toBe(true);
    });

    it('has no border if it is passed', () => {
      const component = getComponent({
        border: BUTTON_BORDER.NONE,
      });

      expect(component.hasClass('button--border-none')).toBe(true);
    });
  });

  describe('Prop: fontType', () => {
    it('is set to sans-serif by default', () => {
      const component = getComponent();

      expect(component.hasClass('button--font-type-default')).toBe(true);
    });

    it('is set to default if passed explicitly', () => {
      const component = getComponent({
        fontType: BUTTON_FONT_TYPE.DEFAULT,
      });

      expect(component.hasClass('button--font-type-default')).toBe(true);
    });

    it('is set to handwriting if passed', () => {
      const component = getComponent({
        fontType: BUTTON_FONT_TYPE.HANDWRITING,
      });

      expect(component.hasClass('button--font-type-handwriting')).toBe(true);
    });
  });


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

  describe('Prop: isDisabled', () => {
    it('is not disabled by default', () => {
      const component = getComponent();

      expect(component.prop('disabled')).toBe(false);
    });

    it('is not disabled if false is passed explicitly', () => {
      const component = getComponent({
        isDisabled: false,
      });

      expect(component.prop('disabled')).toBe(false);
    });

    it('is disabled if true is passed', () => {
      const component = getComponent({
        isDisabled: true,
      });

      expect(component.prop('disabled')).toBe(true);
    });
  });

  describe('Prop: onClick', () => {
    it('calls the passed callback when the button was clicked', () => {
      const handler = jest.fn();

      const component = getComponent({
        onClick: handler,
      });

      component.simulate('click');

      expect(handler).toHaveBeenCalled();
    });
  });

  describe('Prop: shape', () => {
    it('has the default shape if no button type is passed', () => {
      const component = getComponent();

      expect(component.hasClass('button--shape-default')).toBe(true);
    });

    it('has the default shape if it is passed explicitly', () => {
      const component = getComponent({
        shape: BUTTON_SHAPE.DEFAULT,
      });

      expect(component.hasClass('button--shape-default')).toBe(true);
    });

    it('has the rounded shape if it is passed', () => {
      const component = getComponent({
        shape: BUTTON_SHAPE.ROUNDED,
      });

      expect(component.hasClass('button--shape-rounded')).toBe(true);
    });

    it('has the cornered shape if it is passed', () => {
      const component = getComponent({
        shape: BUTTON_SHAPE.CORNERED,
      });

      expect(component.hasClass('button--shape-cornered')).toBe(true);
    });
  });

  describe('Prop: type', () => {
    it('sets the type button if no type is passed', () => {
      const component = getComponent();

      expect(component.prop('type')).toBe('button');
    });

    it('sets the type button if it is passed explicitly', () => {
      const component = getComponent({
        type: 'button',
      });

      expect(component.prop('type')).toBe('button');
    });

    it('sets the type submit if it is passed', () => {
      const component = getComponent({
        type: 'submit',
      });

      expect(component.prop('type')).toBe('submit');
    });
  });
});
