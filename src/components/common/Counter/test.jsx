import { shallow } from 'enzyme';
import React from 'react';
import Counter from './index';

describe('Counter', () => {
  const defaultProps = {};

  const getComponent = props => shallow((
    <Counter {...defaultProps} {...props} />
  ));

  describe('Prop: onChange', () => {
    it('call prop function onChange if a button plus clicked', () => {
      const handler = jest.fn();
      const component = getComponent({
        onChange: handler,
      });

      component.find('.counter__counter-button-plus').simulate('click');
      expect(handler).toHaveBeenCalled();
    });
  });
});
